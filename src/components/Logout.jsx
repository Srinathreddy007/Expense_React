import React, { Component } from 'react';
import AppNav from './AppNav';

class Logout extends Component {
    constructor(props)
    {
        super(props)
        this.clickHandle=this.clickHandle.bind(this);
    }
    clickHandle()
    {
        this.props.history.push('/login');
        localStorage.removeItem('userId');
    }
    render() {
        return (
            <div>
                <AppNav></AppNav>
                <button title='logout' onClick={this.clickHandle}>Logout</button>
            </div>
        );
    }
}

export default Logout;