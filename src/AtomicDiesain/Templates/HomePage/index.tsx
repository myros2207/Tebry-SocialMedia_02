import React from 'react';
import PostReaction from "../../Molecules/PostReaction";
import Post from "../../Organisms/Post ";
import {HomePageWrapper, HomePostBox} from "./styles";
import {IPost} from "../../../Intefacee/Post";
import Navbar from "../../Organisms/Navbar";
import {mockPost} from "../../../mock";

const HomePageTest = () => {
    const image1 = require("../../../image/IMG_9625.jpg")
    const image2 = require("../../../image/pexels-garvin-st-villier-3311574.jpg")
    // @ts-ignore
    const post: IPost[] = mockPost
    return (
        <HomePageWrapper>
            <Navbar/>
            <HomePostBox>
                {
                    post.map(post =>
                        <Post images={post.images} postAuthor={post.postAuthor} postId={post.postId}/>
                    )
                }
            </HomePostBox>
        </HomePageWrapper>
    );
};

export default HomePageTest;
