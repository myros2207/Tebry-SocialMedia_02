import React, {useState} from 'react';
import {InputPhoto} from "./CreatePostStyle";
import axios from "axios";

const CreatPostComponent = () => {
    const [postPhoto, setPostPhoto] = useState("")
    const SelectPhoto = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPostPhoto(e.target.value)
    }

    const CreatePost = async () => {
        const response = await axios.post("http://localhost:8145/post", {
            "postTitle": "test post",
            "postContent": "test post wiuth images i think",
            "login": localStorage.getItem("Login"),
            "token": localStorage.getItem("Token"),
            "images": postPhoto
        })
        console.log(response.data)
    }
    return (
        <div>
            <InputPhoto onChange={SelectPhoto} type={"file"} accept={"image/*"}/>
            <button onClick={() => console.log(typeof postPhoto)}>save </button>
            <button onClick={CreatePost}>post </button>
        </div>
    );
};

export default CreatPostComponent;
