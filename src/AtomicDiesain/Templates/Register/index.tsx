import React, {useState} from 'react';
import {RegisterWrapper} from "./styles";
import {InputLogin} from "../../Atoms/inputs/styles";
import RegisterBox from "../../Organisms/RegisterBox";

const  Register = () => {

    return (
        <RegisterWrapper>
           <RegisterBox/>
        </RegisterWrapper>
    );
};

export default Register;
