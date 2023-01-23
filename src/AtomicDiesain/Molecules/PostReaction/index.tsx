import React, {useState} from 'react';
import {ReactionWrapper} from "./style";
import { ReactionButton} from "../../Atoms/button/styles";
import {IPost} from "../../../Intefacee/Post";
import axios from "axios";

const PostReaction = (post:IPost) => {
    const dontLike = require("../../../image/dontLike.png")
    const like = require("../../../image/like.png")
    const comment = require("../../../image/comment.png")
    const [isLike, setIsLike] = useState(false)
    const LikePost = async () => {
        // const response = await axios.post("http://localhost:8145/post/like",{
        //     postId: post.postId,
        //     login: localStorage.getItem("Login"),
        //     password: localStorage.getItem("Token")
        // })
        // setIsLike(response.data)
        if (isLike == false) {
            setIsLike(true)
        }
        else {
            setIsLike(false)
        }
    }
    return (
        <ReactionWrapper>
            <ReactionButton onClick={LikePost} fonImage={isLike ? like : dontLike }/>
            <ReactionButton fonImage={comment}/>
        </ReactionWrapper>
    );
};

export default PostReaction;
