import React, { useState, useRef, useEffect } from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import ChatApp from './Chat';
import Login from './Login';

function App() {

  let routes = <Routes>
    <Route path='/' exact element={<Login />} />
    <Route path='/chat' exact element={< ChatApp />} />
  </Routes>



  return (
    <>
      <Router>
        {routes}
      </Router>
      {/* <ChatApp/> */}
    </>
  )
}


export default App;
