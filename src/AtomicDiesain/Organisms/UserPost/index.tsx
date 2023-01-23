import React from 'react';
import {PostWrapper} from "../Post /styles";
import PostAuthorInfo from "../../Molecules/PostAuthorInfo";
import PostImageMolecules from "../../Molecules/PostImage";
import PostReaction from "../../Molecules/PostReaction";
import {IPost} from "../../../Intefacee/Post";
import PostDescription from "../../Molecules/PostContent";

const UserPost = (post: IPost) => {
    return (
        <PostWrapper>
            {/*<PostAuthorInfo author={post.} />*/}
            {/*<PostImageMolecules image={post.images} />*/}
            {/*<PostReaction id={post.id} />*/}
            {/*@ts-ignore*/}
            {/*<PostAuthorInfo postAuthor={post.postTitle}/>*/}
            <PostAuthorInfo postAuthor={post.postAuthor} postId={post.postId}/>
            <PostImageMolecules images={post.images}/>
            <PostReaction postId={post.postId}/>
            <PostDescription postContent={post.postContent} postTitle={post.postTitle} />
        </PostWrapper>

    );
};

export default UserPost;
