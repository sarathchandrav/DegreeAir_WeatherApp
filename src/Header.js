import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.scss'
//import {signInn, signOutn} from './actions/index'
import {connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
class Header extends React.Component {
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
          {this.props.isSignedIn === true ? (
            <label className="lable"><Link className="link" to="/WeatherReport" >Weather Report</Link></label>
          ):(
            <label className="lable" >Sign In to Access WeatherReport</label>
          )}
          {this.props.isSignedIn === true ? (
            <label className="lable"><Link className="link" to="/AirQuality" > Air Quality</Link></label>
          ):(
            <label className="lable" >Sign In to Access AirQuality</label>
          )}
           {/* <label className="lable"><Link className="link" to="/WeatherReport" >Weather Report</Link></label> */}
          <GoogleAuth />
        </div>
      </div>
    );
  }
}


//export default Header;

const mapStateToProps = (state) =>{
  return {isSignedIn:state.auth.isSignedIn};
};

export default connect(mapStateToProps,null)(Header);