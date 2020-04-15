import React from 'react';
import './css/Header.scss';

import {connect} from 'react-redux';
import {signInn, signOutn} from './actions/index'

class GoogleAuth extends React.Component{
    
    componentDidMount(){
        console.log(this.props)
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'701432882301-m9aog004mcrdvk0uios44p9p1la4d871.apps.googleusercontent.com',
                scope:'email'
            }).then(() => { 
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn){
            this.props.signInn();
        }else{
            this.props.signOutn();
        }
    };  

    onsignIn = () => {
        this.auth.signIn();
    }

    onsignOut = () => {
        this.auth.signOut()
    }
    
    renderAuthButton(){
        
        //this.props.AuthCheck(this.props.isSignedIn);
        if(this.props.isSignedIn === null){
            return <div> Please Sign In</div>
        } else if (this.props.isSignedIn){
            return(
                
                <button onClick={this.onsignOut} className="signIn-btn" as='a' ><i className="google icon" />Sign out</button>
                //<div> Hi </div>
            )
        }
        else {
            
            return(
                 <button onClick={this.onsignIn} className="signIn-btn" as='a' ><i className="google icon" />Sign in</button>
                //<div>Bye</div>
            )
        }
    }
    render() {
        return(
            <div className="auth-btn">{this.renderAuthButton()} </div>
        )
    }
};
const mapStateToProps = (state) =>{
    return {isSignedIn:state.auth.isSignedIn};
};

export default connect(mapStateToProps,{signInn,signOutn})(GoogleAuth);