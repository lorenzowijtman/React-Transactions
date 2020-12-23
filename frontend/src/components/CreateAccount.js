import React, {useState} from 'react';
import {createAccount} from '../services/AccountService';
import {checkName} from "../utils/CommonFunctions";
import styled from "styled-components";
import Loading from "./common/Loading";

const Styles = styled.div``;

export default function CreateAccount() {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(checkName(name)) {
            let msg = await createAccount(name);
            // Show spinner
            setLoading(false);
            // Set in case a previous attempt has been made
            setError(false);
            // Show message - either success or message with error code
            alert(msg);
            resetValue();
        } else {
            setLoading(false);
            setError(true);
        }
    }

    const resetValue = () => {
        setName('');
    }

    if(loading) {
        return(
            <Loading title={'Create a new account'} message={'Creating account'} />
        );
    } else {
        return(
            <Styles>
                <h2>Create a new account</h2>
                <p>Enter a name below and click &quot;Create&quot; to create a new account</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span className={'form-span'}>Name</span>
                        <input type={'text'} name={"name"} value={name} onChange={e => setName(e.target.value)} required={true} />
                    </label>
                    {err && (
                        <div>
                            <p className={'error'}>Please use only characters ranging from a-z and numbers</p>
                            <p className={'error'}>Maximum length for name is 20 characters</p>
                        </div>
                    )}
                    {/* TODO disable button when loading */}
                    <input className={"primary-btn"} type="submit" value="Create" />
                </form>
            </Styles>
        );
    }

}
