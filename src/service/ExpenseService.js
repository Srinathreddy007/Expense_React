import axios from 'axios';
const EXPENSEURL='http://localhost:8080/api/v1/expenses';

class ExpenseService
{
    getList()
    {
        return axios.get(EXPENSEURL);

    }
    createExpense(Expense)
    {
        return axios.post(EXPENSEURL, Expense);
    }
    // gettodobyId(id)
    // {
    //     return axios.get(EXPENSEURL+"/"+id)
    // }
    deleteExpense(id){
        return axios.delete(EXPENSEURL + '/' + id);
     }

}
export default new ExpenseService();
