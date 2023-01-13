import React, {useState} from 'react';
import {LoginBox, LoginButton, LoginInput, LoginWrapper} from "./LoginStyled";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginComponent = () => {
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    const LoginOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    const PasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const Login = async () => {
        const response = await axios.post("http://localhost:8145/loginUser", {
            login: login,
            password: password
        })
        console.log(response.data)
        if (response.data.isLogged === true){
            localStorage.setItem("Token", response.data.token)
            localStorage.setItem("Login", login)
            navigate("/youAccount")
        }
    }
    return (
        <LoginWrapper>
            <LoginBox>
                <LoginInput placeholder={"login"} value={login} onChange={LoginOnChange}/>
                <LoginInput placeholder={"password"} value={password} onChange={PasswordChange}/>
                <LoginButton onClick={Login}>Login</LoginButton>
            </LoginBox>
        </LoginWrapper>
    );
};

export default LoginComponent; 
