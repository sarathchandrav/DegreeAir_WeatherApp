// import React from 'react';
// import {Link} from 'react-router-dom';


// class SearchBar extends React.Component{

//     state={SearchValue:''};


//     onFormSubmit(event) {
        
//         event.preventDefault();
//        // WeatherReport(this.state.SearchValue);
//     }

//     render(){
//         return(
//             <form onSubmit={(event) => this.onFormSubmit(event)} style={{ float: 'right', position: 'relative' }}>
//                     <i className="search icon"></i>
//                     <input
//                         value={this.state.SearchValue}
//                         onChange={(e) => this.setState({ SearchValue: e.target.value })} placeholder='Enter The City' type='text' name='name' style={{ width: 'auto' }} />
//                     <button onClick={(event) => this.onFormSubmit(event)} style={{ margin: '10px', width: 'auto' }}> <Link to="/WeatherReport/Search">Search</Link> </button>

//                 </form>
//         );
        
//     }
// }

// export default SearchBar;



import React from 'react';
import { Field, reduxForm } from 'redux-form';
//import {connect} from 'react-redux';
//import { fetchSearchCityAPI } from './actions/index';

import { Link } from 'react-router-dom';
class weatherRepoSearch extends React.Component {
    renderInput = (searchProps) => {
        const search =  '/WeatherReport/Search/'+searchProps.input.value;
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



export default reduxForm({form: 'weatherRepoForm'})(weatherRepoSearch);

//export default connect( mapStateToProps , {fetchSearchCityAPI})(formWrapped)