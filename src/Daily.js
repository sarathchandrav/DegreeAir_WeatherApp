import React from 'react';
import axios from 'axios';
import {
    Menu
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './css/Daily.scss'

class Daily extends React.Component {

   //

    state = {
        cityname: this.props.match.params.cityname,
        loading: true,
        resp: null,
        day:[],
        
    }
   
    async componentDidMount() {
       
        console.log(this.state)
        const URL = "https://api.openweathermap.org/data/2.5/forecast?"
        const ACCESS_KEY = "985f3c4b08b96419034a413600c8ffda";
        const responce = await axios.get(URL, { params: { q: this.state.cityname, appid: ACCESS_KEY } });
        //console.log(responce.data.list)
        this.setState({ resp: responce.data, loading: false })

        for( var i=0;i<40;i++){
            var date =[];
            date.push(this.state.resp.list[4],this.state.resp.list[10],this.state.resp.list[16],this.state.resp.list[23],this.state.resp.list[30],this.state.resp.list[38]);
        }
        this.setState({ day:date })

    }
    
    render() {
        const Src = "http://openweathermap.org/img/wn/";
        const hourly = '/WeatherReport/hourly/'+this.state.cityname;
        const daily = '/WeatherReport/daily/'+this.state.cityname;
        return (
            <div className="loading-daily">
                {this.state.loading || !this.state.resp ? (
                    <div style={{ height: '700px', width: '100%' }} className="ui segment">
                        <div className="ui active dimmer">
                            <div className="ui text loader">Loading</div>
                        </div>
                    </div>
                ) : (
                        <div className="mainContainer">
                            <hr />
                            <Menu inverted size='large'>
                                <Menu.Item ><Link to = {hourly} >Hourly</Link></Menu.Item>
                                <Menu.Item active ><Link to = {daily}  >Daily</Link></Menu.Item>
                                <Menu.Item ><Link to = {hourly} >Today</Link></Menu.Item>
                            </Menu>
                            <div className="cityName-Div">{this.state.resp.city.name}, {this.state.resp.city.country} </div>
                            <div className="ui four cards">
                                {this.state.day.map(function (d, idx) {
                                    return (
                                        <div key={idx} id = "card"className="card"  >
                                            <div className="header">Date<br/>{d.dt_txt.slice(0,10)}</div>
                                            <h2>{Math.round(d.main.temp - 273)} Degree</h2>
                                            <img alt="description of image" src={Src + d.weather[0].icon + ".png"}/>
                                            <div className="description">
                                                Feels Like <br/>
                                                {d.main.feels_like}
                                                <hr/>
                                                Maximum/Minimun <br/>
                                                max:{d.main.temp_max}<br/>
                                                min:{d.main.temp_min}
                                                <hr/>
                                            </div>
                                            {/*!this.state.extraInfo  ? ():()*/}
                                            <div className="j">
                                                Pressure<br/>
                                                {d.main.pressure}
                                                <hr/>
                                                Humidity<br/>
                                                {d.main.humidity}
                                                <hr/>
                                                Wind<br/>
                                                Speed: {d.wind.speed}<br/>
                                                wind degree: {d.wind.deg}
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
export default Daily;