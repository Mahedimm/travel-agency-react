import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Home from "./Pages/Home/Home";
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div className="">
      <AuthProvider> 
        <Router>
        <Header/>
          <Switch>
          <Route exact path="/">
           <Home/>
          </Route> 
          <Route path="/home">
           <Home/>
          </Route> 
          <Route path="/about">
            
          </Route>
          <Route path="/users">
            
          </Route>
          
        </Switch>
        </Router>
        
      </AuthProvider>
      
    </div>
  );
}

export default App;
