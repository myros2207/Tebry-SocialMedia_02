import React from 'react';
import {AccountCounterAllWrapper} from "./styles";
import {TextCount, TextCountHeader} from "../../Atoms/text/styles";
import {IAccountInfo, IPost} from "../../../Intefacee/Post";

const AccountCounterAll = (post: IAccountInfo) => {
    return (
        <AccountCounterAllWrapper>
            <TextCountHeader>Followers: </TextCountHeader>
            <TextCount>100</TextCount>
            <TextCountHeader>Followed: </TextCountHeader>
            <TextCount>2</TextCount>
            <TextCountHeader>Posts: </TextCountHeader>
            <TextCount>{post.accountCountPost}</TextCount>


        </AccountCounterAllWrapper>
    );
};

export default AccountCounterAll;
