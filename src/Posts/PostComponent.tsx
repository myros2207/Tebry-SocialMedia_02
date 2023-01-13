import React from 'react';
import {IPostList} from "./IPost";
import {PostAuthorHeader, PostButton, PostButtonBox, PostImage, PostImageBox, PostWrapper} from "./PostStyle";

const PostComponent = (post: IPostList) => {
    return (
        <PostWrapper>
            <PostAuthorHeader>{post.Author}</PostAuthorHeader>
            <PostImageBox >
                <PostImage src={post.Image}/>
            </PostImageBox>
            <PostButtonBox>
                <PostButton>like</PostButton>
                <PostButton>comment</PostButton>
            </PostButtonBox>
        </PostWrapper>
    );
};

export default PostComponent;

