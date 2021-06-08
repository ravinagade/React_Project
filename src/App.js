import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Register from './component/Register'
import Login from './component/Login'
import UserInfo from './component/UserInfo'
import AddTask from './component/AddTask'



function App() {
  return (
    <div>

      <BrowserRouter>

      <Switch>

       <Route exact path='/'>
         < Login/>
       </Route>

       <Route path='/register'>
         <Register/>
        </Route>

        <Route path='/user'>
          <UserInfo/>
        </Route>

        <Route path='/addtask'>
          <AddTask/>
        </Route>

      </Switch>
      
      </BrowserRouter>
    </div>
   
  );
}

export default App;
