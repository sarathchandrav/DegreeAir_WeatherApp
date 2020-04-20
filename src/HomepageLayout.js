import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {signInn, signOutn} from './actions/index'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from 'semantic-ui-react'
import  airqualityimg from '../images/airquality.jpg';
import  weatherrepoimg from '../images/weather.jpg';

 
const HomepageHeading = () => (
  <div className='MiddleHeading' >
    <Header
      as='h1'
      content='DEGREE AIR'
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
        paddingLeft:'40%'
      }}
    />
    <Header
      as='h2'
      content='Wheather Reports and Air Quality'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
        paddingLeft:'40%'
      }}
    />
    <Button primary size='huge' style={{marginLeft:'40%'}}>
      <Link to='/Mainpage' style={{color:'white'}}>Get Started</Link>
      <Icon name='right arrow' />
    </Button>
  </div>
)

const WeatherRepo = (props) =>{
  //console.log(props)
  if(props.isSignedIn)
  return(
    <Button size='huge'><Link to="/WeatherReport">Check Them Out</Link></Button>
  );
  else{
    return<Button> Please Sign In </Button>
  }
}

const airQuality = (props) =>{
  //console.log(props)
  if(props.isSignedIn)
  return(
    <Button size='huge'><Link to="/AirQuality">Check Them Out</Link></Button>
  );
  else{
    return<Button> Please Sign In </Button>
  }
}

const MainHomepageLayout = (props) => (
  <div >
    <div className='MainContainer' style={{ minHeight: 700, padding: '1em 0em', backgroundColor:'black' }} >
    <HomepageHeading />
    </div>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Weather Experts
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We say the Weather Forcast of any reagion on this earth, We give the expert reports on weather.
            </p>
            
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <img alt="description of image" src={weatherrepoimg} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            {/* <Button size='huge'><Link to="/WeatherReport">Check Them Out</Link></Button> */}
            {WeatherRepo(props)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Quality AIR
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We say and vishualize the chemical content and percentage of the air, Quality analysis of air.pollution content in air.
            </p>
            
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <img alt="description of image" src={airqualityimg} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
          {airQuality(props)}
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
 
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Team</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                
                <List.Item as='a'> FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
               
              </List>
            </Grid.Column>
            
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
)
//export default HomepageLayout

class HomepageLayout extends React.Component{
  render(){
    //console.log(this.props)
    return(
      <div>
        {MainHomepageLayout(this.props)}
      </div>
    )
  }
}


const mapStateToProps = (state) =>{
  return {isSignedIn:state.auth.isSignedIn};
};

export default connect(mapStateToProps,{signInn,signOutn})(HomepageLayout);