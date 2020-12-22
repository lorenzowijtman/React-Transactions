import React, {useState} from "react";
import {number} from "prop-types";
import {getBalance} from "../services/AccountService";

import {Spinner} from "react-bootstrap";
import styled from "styled-components";

//Example of styled button
const Button = styled.button`
    border: 2px solid #000;
`;

const BalanceButton = (props) => {
    const [showBalance, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [balance, setBalance] = useState(0);

    const retrieveBalance = async () => {
        setLoading(true);
        const accountBalance = await getBalance(props.id);
        setBalance(accountBalance);
        setLoading(false);
        setShow(true);
    }

    if(!showBalance) {
        if(loading) {
            return(
                <Spinner animation="border" />
            );
        } else {
            return(
                <Button onClick={retrieveBalance}>Show balance</Button>
            );
        }
    } else {
        return (
            <span>{balance}</span>
        );
    }

};

BalanceButton.propTypes = {
    id: number.isRequired
}

export default BalanceButton;
