import React from 'react';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import './App.css';
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup'
import {logOut,getUser} from './redux/actions/userActions'
import Navbar from './components/Navbar'
import jwtDecode from'jwt-decode'
//import a theme
import {Provider} from 'react-redux'
import {store} from './redux/store.js'
import { SET_AUTHENTICATED } from './redux/type'
import axios from 'axios'
const token = localStorage.FBIdToken;
 if(token){
   const decodedToken= jwtDecode(token);
   if(decodedToken.exp *1000 <  Date.now()){
     //window.location.href='/login'
    store.dispatch(logOut())
   }else{
     store.dispatch({type:SET_AUTHENTICATED})
     axios.defaults.headers.common['Authorization']=token
     store.dispatch(getUser())
   }
 }

function App() {

  return (
   <Provider store={store}>

        <Router>
          <Navbar/>
          <div className='container'>
          <Switch>
              <Route exact path="/" component={home}/>
              <Route  path="/login" component={login}/>
                <Route  path="/signup" component={signup}/>  
          </Switch>
          </div>
          
        </Router>
     </Provider>


   
  );
}

export default App;
