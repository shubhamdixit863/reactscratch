import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';// default export 
import Header  from './components/partials/Header' // invitatio
import {useHistory,useLocation} from "react-router-dom"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Edit from './components/Edit';
import Demo from './components/Demo';
import Data from './components/Data';
import Refs from './components/Refs';
import Effec from './components/Effec';
import History from './components/History';
import Usefect from './components/Usefect';


function App(props) {

  let history = useHistory();
 // let location=useLocation();


  //console.log(location);

  return (
    <Fragment>
     

        <Router>
        <Header/>

        <div className="container-fluid"  style={{marginTop:"40px"}}>

          <div className="row"> 
          <div className="col-md-10 offset-md-1">
          <Switch>
          <Route  path="/home">
          <Effec />
          </Route>

     

          <Route exact path="/edit/:id">
          <Edit />
          </Route>


          <Route exact path="/history">
          <Usefect />
          </Route>

         

          <Route exact path="/data">
          <Data/>
          </Route>


          <Route exact path="/refs">
          <Refs/>
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




