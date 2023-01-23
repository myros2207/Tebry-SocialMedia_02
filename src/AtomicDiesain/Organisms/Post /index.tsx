import React from 'react';
import PostReaction from "../../Molecules/PostReaction";
import PostImageMolecules from "../../Molecules/PostImage";
import {PostWrapper} from "./styles";
import PostAuthorInfo from "../../Molecules/PostAuthorInfo";
import {IPost} from "../../../Intefacee/Post";

const Post = (post: IPost) => {
    console.log(post)
    return (
        <PostWrapper>
            <PostAuthorInfo postAuthor={post.postAuthor} />
            <PostImageMolecules images={post.images} />
            <PostReaction postId={post.postId} />
        </PostWrapper>
    );
};

export default Post;
