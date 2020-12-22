import React from "react";
import {Spinner} from "react-bootstrap";
import {string} from "prop-types";

const Loading = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <Spinner animation="border" />
            <p>{props.message}</p>
        </div>
    );
}

Loading.propTypes = {
    title: string,
    message: string
}

Loading.defaultProps = {
    title: '',
    message: ''
}

export default Loading;
