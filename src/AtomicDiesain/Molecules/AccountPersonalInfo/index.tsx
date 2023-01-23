import React from 'react';
import {IAccountInfo} from "../../../Intefacee/Post";
import {TextAccountAuthorName, TextAccountBiography, TextAccountLogin, TextCount} from "../../Atoms/text/styles";
import {AccountPersonalInfoHeader, AccountPersonalInfoWrapper} from "./styles";
import {AccountBoxCounter} from "../../Organisms/AccountBox/styles";
import AccountCounterAll from "../AccountCounterAll";

const AccountPersonalInfo = (account: IAccountInfo) => {
    return (
        <AccountPersonalInfoWrapper>
            <AccountPersonalInfoHeader>
                <TextAccountLogin>{account.accountLogin}</TextAccountLogin>
                <button>Setting</button>
            </AccountPersonalInfoHeader>
            <AccountCounterAll accountCountPost={account.accountCountPost}/>
            <TextAccountAuthorName>{account.accountFirstName + " " + account.accountSecondName}</TextAccountAuthorName>
            <TextAccountBiography>{account.accountDescription}</TextAccountBiography>

        </AccountPersonalInfoWrapper>
    );
};

export default AccountPersonalInfo;
