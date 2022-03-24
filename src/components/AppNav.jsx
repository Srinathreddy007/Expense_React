import React, { Component } from 'react';
import {Nav,Navbar,NavItem,NavbarBrand, NavLink} from 'reactstrap';


class AppNav extends Component {
  constructor(props)
  {
    super(props);

    // state = {  }
    // this.clickHandler=this.clickHandler.bind(this);

  }
  // clickHandler=(e)=>
  // {e.preventDefault();
  //   this.props.history.push('/login');
  //   localStorage.removeItem('userId');
  // }
  
    render() {
        return (
          <div>
            <Navbar color="dark" dark  expand="md">
              <NavbarBrand href="/">Expense Tracker Application</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  {/* <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink href="/welcome">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/list-expense">View Expenses</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/add-expense">Add Expenses</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/logout">Logout</NavLink>
                  </NavItem>
                
                </Nav>
                {/* <button onClick={this.clickHandler}>Logout</button> */}
            </Navbar>
           
          </div>
        );
      }
}
 
export default AppNav;