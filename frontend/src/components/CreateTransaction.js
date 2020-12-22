import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";

import {createTransaction} from "../services/TransactionService";
import {checkDescription} from "../utils/CommonFunctions";

import Loading from "./common/Loading";

import styled from "styled-components";

const Styles = styled.div`
    .form-row {
        padding: 10px;
        text-align: center;
    }

    .form-label-col {
        text-align: right;
    }

    .form-field-col {
        text-align: left;
        
        input, textarea {
            max-width: 100%;
        }
    }
`;

export default function CreateTransaction() {
    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [errMessage, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Function that will be called upon submission of the form
    const handleSubmit = async(e) => {
        // Prevent default event that would be fired by submit button
        setLoading(true);
        e.preventDefault();

        const senderInt = parseIntValue(sender);
        const receiverInt = parseIntValue(receiver);
        const amountInt = parseIntValue(amount);

        if(senderInt === receiverInt) {
            console.log('same');
            setError('Sender and receiver should be different accounts');
            setLoading(false);
        } else {
            if(checkDescription(description)) {
                console.log('in here');
                let msg = await createTransaction(senderInt, receiverInt, amountInt, description);
                setLoading(false);
                setError('');
                // Alert user about process
                alert(msg);
                // Reset the form fields
                resetValues();
            } else {
                setError('Only characters ranging from a-z and numbers are allowed in the description ' +
                    'and no whitespace at beginning or end');
                setLoading(false);
            }
        }
    }

    function parseIntValue(val) {
        if(val.length == 0) {
            console.log('empty string');
        } else {
            if(Number.isInteger(val)) {
                return val
            } else {
                //try to parse to int
                let parsed = parseInt(val);
                if(isNaN(parsed)) {
                    setError(`problem parsing integer value from form field`);
                } else {
                    return parsed;
                }
            }
        }
    }

    // Resets the values in the form fields
    const resetValues = () => {
        setSender(0);
        setReceiver(1);
        setAmount(1);
    }

    if(loading) {
        return(
            <Loading title={'Create a new transaction'} message={'Creating transaction'} />
        );
    } else {
        return (
            <Styles>
                <h2>Create a new transaction</h2>
                <form onSubmit={handleSubmit}>
                    <Row className={'form-row'}>
                        <Col xs={6} className={'form-label-col'}>
                            <span className={'form-span'}>Sender ID</span>
                        </Col>
                        <Col xs={6} className={'form-field-col'}>
                            <input
                                type="number"
                                name="sender"
                                min={0}
                                value={sender}
                                onChange={e => setSender(e.target.value)}
                                required={true}
                            />
                        </Col>
                    </Row>
                    <Row className={'form-row'}>
                        <Col xs={6} className={'form-label-col'}>
                            <span className={'form-span'}>Receiver ID</span>
                        </Col>
                        <Col xs={6} className={'form-field-col'}>
                            <input
                                type="number"
                                name="receiver"
                                min={0}
                                value={receiver}
                                onChange={e => setReceiver(e.target.value)}
                                required={true}
                            />
                        </Col>
                    </Row>
                    <Row className={'form-row'}>
                        <Col xs={6} className={'form-label-col'}>
                            <span className={'form-span'}>Amount</span>
                        </Col>
                        <Col xs={6} className={'form-field-col'}>
                            <input
                                type="number"
                                name="amount"
                                min={1}
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                                required={true}
                            />
                        </Col>
                    </Row>
                    <Row className={'form-row'}>
                        <Col xs={6} className={'form-label-col'}>
                            <span className={'form-span'}>Description</span>
                        </Col>
                        <Col xs={6} className={'form-field-col'}>
                        <textarea
                            name="description"
                            value={description}
                            maxLength={140}
                            onChange={e => setDescription(e.target.value)}
                            required={true}
                        />
                            <p className={'error'}>{errMessage}</p>
                        </Col>
                    </Row>
                    <input type="submit" value="Submit" className={"primary-btn"}/>
                </form>
            </Styles>
        );
    }
}
