
import './App.css';

import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

import ListExpense from './components/ListExpense';
import AddExpense from './components/AddExpense';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <Register></Register> */}
      <Router>
      <Switch>
        <Route path="/" exact component={ Login}></Route>
        <Route path="/login"  component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/welcome"  component={Welcome}></Route>
        <Route path="/list-expense"  component={ListExpense}></Route>
        <Route path="/add-expense"  component={AddExpense}></Route>
        </Switch>
        </Router>
      {/* <Router>
        <Switch>
        <Route path="/" exact component={ Welcome}></Route>
        <Route path="/welcome"  component={Welcome}></Route>
        <Route path="/list-expense"  component={ListExpense}></Route>
        <Route path="/add-expense"  component={AddExpense}></Route>

        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
