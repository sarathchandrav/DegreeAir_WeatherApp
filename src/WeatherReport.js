import React from 'react';
import './css/WeatherReport.scss'
import axios from 'axios';
import CurrentLocoWeather from './CurrentLocoWeather';




class WeatherReport extends React.Component {


    state = {
        lati: null,
        long: null,
        loading:true,
        resp:null,
        loco: {},
        currentObservation: {},
        image: null,
        param:'',
        //SunRise: '',
        //SunSet: '',
        SearchValue:''
    }

    async componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(position => this.setState({ lati: position.coords.latitude, long: position.coords.longitude }), err => console.log("f"))
        const responce = await axios.get('http://api.weatherstack.com/current?access_key=a296dd67113d575ef3e5ab0bd9e2fbc3&query=fetch:ip');
       // const responce1 = await axios.get('http://api.openweathermap.org/data/2.5/weather?', { params: {  q: "delhi", appid: '985f3c4b08b96419034a413600c8ffda' } });
        //console.log(responce)
        if(responce.data.location.name === "Hyderabad-Deccan")
        {
            this.setState({param:"Hyderabad"})
        }
        else{
            this.setState({param:responce.data.location.name })
        }

        this.setState(
            {
                image: responce.data.current.weather_icons[0],
                loco: responce.data.location,
                currentObservation: responce.data.current,
                //SunRise: responce1.data.sys.sunrise,
                //SunSet: responce1.data.sys.sunset,
                loading:false,
                resp:responce.data
            });
    }

    onFormSubmit(event) {
        
        event.preventDefault();
        this.props.match.params = this.state.SearchValue;
        const search = '/WeatherReport/Search/'+this.props.match.params;
        this.props.history.push(search)

    }

     render() {
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
                    <div>
                    <div className="Header-container">
                                <p>
                                    Current Location:{this.state.loco.name}, Temperature: <img alt="description of image"  src={this.state.image} />  {this.state.currentObservation.temperature}&deg;
                                </p>
                                {/* <SearchBar /> */}
                
                                <form onSubmit={(event) => this.onFormSubmit(event)} >
                                    <i className="search icon"></i>
                                    <input
                                        value={this.state.SearchValue}
                                        onChange={(e) => this.setState({ SearchValue: e.target.value })} placeholder='Enter The City' type='text' name='name' style={{ width: 'auto' }} />
                                    <button onClick={(event) => this.onFormSubmit(event)} >Search</button>
                
                                </form>
                                <div className="inner-nav">
                                    <button onClick={() => this.props.history.push(hourly)} className="btn">Hourly</button>
                                    <button onClick={() => this.props.history.push(daily )} className="btn" >Daily</button>
                                </div>
                                <div className='CurrentLocoWeather' >
                                    <CurrentLocoWeather loco={this.state.loco} currentObservation={this.state.currentObservation} imageIcon={this.state.image} sundata={this.state.sunData} />
                                </div>
                            </div>
                    </div>
                )}
            </div>)
     }
}


export default WeatherReport;