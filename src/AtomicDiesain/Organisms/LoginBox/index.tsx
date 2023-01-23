import React, {useState} from 'react';
import {LoginBoxWrapper} from "./styles";
import {InputLogin} from "../../Atoms/inputs/styles";
import axios from "axios";
import {LoginButton} from "../../Atoms/button/styles";
import {useNavigate} from "react-router-dom";
import {axiosGlobal} from "../../../App";

const LoginBox = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const LogInLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }
    const LogInPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const Login = async () => {
        const response = await axiosGlobal.post("/loginUser", {
            login: login,
            password: password
        })
        console.log(response.data)
        if (response.data.isLogged === true){
            localStorage.setItem("Token", response.data.token)
            localStorage.setItem("Login", login)
            localStorage.setItem("YouLog", "true")
            navigate("/youAccount")
        }
    }
    return (
        <LoginBoxWrapper>
            <InputLogin value={login} onChange={LogInLogin}/>
            <InputLogin value={password} onChange={LogInPassword} type={"password"}/>
            <LoginButton onClick={Login}>login</LoginButton>
        </LoginBoxWrapper>
    );
};

export default LoginBox;
