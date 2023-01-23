import React from 'react';
import "./reset.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./StartPage";
import HomePageTest from "./AtomicDiesain/Templates/HomePage";
import Login from "./AtomicDiesain/Templates/Login";
import Register from "./AtomicDiesain/Templates/Register";
import Account from "./AtomicDiesain/Templates/Account";
import CreatePost from "./AtomicDiesain/Organisms/CreatePost";
function App() {
  return (
    <div className="App" style={{
        background: "#040433",
        minHeight: "100vh"
    }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                {/*<Route path="/homepage" element={<HomePageComponent />}/>*/}
                {/*<Route path="/login" element={<Login/>}/>*/}
                <Route path={"/login"} element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                {/*<Route path="/youAccount" element={<AccountComponent/>}/>*/}
                <Route path={"/youAccount"} element={<Account/>}/>
                <Route path="/createPost" element={<CreatePost/>}/>
                <Route path={"/homepage"} element={<HomePageTest/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
