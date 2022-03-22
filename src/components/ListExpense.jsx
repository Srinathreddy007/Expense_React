import React, { Component } from 'react';
import ExpenseService from '../service/ExpenseService';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
//import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AppNav from './AppNav';
import Footer from './Footer';

class ListExpense extends Component {
    constructor(props)
    {
        super(props)
        this.state=
        {
            expense : []
        }
        this.addExpense=this.addExpense.bind(this);
       this.deleteExpense=this.deleteExpense.bind(this);
    }
    
    componentDidMount()
    {
      console.log(localStorage.getItem("userid"))
        ExpenseService.getuserExpenses(localStorage.getItem("userId")).then((res)=>{
          console.log(res.data)
            this.setState({
                expense:res.data});
        });
    }
    addExpense()
    {
      this.props.history.push("/add-expense");

    }
    deleteExpense(id){
    ExpenseService.deleteExpense(id).then( res => {
        this.setState({expense: this.state.expense.filter(expenses => expenses.id !== id)});
    });


    }
    render() {
        return (
            <div>
              <AppNav></AppNav>
            <div>
            {/* <h1>Expenses List</h1>
             <div>
              <button className='btn btn-primary' onClick={this.addExpense}>Add Expense</button>
                 </div> */}
              <table  class='table table-dark table-hover'>
                <thead>
                  <tr>
                    
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount Spent</th>
                    <th>Date of Expense</th>
                    <th>Currency</th>
                    <th>Action</th>
      
                  </tr>
                </thead>
                <tbody>{
                this.state.expense.map(
                  expenses=>
                  <tr>
                   
                    
                    <td>{expenses.descript}</td>
                    <td>{expenses.category}</td>
                    <td>{expenses.amount.toString()}</td>
                    <td>{expenses.expensedate.toString()} </td>
                    <td>{expenses.currency}</td>
                    
                     <td>
                      <button onClick={()=>this.deleteExpense(expenses.id)} className='button button-info'>Delete</button>
                     </td>
                    
                  </tr>
                     )}
                </tbody>
              </table>
          
          
          </div> 
          {/* <Footer/> */}
            </div>
        );
    }
}

export default ListExpense;