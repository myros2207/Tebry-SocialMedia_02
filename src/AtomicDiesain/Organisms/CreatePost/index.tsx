import React, {ChangeEvent, useState} from 'react';
import AddPhotoBox from "../../Molecules/AddPhotoBox";
import {TextAreaPost} from "../../Atoms/textArea/styles";
import {InputAddImage, InputLogin} from "../../Atoms/inputs/styles";
import axios from "axios";
import {AddPhotoWrapper} from "../../Molecules/AddPhotoBox/styles";

const CreatePost = () => {
    const [image, setImage] = useState([""])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const changeInput = async (e: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        const file = e.target.files[0];
        const arr:string[] = []

        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = async () => {
            //@ts-ignore
            arr.push(reader.result)
        }
        setImage(arr)
        console.log(image)
    }
    console.log(image)

    const Post = async () => {
        const response =  await axios.post("http://localhost:8145/post", {
            "postTitle": "test post",
            "postContent": "test post wiuth images i think",
            "login": localStorage.getItem("Login"),
            "token": localStorage.getItem("Token"),
            "images": image
        })

        console.log(response.data)
    }
    return (
        <div>
            {/*<AddPhotoBox/>*/}
            <AddPhotoWrapper>
                <InputAddImage type={"file"}  onChange={changeInput}/>
            </AddPhotoWrapper>
            <TextAreaPost/>
            <InputLogin/>
            <button onClick={Post}>create</button>
        </div>
    );
};

export default CreatePost;
