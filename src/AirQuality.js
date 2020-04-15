import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from './actions/index';

import './css/AirQuality';
import AirQualSearch from './AirQualSearch';

import styled from 'styled-components';

const NavBar = styled.div`       
                        background: #2185D0;
                        padding:0px 5px 0px 5px;
                        color: white;
                        `
const Label = styled.div`
                        position: relative;
                        top:-15px;
                        font-size:x-large;
                        display:inline;
                        `
const Table = styled.table`
                        border : 3px solid black;
                        min-width: -webkit-fill-available;
                        `
const Th = styled.th`
border : 0  px solid black;
`
const Td = styled.td`
border : 1px solid black;
`
const Color = styled.div`background:${props => props.severity ? props.severity : "lightgreen"}`
const SearchBarDiv = styled.div`float:right;margin-top:15px;`
const PollutionInfoContainer = styled.div`background:darkgrey;
                                        padding:5px;
                                        `
const Text = styled.p`font-size:larger;
                    border:1px solid black;
                    background: ${props => props.severity ? props.severity : "lightblue"}
                    `

class AirQuality extends React.Component {
    state = { loading: true, resp:null }
    componentDidMount() {
        this.props.fetchAPI();
        // setTimeout(
        //     function () {
        //         this.setState({ loading: false });
        //     }.bind(this),
        //     3000
        // );
        this.setState({ resp: this.props.posts, loading: false })
    }

    renderList() {
        console.log(this.props.posts)
        if (this.props.posts.aqiParams) {
            return this.props.posts.aqiParams.map(post => {
                return (
                    <tr key={post.name}>
                        <Td>{post.name} </Td>
                        <Td>{post.value} </Td>
                        <Td>{post.aqi}</Td>
                        <Td><Color severity={post.color}>color</Color></Td>
                        <Td>{post.text}</Td>
                        <Td>{post.updated}</Td>
                    </tr>
                )
            })
        }

    }
    searchBar() {
        if (this.props.posts.source) {
            const imgSrc = this.props.posts.clouds.split(",")[1].slice(8)
            return (
                <NavBar>
                    <Label>{this.props.posts.source.name}, {this.props.posts.country}</Label>
                    <img src={imgSrc}></img>
                    <SearchBarDiv><AirQualSearch /></SearchBarDiv>
                </NavBar>
            )
        }

    }
    pollutionInfo() {
        return (
            <PollutionInfoContainer>
                <Text>
                    {this.props.posts.alert}
                </Text>
                <div>
                    <Text severity={this.props.posts.color}>Value:&nbsp;{this.props.posts.value},&nbsp;Index Value:&nbsp;{this.props.posts.index}  </Text>
                    <Text>Temperature:&nbsp;{this.props.posts.temp}&deg;,&nbsp;Last Updated On:&nbsp;{this.props.posts.updated} </Text>
                    <Text>Accuracy:&nbsp;{this.props.posts.accuracy},&nbsp;Dominating:&nbsp;{this.props.posts.dominating}</Text>
                </div>
            </PollutionInfoContainer>
        )
    }

    render() {
        return (
            <div className="mainContainer">
                {!this.state.resp || this.state.loading ? (
                    <div style={{ height: '100vh', width: '100%' }} className="ui segment">
                        <div className="ui active dimmer">
                            <div className="ui text loader">Loading</div>
                        </div>
                    </div>
                ) : (
                        <div className="innerContainer">
                            {this.searchBar()}
                            {this.pollutionInfo()}
                            <Table>
                                <tbody >
                                    <tr >
                                        <Th>CHEMICAL NAME    </Th>
                                        <Th>CHEMICAL VALUE   </Th>
                                        <Th>AIR QUALITY INDEX</Th>
                                        <Th>SEVERITY         </Th>
                                        <Th>REMARK           </Th>
                                        <Th>LAST UPDATE      </Th>
                                    </tr>
                                    {this.renderList()}
                                </tbody>
                            </Table>
                        </div>
                    )}
            </div>)
    };
}

const mapStateToProps = (state) => {
    return { posts: state.airQuality }
}

export default connect(mapStateToProps, { fetchAPI })(AirQuality);
