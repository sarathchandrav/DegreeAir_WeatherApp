import React from 'react';
import {Link} from 'react-router-dom';


class SearchBar extends React.Component{

    state={SearchValue:''};


    onFormSubmit(event) {
        
        event.preventDefault();
       // WeatherReport(this.state.SearchValue);
    }

    render(){
        return(
            <form onSubmit={(event) => this.onFormSubmit(event)} style={{ float: 'right', position: 'relative' }}>
                    <i className="search icon"></i>
                    <input
                        value={this.state.SearchValue}
                        onChange={(e) => this.setState({ SearchValue: e.target.value })} placeholder='Enter The City' type='text' name='name' style={{ width: 'auto' }} />
                    <button onClick={(event) => this.onFormSubmit(event)} style={{ margin: '10px', width: 'auto' }}> <Link to="/WeatherReport/Search">Search</Link> </button>

                </form>
        );
        
    }
}

export default SearchBar;