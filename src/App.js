import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from './Context/AuthProvider';
import SignIn from "./Pages/Account/SignIn";
import SignUp from "./Pages/Account/SignUp";
import AddPackage from "./Pages/Admin/AddPackage";
import Admin from "./Pages/Admin/Admin";
import ManagePackages from "./Pages/Admin/ManagePackages";
import Home from "./Pages/Home/Home";
import PackDetails from "./Pages/Packages/PackDetails";
import PrivateRoute from "./Pages/PrivateRouter/PrivateRouter";
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
          <Route  path='/signIn'>
              <SignIn />
            </Route>
            <Route  path='/signUp'>
              <SignUp />
            </Route>
          <PrivateRoute exact path='/packages/:packId'>
              <PackDetails />
            </PrivateRoute>
          <PrivateRoute exact path='/Countrys/:id'>
              <PackDetails />
            </PrivateRoute>
          <PrivateRoute exact path='/admin'>
              <Admin />
            </PrivateRoute>
          <PrivateRoute exact path='/addPackages'>
              <AddPackage />
            </PrivateRoute>
          <PrivateRoute exact path='/allPackages'>
              <ManagePackages />
            </PrivateRoute>
        </Switch>
        </Router>
        
      </AuthProvider>
      
    </div>
  );
}

export default App;
