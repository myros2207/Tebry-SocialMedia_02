import React, {useEffect, useState} from 'react';
import {mockPost} from "../mock";
import {IPostList} from "./IPost";
import PostComponent from "./PostComponent";
import {PostListWrapper} from "./PostStyle";

const PostListComponent = () => {
    const [allPost, setAllPost] = useState<IPostList[]>([])

    useEffect(() => {
        GetAllPost()
    }, []);

    const GetAllPost =  () => {
        const response =  mockPost
        // @ts-ignore
        setAllPost(response)
        console.log(response)
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
