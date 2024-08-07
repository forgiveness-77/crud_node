import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UsersTable from './compontents/users';
import User from './compontents/form';

function App() {

  return (
    <div>
    <Router>
      <Routes>
      <Route path = "/user/create" element= {<User/>} />
      <Route path = "/users" element= {<UsersTable/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

