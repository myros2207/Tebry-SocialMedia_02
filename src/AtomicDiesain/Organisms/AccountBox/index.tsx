import React from 'react';
import {IAccountInfo} from "../../../Intefacee/Post";
import AccountAvatar from "../../Molecules/AccountAvatar";
import AccountPersonalInfo from "../../Molecules/AccountPersonalInfo";
import {AccountBoxCounter, AccountBoxWrapper} from "./styles";
import {TextCount} from "../../Atoms/text/styles";

const AccountBox = (account: IAccountInfo) => {



    return (
        <AccountBoxWrapper>
            <AccountAvatar accountProfileImage={account.accountProfileImage}/>
            <AccountPersonalInfo accountId={account.accountId} accountLogin={account.accountLogin} accountFirstName={account.accountFirstName} accountSecondName={account.accountSecondName} accountDescription={account.accountDescription} accountCountPost={account.accountCountPost}/>
        </AccountBoxWrapper>
    );
};

export default AccountBox;
