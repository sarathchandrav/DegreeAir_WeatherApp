import React from 'react';
import { fetchSearchCityAPI } from './actions/index';
import { connect } from 'react-redux';
import styled from 'styled-components';

const theme = {
    fg: "#E7B833",
    bg: "white"
}

const invertTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg
});

const Table = styled.table`
                        border : 3px solid black;
                        min-width: -webkit-fill-available;
                        `
const Th = styled.th`
border : 0  px solid black;
`
const Td = styled.td`
border : 1px solid black;
background: lightgrey
`
const Color = styled.div`background:${props => props.severity > 25 ? "red" : "green"}`
const Button = styled.button`
                            font-size: 1em;
                            border-radius: 3px;
                            color: ${props => props.inverted ? "white" : "black"};
                            background-color: ${props => props.inverted ? "black" : "white"};
                            `

const AreaLabel = styled(Button)`height:40px;width:100%`

const AreaContainer = styled.div`
                                background-color: #C1C1C1;
                                `

const R_SideNav = styled(AreaContainer)`
                                        width:70%;
                                        float:Right;
                                        position:relative;
                                        top:-640px;
                                        `
const PollutionInfoContainer = styled.div`background:darkgrey;
                                          padding:5px;
                                         `
const Text = styled.p`font-size:larger;
                    border:1px solid black;
                    background: "green"
                    `


const NavBar = styled.div`       
                        background: #2185D0;
                        padding:10px;
                        color: white;
                        `
const SideNav = styled.div`width:54%;`



class inputLocationAirQuality extends React.Component {
    state = { loading: true }
    componentDidMount() {
        this.props.fetchSearchCityAPI(this.props.match.params.cityname);
        setTimeout(
            function () {
                this.setState({ loading: false });
            }.bind(this),
            5000
        );
    }

    cityLocationList() {
        return (
            <div>
                {this.props.posts.results.map(function (area, idx) {
                    return (
                        <SideNav>
                            <AreaContainer>
                                <AreaLabel key={idx}>
                                    {area.location}
                                </AreaLabel>
                            </AreaContainer>
                        </SideNav>
                    )
                })}
            </div>
        )
    }
    PollutionRepoList = (measurements) =>{
        return measurements.map(measurement => {
            return(<tr>
                <Td>{measurement.parameter}</Td>
                <Td>{measurement.value}</Td>
                <Td>{measurement.unit}</Td>
                <Td severity={measurement.value}><Color>color</Color></Td>
                <Td>{measurement.lastUpdated}</Td>
            </tr>)
            
        })
    }

    tabledInfo() {
        return this.props.posts.results.map(area => {
                    return (
                        <div >
                            <PollutionInfoContainer>
                                <Text>City Location: {area.location},&nbsp; {area.city} &nbsp; {area.country}</Text>
                            </PollutionInfoContainer>
                            <Table>
                                <tbody>
                                    <tr>
                                        <Th>CHEMICAL</Th>
                                        <Th>VALUE</Th>
                                        <Th>UNITS</Th>
                                        <Th>SEVERITY</Th>
                                        <Th>LAST UPDATED</Th>
                                    </tr>
                                    {this.PollutionRepoList(area.measurements)}
                                </tbody>
                            </Table>
                        </div>
                    )
                }
        )}

    render() {
        //console.log(this.props)

        return (
            <div className="mainContainer">
                {this.state.loading || !this.props.posts ? (
                    <div style={{ height: '100vh', width: '100%' }} className="ui segment">
                        <div className="ui active dimmer">
                            <div className="ui text loader">Loading</div>
                        </div>
                    </div>
                ) : (
                        <div className="innerContainer">
                            <NavBar>
                                Hyderabad, 16 Area Pollution Report
                                <button style={{ float: "right" }} onClick={() => { this.props.history.goBack() }}>back</button>
                            </NavBar>
                            <SideNav>
                                {this.cityLocationList()}
                            </SideNav>
                            <R_SideNav>
                                {this.tabledInfo()}
                            </R_SideNav>


                        </div>

                    )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: state.cityAirQuality }
}

export default connect(mapStateToProps, { fetchSearchCityAPI })(inputLocationAirQuality);