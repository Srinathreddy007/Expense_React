import React, { Component } from 'react';
import AppNav from './AppNav';
class Welcome extends Component {
   
    render() {
        return (
            <div>
                <AppNav></AppNav>
               <h1>Hello ...!!Welcome to Expense Tracker</h1> 
              {/* <footer></footer> */}
            </div>
        );
    }
}

export default Welcome;