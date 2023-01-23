import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";


export const CheckLog = () => {
    if (localStorage.getItem("YouLog") === "true" && localStorage.getItem("YouLog") != " " ) {
        return true
    }
    else {
        return false
    }
    return true
}


const StartPage = () => {
    const navigate = useNavigate()
    console.log(CheckLog())
    useEffect(() => {
        if (CheckLog() === true) {
        navigate("/homepage")
        }
        else{
            navigate("/login")
        }
        // console.log(CheckLog())

    }, []);


    return (
        <>

        </>
    );
};

export default StartPage;
