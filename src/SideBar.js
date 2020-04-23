import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const SideNav = styled.nav`
 height:100%;
 width: 30%;
 z-index: 200;
`
const Li = styled.li`
background-color:black;
color: white;
padding: 1em;
font-size: x-large;
`
const Ul = styled.ul`
background:black;
padding:0;
width:100vw;
margin:0;
`

const SideBar = props => {
    let SideBarClasses = 'side-bar'
    if(props.show){
        SideBarClasses ='side-bar-open';
        }
    return(
        
    <SideNav className = {SideBarClasses}>
        <Ul>
            <Li className="lable"><Link className="link" to="/" >Home</Link></Li>
          {props.isSignedIn === true ? (
            <Li className="lable"><Link className="link" to="/WeatherReport" >Weather Report</Link></Li>
          ):(
            <Li className="lable" >Sign In to Access WeatherReport</Li>
          )}
          {props.isSignedIn === true ? (
            <Li className="lable"><Link className="link" to="/AirQuality" > Air Quality</Link></Li>
          ):(
            <Li className="lable" >Sign In to Access AirQuality</Li>
          )}
        
        </Ul>
    </SideNav>
    )
}

export default SideBar;