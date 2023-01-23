import React from 'react';
import {TextAuthorName} from "../../Atoms/text/styles";
import {PostAuthorInfoWrapper} from "./style";
import {IPost} from "../../../Intefacee/Post";

const PostAuthorInfo = (post:IPost) => {
    return (
        <PostAuthorInfoWrapper>
            <TextAuthorName>{post.postAuthor?.userLogin}</TextAuthorName>
            <TextAuthorName>{post.postId}</TextAuthorName>
        </PostAuthorInfoWrapper>
    );
};

export default PostAuthorInfo;
