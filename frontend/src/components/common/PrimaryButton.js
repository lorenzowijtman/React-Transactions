import React from "react";
import {string, func} from "prop-types";
import styled from "styled-components";

const PrimaryButton = (props) => {

    // Example of style inside component scope for usage of props
    const Button = styled.button`
        background-color: ${props.backgroundColor};
        width: 5.5rem;
        color: #fff;
        margin: auto;
        border: 2px solid #fff;
        padding: 5px;
        
      &:hover {
        border: 2px solid ${props.backgroundColor};
      }
    `;

    return(
        <Button onClick={props.action}>{props.text}</Button>
    );
};

PrimaryButton.propTypes = {
    text: string.isRequired,
    action: func.isRequired,
    backgroundColor: string
}

PrimaryButton.defaultProps = {
    backgroundColor: '#EA4E1D'
}

export default PrimaryButton;
