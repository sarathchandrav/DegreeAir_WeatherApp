import React from 'react';
import axios from 'axios';
import './css/Hourly.scss'
class Hourly extends React.Component {

    state = {
        cityname: this.props.match.params.cityname,
        loading: true,
        resp: null
    }


    async componentDidMount() {
        console.log(this.state)
        const URL = "https://api.openweathermap.org/data/2.5/forecast?"
        const ACCESS_KEY = "985f3c4b08b96419034a413600c8ffda";
        //const params: { query: param, access_key: ACCESS_KEY }; 
        //q=London,us&appid=985f3c4b08b96419034a413600c8ffda";
        const responce = await axios.get(URL, { params: { q: this.state.cityname, appid: ACCESS_KEY } });
        console.log(responce.data.list)
        this.setState({ resp: responce.data, loading: false })
    }
    render() {
        const Src = "http://openweathermap.org/img/wn/";
        const hourly = '/WeatherReport/hourly/'+this.state.cityname;
        const daily = '/WeatherReport/daily/'+this.state.cityname;
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
                            <div className="cityName-Div" >{this.state.resp.city.name}, {this.state.resp.city.country} </div>
                            <div className="inner-nav">
                                <button onClick={() => this.props.history.push(hourly)} className="btn">Hourly</button>
                                <button onClick={() => this.props.history.push(daily)} className="btn" >Daily</button>
                            </div>
                            
                            <div className="ui four cards">
                                {this.state.resp.list.map(function (d, idx) {
                                    return (
                                        <div id="card-hourly" key={idx} className="card">
                                            <div className="header">Date/Time<br/>{d.dt_txt}</div>
                                            <h2>{Math.round(d.main.temp - 273)}&deg;</h2>
                                            <img alt="description of image" src={Src + d.weather[0].icon + ".png"}/>
                                            <div className="description">
                                                Feels Like <br/>
                                                {d.main.feels_like}&deg;
                                                <hr/>
                                                Maximum/Minimun <br/>
                                                max:{d.main.temp_max}&deg;<br/>
                                                min:{d.main.temp_min}&deg;
                                                <hr/>
                                                <div className="j">
                                                    Pressure<br/>
                                                    {d.main.pressure}
                                                    <hr/>
                                                    Humidity<br/>
                                                    {d.main.humidity}
                                                    <hr/>
                                                    Wind<br/>
                                                    Speed: {d.wind.speed}<br/>
                                                    wind degree: {d.wind.deg}&deg;
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    )}

            </div>
        )
    }
}
export default Hourly;