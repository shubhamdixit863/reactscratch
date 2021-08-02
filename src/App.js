import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';// default export 
import Header  from './components/partials/Header' // invitatio

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Fragment>
     

        <Router>
        <Header/>

        <div className="container-fluid"  style={{marginTop:"40px"}}>

          <div className="row"> 
          <div className="col-md-10 offset-md-1">
          <Switch>
          <Route exact path="/home">
          <Home/>
          </Route>
        </Switch>
          </div>
        

          </div>
      

        </div>

       



        </Router>
     
    </Fragment>
  )
}

export default App




