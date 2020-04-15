import React from 'react';

import './css/CurrentLocoWeather.css';


class CurrentLocoWeather extends React.Component {
    state = { Area: this.props.loco.name }

    render() {

        return (
            <WeatherCard loco={this.props} />
        );
    }
}

const WeatherCard = (props) => {
    //console.log(props.loco)


    return (<div className='main-container'>
        <div className='inner-Container'>
            <span>
                <div className="spanDiv">
                    Current Weather<br /><br />
                    {props.loco.loco.localtime}
                </div>
                <span>
                    <br />
                    <img className="weatherIcon" alt="description of image" src={props.loco.imageIcon}/>
                </span>
                <span className="tempDiv">
                    {props.loco.currentObservation.temperature}&deg;
                </span>
                <div className="realfeelDiv">
                    Real feel {props.loco.currentObservation.feelslike}&deg;<br />
                    Real Feel Shaded {props.loco.currentObservation.temperature - 2}&deg;
                </div>
            </span>
            <span className="infoDiv">
                <div className='moreinfo'>
                    Temperature:    {props.loco.currentObservation.temperature}&deg;<br /><br />
                    Wind Speed:     {props.loco.currentObservation.wind_speed}<br /><br />
                    Wind Degree:    {props.loco.currentObservation.wind_degree}&deg;<br /><br />
                    Wind Direction: {props.loco.currentObservation.wind_dir}<br /><br />
                    Pressure:       {props.loco.currentObservation.pressure}<br /><br />
                    Humidity:       {props.loco.currentObservation.humidity}<br /><br />
                    UV Index:       {props.loco.currentObservation.uv_index}<br /><br />
                    Visibility:     {props.loco.currentObservation.visibility}
                </div>
            </span>
        </div>
        <div className="SeeHourly-btn">
            SEE HOURLY
        </div>
    </div>
    )
}

// const SunRise = (props) =>{

// }

//export default WeatherCard;
export default CurrentLocoWeather;