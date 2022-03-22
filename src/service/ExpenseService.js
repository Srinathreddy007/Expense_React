import axios from 'axios';
// const EXPENSEURL='https://1-dot-ecstatic-pod-341409.uc.r.appspot.com/api/v1/expenses';
const EXPENSEURL='http://localhost:9091/api/v1/expenses';
class ExpenseService
{
    getExpenses()
    {
        return axios.get(EXPENSEURL);

    }
    // createExpense(Expense)
    // {
    //     return axios.post(EXPENSEURL, Expense);
    // }
    // gettodobyId(id)
    // {
    //     return axios.get(EXPENSEURL+"/"+id)
    // }
    deleteExpense(id){
        return axios.delete(EXPENSEURL + '/' + id);
     }
     getuserExpenses(userId)
     {
         return axios.get(EXPENSEURL+'/'+userId);
 
     }
}
export default new ExpenseService();
