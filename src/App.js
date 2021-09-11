import './App.css';
import { Home } from './components/Home';
import { Login } from "./components/Login";

import { useEffect } from 'react';
import {BrowserRouter as Router,Route,useHistory,Redirect} from 'react-router-dom'
import { Register } from "./components/Register";
import { Reset } from "./components/Reset";
import { NewPassword } from "./components/NewPassword";


function App() {
    const history = useHistory()

  return (
  <>
  <Router>
    <div className="App">
      <Route path='/' component={Login} exact={true}/>
      <Route path='/register' component={Register}/>
      <Route path='/reset' exact={true} component={Reset}/>
      <Route path='/reset/:token' component={NewPassword}/>
      <Route path='/home' component={Home}/>
      {
        localStorage.getItem('userInfo') ? <Redirect to='/home'/> :   <Redirect to='/'/> 
      }

    </div>
  </Router>
  </>
  );
}

export default App;


