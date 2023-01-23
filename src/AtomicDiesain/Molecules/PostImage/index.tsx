import React from 'react';
import {ImagePost} from "../../Atoms/image/styles";
import {PostImageWrapper} from "./styles";
import {IPost} from "../../../Intefacee/Post";
import styled from "styled-components";

const PostImageMolecules = (post: IPost) => {
    const testIMage = require("../../../image/pexels-garvin-st-villier-3311574.jpg")
    // @ts-ignore
    const TestLikeDouble = (e) => {
        console.log(e.detail)
        switch (e.detail) {
            case 1: {
                console.log("dont")
                break
            }
            case 2: {
                console.log("like")
                break
            }
            default :{
                break
            }
        }
    }
    return (
        <PostImageWrapper onClick={TestLikeDouble}>

            <ImagePost src={post.images}/>
        </PostImageWrapper>
    );
};

export default PostImageMolecules;
