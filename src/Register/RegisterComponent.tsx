import React, {useState} from 'react';
import {RegisterBox, RegisterButton, RegisterHeader, RegisterInput, RegisterWrapper} from "./RegisterStyle";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")

    const navigate = useNavigate()
    const Register = async () => {
        const response = await axios.post("http://localhost:8145/registerUser", {
            "firstName": firstName,
            "secondName": secondName,
            "login": login,
            "password": password
        })
        if (response.data === true)
        {
            navigate("/")
        }
        console.log(response.data)
    }
    const RegisterLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }
    const RegisterPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const RegisterFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value)
    }
    const RegisterSecondName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSecondName(e.target.value)
    }
    return (
        <RegisterWrapper>
            <RegisterBox>
                <RegisterHeader>Register</RegisterHeader>
                <RegisterInput onChange={RegisterLogin} placeholder={"Login"} value={login}/>
                <RegisterInput onChange={RegisterPassword} placeholder={"Password"} value={password}/>
                <RegisterInput onChange={RegisterFirstName} placeholder={"First Name"} value={firstName}/>
                <RegisterInput onChange={RegisterSecondName} placeholder={"Second Name"} value={secondName}/>
                <RegisterButton onClick={Register}>Register</RegisterButton>
            </RegisterBox>
        </RegisterWrapper>
    );
};

export default RegisterComponent;
