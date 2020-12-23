import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import CreateAccount from "../components/CreateAccount";
import DeleteAccount from "../components/DeleteAccount";
import AccountsList from "../components/AccountsList";

import styled from 'styled-components';

const Styles = styled.div`
    .account-component {
        margin-top: 20px;
    }
`;

export default function Accounts() {
    return(
        <Styles>
            <Container>
                <h1>Accounts</h1>
                <Row>
                    <Col xs={12} className={'account-component'}>
                        <AccountsList />
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className={'account-component'}>
                        <CreateAccount />
                    </Col>
                    <Col md={6} className={'account-component'}>
                        <DeleteAccount />
                    </Col>
                </Row>
            </Container>
        </Styles>
    );
}
