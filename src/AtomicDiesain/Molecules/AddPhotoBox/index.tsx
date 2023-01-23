import React from 'react';
import {InputAddImage} from "../../Atoms/inputs/styles";
import {AddPhotoWrapper} from "./styles";

const AddPhotoBox = () => {
    return (
        <AddPhotoWrapper>
            <InputAddImage type={"file"}/>
        </AddPhotoWrapper>
    );
};

export default AddPhotoBox;
