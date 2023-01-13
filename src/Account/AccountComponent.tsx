import React, {useEffect, useState} from 'react';
import axios from "axios";
import {AccountWrapper} from "./AccountStyle";

const AccountComponent = () => {
    const login =  localStorage.getItem("Login")
    const token =  localStorage.getItem("Token")
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [accountDescription, setAccountDescription] = useState("")
    const [accountProfileImage, setAccountProfileImage] = useState("")

    useEffect(() => {
        GetAccountInfo()
    }, []);

    const GetAccountInfo = async () => {
        const response = await axios.get("http://localhost:8145/getAccountInfo/userLogin="+login+"&login="+login+"&token="+token)
        setFirstName(response.data.accountFirstName)
        setSecondName(response.data.accountSecondName)
        setAccountDescription(response.data.accountDescription)
        setAccountProfileImage(response.data.accountProfileImage)
    }
    return (
        <AccountWrapper>

        </AccountWrapper>
    );
};

export default AccountComponent;
