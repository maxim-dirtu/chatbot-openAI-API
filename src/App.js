import React from 'react';
import './App.css';
import { useState } from 'react';
import SignUp from './SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './AutoContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import { ChatGPT } from './ChatGPT';

function App() {
  return( 
  
  <Container className="d-flex align-items-center justify-content-center"
  style={{ minHeight:"100vh"}}
  >
    <div className="w-100" style={{ maxWidth:"400px"}}>
      <Router>
      <AuthProvider>
        <Routes>
          <Route path="/user" element={<ChatGPT/>} />
          <Route path="/signup" element={<SignUp/>}  />
          <Route path="/login" element={<Login/>}  />
        </Routes>
      </AuthProvider>
      </Router>
  </div>
  </Container>
 
  )
}

export default App;
