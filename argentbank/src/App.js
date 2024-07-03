import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Footer from './components/footer';
import Banner from './components/banner';
import SignIn from './components/sign-in';
import User from './components/user';
import React from 'react';


function App() {
  return (
    <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path='/signIn' element={<SignIn/>} />
                <Route path='/user' element={<User />} />
            </Routes>
            <Footer/>
        </Router>
  );
}

export default App;
