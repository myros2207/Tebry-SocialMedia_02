import React, {useState} from 'react';
import {RegisterBoxWrapper} from "./styles";
import {InputLogin} from "../../Atoms/inputs/styles";
import {axiosGlobal} from "../../../App";
import {useNavigate} from "react-router-dom";

const RegisterBox = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const navigate = useNavigate()
    const RegisterLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }
    const RegisterPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const RegisterRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const RegisterFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value)
    }
    const RegisterSecondName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSecondName(e.target.value)
    }
    const Register = async () => {
        const response = await axiosGlobal.post("/registerUser", {
            "firstName": firstName,
            "secondName": secondName,
            "login": login,
            "password": password
        })
        if  (response.data === true) {
            navigate("/login")
        }
    }

    return (
        <RegisterBoxWrapper>
            <InputLogin onChange={RegisterLogin} value={login} placeholder={"Login"}/>
            <InputLogin onChange={RegisterPassword} value={password} placeholder={"Password"}/>
            <InputLogin onChange={RegisterRepeatPassword} value={repeatPassword} placeholder={"Repeat password"}/>
            <InputLogin onChange={RegisterFirstName} value={firstName} placeholder={"First Name"}/>
            <InputLogin onChange={RegisterSecondName} value={secondName} placeholder={"Second Name"}/>
            <button onClick={Register}>Regidter</button>
        </RegisterBoxWrapper>
    );
};

export default RegisterBox;
