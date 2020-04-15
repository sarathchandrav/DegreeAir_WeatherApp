import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.scss'
import GoogleAuth from './GoogleAuth';
class Header extends React.Component {
  state = {Auth:null}
  
 
  onWeatherClick = () => {
    console.log(this.checkAuthUpdate.j)
    if(this.state.Auth === true){
      alert("please Sign In")
    }
    else{
      this.props.history.push('/WeatherReport');
    }
  }

  onAirqualityClick = () =>{
    this.props.history.push('/AirQuality')
  }

  render() {
    return (
      <div className="topNavBar" fixed='top'>
        <div>
          <a href="/" >
            DIGREE AIR
        </a>
          <label className="lable"><Link className="link" to="/" >Home</Link></label>
          <label className="lable"><Link className="link" to="/WeatherReport" >Weather Report</Link></label>
          <label className="lable"><Link className="link" to="/AirQuality" > Air Quality</Link></label>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}


export default Header;