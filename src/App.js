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
import AllOrder from "./Pages/Admin/AllOrder";
import ManagePackages from "./Pages/Admin/ManagePackages";
import UpdatePackage from "./Pages/Admin/UpdatePackage";
import CountryDetails from "./Pages/Countrys/CountryDetails";
import Home from "./Pages/Home/Home";
import BookingPackages from "./Pages/Packages/BookingPackages";
import PackDetails from "./Pages/Packages/PackDetails";
import PrivateRoute from "./Pages/PrivateRouter/PrivateRouter";
import Footer from "./Pages/Shared/Footer";
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';

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
            <Route path="/blog">
              <Home/>
            </Route> 
            <Route path="/shop">
              <Home/>
            </Route> 
            <Route path='/signIn'>
              <SignIn />
            </Route>
            <Route  path='/signUp'>
              <SignUp />
            </Route>
            <PrivateRoute exact path='/packages/:packId'>
              <PackDetails />
            </PrivateRoute>
            <PrivateRoute exact path='/Countrys/:id'>
              <CountryDetails />
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
            <PrivateRoute exact path='/packages/update/:id'>
              <UpdatePackage />
            </PrivateRoute>
            <PrivateRoute exact path='/booking/:id'>
              <BookingPackages />
            </PrivateRoute>
            <PrivateRoute exact path='/allOrder'>
              <AllOrder />
            </PrivateRoute>
            <Route path="*">
              <NotFound/>
            </Route>
        </Switch>
        <Footer/>
        </Router>
        
      </AuthProvider>
      
    </div>
  );
}

export default App;
