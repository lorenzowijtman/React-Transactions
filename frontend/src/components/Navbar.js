import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

// Example of media query in styled-components
const Styles = styled.div`
    #navbar {
        background-color: #eef4f7;
    }
    
    #nav-list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: baseline;
        list-style: none;
        margin-top: 0px;
    }
    
    .nav-item {
        padding: 20px 10px
    }
    
    .nav-item > a {
        text-decoration: none;
        font-weight: bold;
        color: #313437;
    }
    
    .nav-item > a:hover {
        color: #EA4E1D;
    }
    
    @media (max-width: 576px) {
        #nav-list {
            flex-direction: column;
        }
    }
`;

const Navbar = () => {
    return(
        <Styles>
            <nav id="navbar">
                <ul id={"nav-list"}>
                    <li className={"nav-item"}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to="/accounts">Accounts</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to="/transactions">Transactions</Link>
                    </li>
                </ul>
            </nav>
        </Styles>
    )
}

export default Navbar;
