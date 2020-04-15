import React from 'react';
import { Field, reduxForm } from 'redux-form';
//import {connect} from 'react-redux';
//import { fetchSearchCityAPI } from './actions/index';

import { Link } from 'react-router-dom';
class AirQualSearch extends React.Component {
    renderInput = (searchProps) => {
        const search = "/AirQuality/Search/"+searchProps.input.value;
        return (<div><input {...searchProps.input} /><button><Link to={search}>search</Link></button></div>);
    }

    onSubmit = (searchValues) => {
        //console.log(this.props)
        //this.props.fetchSearchCityAPI(searchValues.city);
        //window.location.replace("/AirQuality/Search/"+searchValues.city+"")
        //browserHistory.push("/AirQuality/Search/"+Hyderabad+"");
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name="city" component={this.renderInput} />
            </form>
        )
    }
}



export default reduxForm({form: 'airQualSearch'})(AirQualSearch);

//export default connect( mapStateToProps , {fetchSearchCityAPI})(formWrapped)