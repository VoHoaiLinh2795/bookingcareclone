import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Manage from './manage/system/manage';

//component
import Home from './component/Home/Home';
import Header from './component/header/header';



import Login from './login/login';
/*<Routes>
        <Route path="/" element={props.isLoggedIn ? <Navigate to="/home" /> : <Manage />} />
        <Route path="/home" element={props.isLoggedIn ? <Home /> : <Navigate to="/" />} />
      </Routes>*/

function App(props) {


  return (
    <>

      {!props.isLoggedIn && <Header />}
      <Manage />



      {console.log(props.isLoggedIn)}



    </>

  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.reducerLogin.isLogin,
  }
}
export default connect(mapStateToProps)(App);