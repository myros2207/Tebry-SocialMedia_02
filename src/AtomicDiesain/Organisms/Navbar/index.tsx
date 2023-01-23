import React from 'react';
import {InputAddImage} from "../../Atoms/inputs/styles";
import {CreateButton} from "../../Atoms/button/styles";
import {Link} from "react-router-dom";
import {NavbarWrapper} from "./styles";

const Navbar = () => {
    const LogOut = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <NavbarWrapper>
            <button onClick={LogOut}>Log Out</button>
            <Link to={"/createPost"}><button>create post</button></Link>
            <Link to={"/youAccount"}><button>You acc</button></Link>
        </NavbarWrapper>
    );
};

export default Navbar;
