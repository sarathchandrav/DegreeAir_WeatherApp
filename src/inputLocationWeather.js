import './css/inputlocoWeather.scss'

import React from 'react';
import axios from 'axios';



class inputLocationWeather extends React.Component {
    state = {
        resp: null,
        param: this.props.match.params.cityname,
        loading: true
    }

    async componentDidMount() {
       // var param = window.location.search.slice(6);
        const URL1 = "http://api.weatherstack.com/current?";
        const ACCESS_KEY = 'a296dd67113d575ef3e5ab0bd9e2fbc3';
        //this.setState({ param: this.props.match.params.cityname })
        const responce = await axios.get(URL1, { params: { query: this.state.param, access_key: ACCESS_KEY } });
        this.setState({ resp: responce.data, loading: false })
        //console.log(responce)
    }


    render() {
        //console.log(this.state)
        this.props.match.params = this.state.param
        const hourly = '/WeatherReport/hourly/'+this.props.match.params;
        const daily = '/WeatherReport/daily/'+this.props.match.params;
        return (
            <div>
                {this.state.loading || !this.state.resp ? (
                    <div style={{ height: '700px', width: '100%' }} className="ui segment">
                        <div className="ui active dimmer">
                            <div className="ui text loader">Loading</div>
                        </div>
                    </div>
                ) : (
                        <div className="mainContainer">
                            <div className="inner-nav">
                                <button onClick={() => this.props.history.push(hourly)} className="btn">Hourly</button>
                                <button onClick={() => this.props.history.push(daily)} className="btn" >Daily</button>
                            </div>

                            <div style={{ margin: '2em' }} className="ui cards" >
                                <div className="card">
                                    <span  className="content" id="c">
                                        <div className="header">
                                            {this.state.resp.location.name},
                                            {this.state.resp.location.region},
                                            {this.state.resp.location.country}
                                        </div>
                                        <div className="meta">as of {this.state.resp.current.observation_time} IST  </div>

                                        <div>
                                            <span
                                                style={{
                                                    paddingRight: "50%"
                                                }}>
                                                <h1 style={{
                                                    marginBottom:'0px'
                                                }}>{this.state.resp.current.temperature}&deg;</h1>
                                                <div className="description">
                                                    {this.state.resp.current.weather_descriptions[0]}<br/>
                                                    Feels Like {this.state.resp.current.feelslike}&deg;<br/>
                                                    Feel Under Shade{this.state.resp.current.temperature - 2}&deg;<br />
                                                    UV index {this.state.resp.current.uv_index }  
                                                </div>
                                            </span>
                                            <span className="ui tiny image" >
                                                <img
                                                    alt="description of image"
                                                    style={{ borderRadius: '8em',position:'absolute',top:'-10em',left:'3em' }}
                                                    src={this.state.resp.current.weather_icons[0]} />
                                            </span>
                                        </div>
                                    </span>
                                    <span></span>
                                </div>
                                <div className="card" style={{ background: 'linear-gradient(blue,skyblue,lightskyblue)' }}> 
                                <h3>RIGHT NOW</h3>
                                <hr/>
                                <div className="description">
                                    <h5>WIND</h5>
                                            {this.state.resp.current.wind_dir},  
                                            {this.state.resp.current.wind_speed} km/h,
                                            {this.state.resp.current.wind_degree}
                                    <hr/>
                                    <h5>HUMIDITY</h5>
                                    {this.state.resp.current.humidity}%
                                    <hr/>
                                    <h5>PRESSURE</h5>
                                    {this.state.resp.current.pressure}mb
                                    <hr/>
                                    <h5>VISIBILITY</h5>
                                    {this.state.resp.current.visibility}km
                                    <hr/>
                                </div>
                                </div>
                                <div className="card">
                                    <div>
                                    <img alt="" role="presentation" src="https://c.tile.openstreetmap.org/7/11/6.png" /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        )
    }
}

export default inputLocationWeather;