import React from 'react';
//import axios from 'axios';



class SunRise extends React.Component {
   
 

 render(){
   // console.log(this.props)
    var rise_unnix = this.props.sunrise;
    var set_unix = this.props.sunset;
    var diff_unix = set_unix-rise_unnix;
    
    var riseObj = new Date(rise_unnix*1000);
    var setObj = new Date(set_unix*1000);
    var diffObj = new Date(diff_unix*1000);
    
    var Sunrise = riseObj.toLocaleTimeString()
    var Sunset = setObj.toLocaleTimeString()
    var difference = diffObj.toUTCString().slice(-11,-4)
   // console.log(diff_unix)

    return(<div className='SunRise-container' style={{padding:'20px', backgroundColor:'blue',fontSize:'1em',fontWeight:'bolder',width:'40%',position:'relative',top:'100%'}}>
        <p style={{fontSize:'larger'}}> SUNRISE/SUNSET </p>
        <div>
            <span> Sunrise IST <br/> {Sunrise} </span><span><img alt="description of image" src=''/></span>
        </div><br/><br/>
        <div>
            <span> Sunset IST  Difference<br/> {Sunset} </span><span><img alt="description of image" src=''/></span ><span style={{padding:'1em',fontSize:"1em"}}>{difference}</span>
        </div>
        
    </div>)

}
}


export default SunRise;