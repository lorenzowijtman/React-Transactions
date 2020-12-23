import React from 'react';

import {Container ,Row, Col} from 'react-bootstrap';

import CreateTransaction from "../components/CreateTransaction";
import TransactionsList from "../components/TransactionsList";

export default function Transactions() {
    return (
        <Container>
            <h1>Transactions</h1>
            <Row>
                <Col xs={12}>
                    <TransactionsList />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <CreateTransaction />
                </Col>
            </Row>
        </Container>
    );
}
