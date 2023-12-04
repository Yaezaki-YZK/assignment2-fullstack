import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import LoginPage from './components/LoginPage';
import UpdateEmployee from './components/UpdateEmployee';
import SignupScreen from './components/SignupScreen';

function App() {
  return (
    <div>
      <h1>React Route Examples</h1>
      <BrowserRouter>
      <nav>
          <ul>
            <li><NavLink to='/AddEmployee'>Add Employee</NavLink></li>
            <li><NavLink to='/EmployeeList'>Employee List</NavLink></li>
            <li><NavLink to='/LoginPage'>Login Page</NavLink></li>
            <li><NavLink to='/Update Employee'>Update Employee</NavLink></li>
            <li><NavLink to='/SignupScreen'>Sign up</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/AddEmployee' element={<AddEmployee/>}/>
          <Route path='/EmployeeList' element={<EmployeeList/>}/>
          <Route path='/LoginPage' element={<LoginPage/>}/>
          <Route path='/UpdateEmployee' element={<UpdateEmployee/>}/>
          <Route path='/SignupScreen' element={<SignupScreen/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
