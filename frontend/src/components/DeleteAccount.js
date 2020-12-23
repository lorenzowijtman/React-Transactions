import React, {useState} from "react";
import {deleteAccount} from "../services/AccountService";
import Loading from "./common/Loading";

import styled from 'styled-components'

const Styles = styled.div``;

export default function DeleteAccount() {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show spinner
        setLoading(true);

        let msg = await deleteAccount(id);

        // Remove spinner
        setLoading(false);
        alert(msg);
    }

    if(loading) {
        return(
            <Loading title={'Delete account'} message={'Deleting account'} />
        );
    } else {
        return(
            <Styles>
                <h2>Delete account</h2>
                <p>Enter account id and press &quot;Delete&quot; to delete account</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span className={'form-span'}>ID</span>
                        <input type={'number'} value={id} onChange={e => setId(e.target.value)} required={true} />
                    </label>
                    <input className={"primary-btn"} type="submit" value="Delete" />
                </form>
            </Styles>
        );
    }

}
