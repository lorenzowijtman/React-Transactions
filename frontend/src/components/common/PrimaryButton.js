import React from "react";
import {string, func} from "prop-types";
import styled from "styled-components";

// Example of style through component props
const Button = styled.button`
        background-color: ${props => props.theme.backgroundColor};
        width: 5.5rem;
        color: #fff;
        margin: auto;
        border: 2px solid #fff;
        padding: 5px;
        
      &:hover {
        border: 2px solid ${props => props.theme.backgroundColor};
      }
    `;

const PrimaryButton = (props) => {
    /* The background color is passed down as prop to the PrimaryButton
    * The styled component takes a prop called 'theme' which can in turn be used to style it. */
    const theme = {
        backgroundColor: props.backgroundColor
    };

    return(
        <Button theme={theme} onClick={props.action}>{props.text}</Button>
    );
};

PrimaryButton.propTypes = {
    text: string.isRequired,
    action: func.isRequired,
    backgroundColor: string
};

PrimaryButton.defaultProps = {
    backgroundColor: '#EA4E1D'
};

export default PrimaryButton;
