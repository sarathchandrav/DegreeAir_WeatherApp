import React from 'react';
import styled from 'styled-components'
import AirQualSearch from './AirQualSearch';
import WeatherReportSearch from './WeatherReportSearch';

const Label = styled.div`
                        @media (min-width: 768px) {
                            position: relative;
                            top:-15px;
                            font-size:x-large;
                            display:inline;
                          }
                        @media (max-width: 766px) {
                            font-size: 20px;
                          }
                        `
const NavSearch = styled.div`       
                        background: #2185D0;
                        padding:0px 5px 0px 5px;
                        color: white;
                        `
const Image = styled.img`border-radius:5em;`
const SearchBarDiv = styled.div`float:right;margin-top:15px;`
const NavBar = (props) => {
    console.log(props)
    if (props) {
        
        if(props.id === "AirQuality-NavBar"){
            const imgSrc = props.pollution.clouds.split(",")[1].slice(8)
            return (
                <NavSearch>
                    <Label>{props.pollution.source.name}, {props.pollution.country}</Label>
                    <img src={imgSrc}></img>
                    <SearchBarDiv><AirQualSearch /></SearchBarDiv>
                </NavSearch>
            )
        }
        if(props.id === "WeatherReport-Search") {
            const imgSrc = props.weather.image;
            return (
                <NavSearch>
                    <Label> Current Location:{props.weather.loco.name},</Label>
                    <Label>Temperature:{props.weather.currentObservation.temperature}&deg;</Label> 
                    <Image src={imgSrc}></Image>
                    <SearchBarDiv><WeatherReportSearch /></SearchBarDiv>
                </NavSearch>
            )
        }
        
    }
};

export default NavBar;