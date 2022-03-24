import React, { Component } from 'react';
// import index.css from 

class Register extends Component {
    constructor(props)
    {
        super(props)
        this.state=
        {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            sex:'',
            message:''
        }
        // this.changeFirstnameHandler=this.changeFirstnameHandler.bind(this);
        // this.changeLastnameHandler=this.changeLastnameHandler.bind(this);
        // this.changeEmailHandler=this.changeEmailHandler.bind(this);
        // this.changePasswordHandler=this.changePasswordHandler.bind(this);
        // this.changeSexHandler=this.changeSexHandler.bind(this);
        // this.register=this.register.bind(this);
        // this.messageHandler=this.messageHandler.bind(this);

    }
    messageHandler=()=>
    {
        this.setState({message:'Email already exist..!! Please try a new Email ID....!!!!'})

    }
    register = (e)=>
    {
        e.preventDefault();
        let user= {firstName:this.state.firstName,lastName : this.state.lastName,email: this.state.email,password:this.state.password,sex: this.state.sex,currency: this.state.currency };
        console.log('list=>'+JSON.stringify(user));
        
        // ExpenseService.createExpense(expense).then
        //   (res=>
        //     {
        //       this.props.history.push('/list-expense');
        //        console.log("success")
        //     }
        //     ).catch((error) => {
        //       console.log("Error:", error);
        //     });
            // let handleSubmit = async (e) => {
            //     e.preventDefault();
            //     try {
            //       let res = await fetch("http://localhost:8080", {
            //         method: "POST",
            //         body: JSON.stringify({
            //           user
            //         }),
            //       });
            //       let resJson = await res.json();
            //       console.log("")
            //       if (res.status === 200) {
            //         this.props.history.push("/login");
            //       } 
            //     } catch (err) {
            //       console.log(err);
            //     }
            //   };
            let url = "http://localhost:8080/api/v1/register";
        // let data = this.state;
       // let url='https://user-dot-ecstatic-pod-341409.uc.r.appspot.com/api/v1/register';

        fetch(url,{
            method:'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(user)
        }).then((result)=>{
            
            result.json().then((res)=>{
                //this.props.history.push("/login");
                console.warn('res',res);
                if(res.status===500)
                 {
            this.messageHandler();
                  }
              else
              {
                 this.props.history.push("/login");
              }

             })
        });
        
    }
    
    changeFirstnameHandler=(event)=>
    {
        this.setState({firstName:event.target.value});
        

    }
    changeLastnameHandler=(event)=>
    {
        this.setState({lastName:event.target.value});

    }
    changeEmailHandler=(event)=>
    {
        this.setState({email:event.target.value});
    }
    changePasswordHandler=(event)=>
    {
        this.setState({password:event.target.value});
    }
    changeSexHandler=(event)=>
    {
        this.setState({sex:event.target.value});
    }

    cancel()
    {
        this.props.history.push("/login");
    }
    render() {
        return (
            <div>
               
            <div className='card-body'>
                <div className="row"> 
                <div className="card col-md6 offset-md-3 offset-md-3">
                    <h3 className='text-center'> Expense Tracker  User Registration</h3>
                <form class="row g-3">
                <div className='form-group'>
                        <label>First Name: </label>
                        <input  name='firstName' title='firstName' value={this.state.firstName} 
                        onChange={this.changeFirstnameHandler}></input>
                        </div>
                        <div className='form-group'>
                        <label>Last Name: </label>
                        <input name='lastName' title='lastName' value={this.state.lastName} 
                          onChange={this.changeLastnameHandler}></input>
                          </div>
                          <div className='form-group'>
                        <label>Email : </label>
                        <input name='email'title='email' value={this.state.email} 
                          onChange={this.changeEmailHandler}></input>
                          </div>
                          <div>
                          <label>Password : </label>

                        <input type="password" name='password' title='password' value={this.state.password} 
                          onChange={this.changePasswordHandler}></input>
                          </div>
                          <div>
                          <label>Sex : </label>
                        <input name='sex' title='sex' value={this.state.sex} 
                          onChange={this.changeSexHandler}></input>
                        </div>
                        
                    < div >
                        
                   <button type="submit" title='register' className="btn btn-primary" onClick={this.register}>Register</button>
                    <button type="submit" title='cancel' className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                    </div>
                    <div className="message" >{this.state.message}</div>
                </form>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Register;