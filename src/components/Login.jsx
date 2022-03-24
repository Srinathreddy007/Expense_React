import React, { Component } from 'react';


class Login extends Component

 { constructor(props){
    super(props)
     
         this.state={
         email :'',
        password:'',
         message:''

     }
    //  this.EmailHandler=this.EmailHandler.bind(this);
    //  this.PasswordHandler=this.PasswordHandler.bind(this);
    //  this.login=this.login.bind(this);
    //   this.messageHandler=this.messageHandler.bind(this);

    }
    messageHandler=(event)=>{
        this.setState({message:'Email or Password is incorrect!!!..Please try again',email:'',password:''})

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
            //let url="https://user-dot-ecstatic-pod-341409.uc.r.appspot.com/api/v1/login";


     // let data = this.state;
console.log(loginDetails);
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
             console.warn('resstatus',res.status);
             if(res.status===500)
             {
                 this.props.history.push("/login");

                
                this.messageHandler();
                    
             }
             else{

             this.props.history.push("/list-expense")

             }
             
            
            //  else
            //  {
            //     this.props.history.push("/list-expense")


            //  }
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
                <form className='card-body'>  
                <div className='form-group'>
                        <label>Email   :</label>
                        <input name='email'  title='email' value={this.state.email} 
                          onChange={this.EmailHandler}></input>
                          </div>
                          <div className='form-group'>
                          <label>Password  :</label>

                            <input type='password'  title='password' name='password' value={this.state.password} 
                          onChange={this.PasswordHandler}></input>
                          </div>
                      < div >
                        
                   <button type="submit" title='login'className="btn btn-primary" onClick={this.login}>Login</button>
                    <button type="submit" title='register' className="btn btn-secondary" onClick={this.register.bind(this)}>Register</button>
                    </div>
                    <div className="message" >{this.state.message}</div>
                </form>
                </div></div>
            </div>
        );
    }
}


export default Login;