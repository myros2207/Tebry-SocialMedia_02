import React, {useEffect, useState} from 'react';
import {AccountBoxPost, AccountWrapper} from "./style";
import axios from "axios";
import {IAccountInfo, IPost} from "../../../Intefacee/Post";
import UserPost from "../../Organisms/UserPost";
import YouAccount from "../../Organisms/AccountBox";
import AccountInfoBox from "../../Organisms/AccountBox";
import AccountBox from "../../Organisms/AccountBox";
import Navbar from "../../Organisms/Navbar";
import NavigateMenuPhone from "../../Organisms/NavigateMenuPhone";
import {axiosGlobal} from "../../../App";

const Account = () => {
    const accoun:IAccountInfo[] = []
    const [accountInfo, setAccountInfo] = useState("")
    const [accountProfileImage, setAccountProfileImage] = useState("")
    const [allYouPost, setALlYouPost] = useState<IPost[]>([])
    useEffect(() => {
        GetAllInfoAccount()
        GetAllYouPost()
    }, []);

    const GetAllInfoAccount = async () => {
        const response = await axiosGlobal.get("/getAccountInfo/userLogin=" + localStorage.getItem("Login") + "&login=" + localStorage.getItem("Login") + "&token=" + localStorage.getItem("Token"))
        console.log(response.data)
        setAccountInfo(response.data)
        setAccountProfileImage(require("../../../Photo/IMG_9874.png"))
    }
    const GetAllYouPost = async () => {
        const response = await axiosGlobal.get("/post/userLogin=" + localStorage.getItem("Login") + "&login=" + localStorage.getItem("Login") + "&token=" + localStorage.getItem("Token"))
        setALlYouPost(response.data)
        console.log(response.data)
        // console.log(response.data.map(test => test.images))
    }
    console.log(allYouPost)
    // @ts-ignore
    return (
        <>
            <Navbar/>
        <AccountWrapper>

            {/*@ts-ignore*/}
            <AccountBox accountId={accountInfo.accountId} accountLogin={accountInfo.accountLogin} accountFirstName={accountInfo.accountFirstName} accountSecondName={accountInfo.accountSecondName} accountProfileImage={accountProfileImage} accountDescription={"Desc Test"} accountCountPost={allYouPost.length}/>
            {/*@ts-ignore*/}
            <AccountBoxPost>
            {
                allYouPost.map(post =>
            //         @ts-ignore
            <UserPost postId={post.postId} postTitle={post.postTitle} postContent={post.postContent} postAuthor={post.postAuthor} images={post.images[0]} />
                )
            }
            </AccountBoxPost>
        </AccountWrapper>
            <NavigateMenuPhone/>
            </>
    );
};

export default Account;
