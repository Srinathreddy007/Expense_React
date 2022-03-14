import React, { Component } from 'react';
//import ListExpense from './ListExpense';
import ListExpense from './ListExpense';
import ExpenseService from '../service/ExpenseService';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AppNav from './AppNav';
import Footer from './Footer';
class AddExpense extends Component {
    constructor(props)
    {
        super(props)
        this.state=
        {
            id:'',
            descript:'',
            category:'',
            amount:'',
            expensedate:new Date(),
            currency:''

        }
        this.saveExpense=this.saveExpense.bind(this);
        this.changeDescritpionHandler=this.changeDescritpionHandler.bind(this);
        this.changeCategoryHandler=this.changeCategoryHandler.bind(this);
        this.changeDateExpenseHandler=this.changeDateExpenseHandler.bind(this);
        this.changeCurrencyHandler=this.changeCurrencyHandler.bind(this);
        this.changeAmountHandler=this.changeAmountHandler.bind(this);
    }
    saveExpense = (e)=>
    {
        e.preventDefault();
        let expense= {id:this.state.id,descript : this.state.descript,category: this.state.category,amount:this.state.amount,expensedate: this.state.expensedate,currency: this.state.currency };
        console.log('list=>'+JSON.stringify(expense));
        
        ExpenseService.createExpense(expense).then
          (res=>
            {
              this.props.history.push('/list-expense');
               console.log("success")
            }
            ).catch((error) => {
              console.log("Error:", error);
            });
            
    }
  
  cancel()
  {
  this.props.history.push('/list-expense');
  }
  
  changeDescritpionHandler= (event)=>
  {
  this.setState({descript : event.target.value});
  }
  
  changeCategoryHandler= (event)=>
  {
  this.setState({category : event.target.value});
  }
  changeAmountHandler= (event)=>
  {
  this.setState({amount : event.target.value});
  }
  changeDateExpenseHandler= (event)=>
  {
  this.setState({dateexpense : event.target.value});
  }
  changeCurrencyHandler= (event)=>
  {
  this.setState({currency : event.target.value});
  }
  

    render() {
        return (
            <div className='container'>
              <AppNav></AppNav>
             <div className="row"> 
                <div className="card col-md6 offset-md-3 offset-md-3">
                    <h3 className='text-center'>Add Expenses</h3>
                   
                    <div className='card-body'>
                        <form >
                        
                          
                        <div className='form-group'>
                        <label>Description: </label>
                        <input  name='descript' value={this.state.descript} 
                        onChange={this.changeDescritpionHandler}></input>
                        </div>
                        <div className='form-group'>
                        <label>Category : </label>
                        <input name='category' value={this.state.category} 
                          onChange={this.changeCategoryHandler}></input>
                          </div>
                          <div className='form-group'>
                        <label>Amount Spent : </label>
                        <input name='amount' value={this.state.amount} 
                          onChange={this.changeAmountHandler}></input>
                          </div>
                          <div>
                          <label>Date of Expense : </label>

                        <input name='expensedate' value={this.state.dateexpense} 
                          onChange={this.changeDateExpenseHandler}></input>
                          </div>
                          <div>
                          <label>Currency : </label>
                        <input name='currency' value={this.state.currency} 
                          onChange={this.changeCurrencyHandler}></input>
                        </div>
                        
                        <button className='btn btn-success' onClick={this.saveExpense}>Save</button>
                        <button className='btn btn-danger' onClick={this.cancel.bind(this)}>Cancel</button>

                        </form>
                        </div>
                    </div>
              </div>
           
            </div>
          
        );
    }
}

export default AddExpense;