import React from 'react';
import './App.css';
import "./reset.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePageComponent from "./HomePage/HomePageComponent";
import LoginComponent from "./Login/LoginComponent";
import RegisterComponent from "./Register/RegisterComponent";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageComponent />}/>
                <Route path="/login" element={<LoginComponent />}/>
                <Route path="/register" element={<RegisterComponent/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
