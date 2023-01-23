import React from 'react';
import {PostDescriptionWrapper} from "./styles";
import {TextPostContent, TextPostTitle} from "../../Atoms/text/styles";
import {IPost} from "../../../Intefacee/Post";

const PostContent = (post: IPost) => {
    return (
        <PostDescriptionWrapper>
            <TextPostTitle>{post.postTitle}</TextPostTitle>
            <TextPostContent>{post.postContent}</TextPostContent>
        </PostDescriptionWrapper>
    );
};

export default PostContent;
