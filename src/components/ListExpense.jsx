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
      // let url='https://expense-dot-ecstatic-pod-341409.uc.r.appspot.com/api/v1/expenses/'+localStorage.getItem("userId");
         let url='http://localhost:9091/api/v1/expenses/'+localStorage.getItem("userId");
   // console.log(url);

        // ExpenseService.getuserExpenses(localStorage.getItem("userId")).then((res)=>{
        //   console.log(res.data)
        //     this.setState({
        //         expense:res.data});
        // });
        // user=localStorage.getItem("userid")
        fetch(url).then((res)=>res.json())
        .then((data)=>{console.log("mydata",data)
        this.setState({expense:data});
      
      });
        //  .then((result)=>{result
        //   console.log(res) 
        //  );
          // then((result)=>{
            
          //   console.log('result',result);
          //    result.
          //    console.log("resultjson",result.json());
             //.then((res)=>{
            //   this.setState({
            //           expense:res.data});
            //     //console.warn('res',res);
            //  })
            
            // });
        
    }
    addExpense()
    {
      this.props.history.push("/add-expense");

    }
    // deleteExpense(id){
    // ExpenseService.deleteExpense(id).then( res => {
    //     this.setState({expense: this.state.expense.filter(expenses => expenses.id !== id)});
    // });
    deleteExpense(id)
    {

       let url='http://localhost:9091/api/v1/expenses/'+id;
     // let url='https://expense-dot-ecstatic-pod-341409.uc.r.appspot.com/api/v1/expenses/'+id;
      console.log(url);
    
      // fetch(url, {
      //   method: 'DELETE',
      // })
      // .then(res => {
      //   console.log('response',res.json())
      //   return res.json();
      // }).then((data)=>{
      //   console.log('delete',data);
      //   this.setState({expense:this.state.expense.filter(expenses=>expenses.id!=-id)});
      // })
      //   //     this.setState({expense: this.state.expense.filter(expenses => expenses.id !== id)});
        // });
        fetch(url,
          {
            method:'DELETE',
          }
          
          )
        .then((res)=>{console.log("mydata",res)
        this.setState({expense:this.state.expense.filter(expenses => expenses.id !== id)});
      
      });



    }


    // }
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
                    <th>Currency</th>
                    <th>Date of Expense</th>
                    
                   
                    <th>Action</th>
      
                  </tr>
                </thead>
                <tbody>{
                this.state.expense.map(
                  expenses=>
                  <tr>
                   
                    
                    <td>{expenses.descript}</td>
                    <td>{expenses.category}</td>
                    <td>{(expenses.amount.toString())}</td>
                    <td>{expenses.currency}</td>
                    <td>{expenses.expensedate.toString().slice(0,10)} </td>
                    
                    
                    
                    
                    
                     <td>
                      <button title='del' onClick={()=>this.deleteExpense(expenses.id)} className='button button-info'>Delete</button>
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