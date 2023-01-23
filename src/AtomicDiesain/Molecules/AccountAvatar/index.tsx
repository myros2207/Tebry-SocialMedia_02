import React from 'react';
import {ImageAvatar} from "../../Atoms/image/styles";
import {AccountAvatarWrapper} from "./styles";
import {IAccountInfo} from "../../../Intefacee/Post";

const AccountAvatar = (image: IAccountInfo) => {

    return (
        <AccountAvatarWrapper>
            {/*@ts-ignore*/}
            <ImageAvatar photo={image.accountProfileImage}/>
        </AccountAvatarWrapper>
    );
};

export default AccountAvatar;
