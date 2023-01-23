import React, {useEffect, useState} from 'react';
import {mockPost} from "../mock";
import {IPostList} from "./IPost";
import PostComponent from "./PostComponent";
import {PostListWrapper} from "./PostStyle";
import {CheckLog} from "../StartPage";
import {useNavigate} from "react-router-dom";

const PostListComponent = () => {
    const [allPost, setAllPost] = useState<IPostList[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        GetAllPost()
    }, []);

    const GetAllPost =  () => {
        if  (CheckLog() === true){
        const response =  mockPost
        // @ts-ignore
        setAllPost(response)
        console.log(response)
        }
        else{
            navigate("/login")
        }
    }
    return (
        <PostListWrapper>
            {
                allPost.map((post:IPostList | any ) =>
            <PostComponent IdPost={post.idPost} Image={post.image} Description={post.description} Author={post.author}/>
                )
            }
        </PostListWrapper>
    );
};

export default PostListComponent;
