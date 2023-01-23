import React, {ChangeEvent, useState} from 'react';
import AddPhotoBox from "../../Molecules/AddPhotoBox";
import {TextAreaPost} from "../../Atoms/textArea/styles";
import {InputAddImage, InputLogin, InputTitle} from "../../Atoms/inputs/styles";
import axios from "axios";
import {AddPhotoWrapper} from "../../Molecules/AddPhotoBox/styles";
import {axiosGlobal} from "../../../App";

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
        const response =  await axiosGlobal.post("/post", {
            "postTitle": title.toString(),
            "postContent": "test post wiuth images i think",
            "login": localStorage.getItem("Login"),
            "token": localStorage.getItem("Token"),
            "images": image
        })

        console.log(response.data)
    }
    const TitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    }
    return (
        <div>
            {/*<AddPhotoBox/>*/}
            <AddPhotoWrapper>
                <InputAddImage type={"file"}  onChange={changeInput}/>
            </AddPhotoWrapper>
            <InputTitle value={title} onChange={TitleChange} />
            <TextAreaPost/>
            <button onClick={Post}>create</button>
            <img src={image[0]} alt=""/>
        </div>
    );
};

export default CreatePost;
