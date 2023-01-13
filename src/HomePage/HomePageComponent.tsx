import React from 'react';
import AccountComponent from "../Account/AccountComponent";
import PostListComponent from "../Posts/PostListComponent";

const HomePageComponent = () => {
    return (
        <>
            {/*<NiceNavbar/>*/}
            <AccountComponent/>
            <PostListComponent/>
        </>
    );
};

export default HomePageComponent;
