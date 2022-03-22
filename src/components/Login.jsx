import React, { Component } from 'react';


class Login extends Component

 { constructor(props){
    super(props)
     
         this.state={
         email :'',
        password:''

     }
     this.EmailHandler=this.EmailHandler.bind(this);
     this.PasswordHandler=this.PasswordHandler.bind(this);
     this.login=this.login.bind(this);
    }
     EmailHandler=(event)=>
     {
         this.setState({email:event.target.value});
     }
     PasswordHandler=(event)=>
     {
         this.setState({password:event.target.value});
     }
     login =(e)=>
     {
         e.preventDefault();
         let loginDetails=
         {firstName:this.state.firstName,lastName : this.state.lastName,email: this.state.email,password:this.state.password,sex: this.state.sex,currency: this.state.currency };
        console.log('list=>'+JSON.stringify(loginDetails));
         
        let url = "http://localhost:8080/api/v1/login";
     // let data = this.state;

     fetch(url,{
         method:'POST',
         headers: {
             "Content-type": "application/json; charset=UTF-8"
         },
         body:JSON.stringify(loginDetails)
     }).then((result)=>{
         
         result.json().then((res)=>{
             
             
             console.warn('res',res)
             localStorage.setItem("userId",res);
             this.props.history.push("/list-expense");
          })
     })


     }
     register()
     {
         this.props.history.push('/register')
     }
  
    render() {
        return (
            <div>
                <div className="row"> 
                <div className="card col-md6 offset-md-3 offset-md-3">
                    <h3 className='text-center'> Expense Tracker  User Login</h3>
                <form className='row g-3'>  
                <div className='form-group'>
                        <label>Email : </label>
                        <input name='email' value={this.state.email} 
                          onChange={this.EmailHandler}></input>
                          </div>
                          <div>
                          <label>Password : </label>

                            <input type='password' name='password' value={this.state.password} 
                          onChange={this.PasswordHandler}></input>
                          </div>
                      < div >
                        
                   <button type="submit" className="btn btn-primary" onClick={this.login}>Login</button>
                    <button type="submit" className="btn btn-secondary" onClick={this.register.bind(this)}>Register</button>
                    </div>
                </form>
                </div></div>
            </div>
        );
    }
}


export default Login;