import React, {useEffect, useState} from "react";

import {getAccounts} from "../services/AccountService";

import BalanceButton from "./BalanceButton";
import PrimaryButton from "./common/PrimaryButton";

import Loading from "./common/Loading";

export default function AccountsList() {
    const [loading, setLoading] = useState(true);
    const [accounts, setAccounts] = useState([]);

    // Hook for componentDidMount, empty array as second argument so that it only runs once
    useEffect(() => {
        // Scoped async function for retrieving data
        // TODO handle error
        async function load() {
            let data = await getData()
            setAccountsList(data);
            setLoading(false);
        }

        load();
    },[]);

    const getData = async () => {
        let data = await getAccounts();
        return data;
    }

    const setAccountsList = (data) => {
        const list = data.map(function(val, index) {
            let listItem =
                (<tr key={index}>
                    <td>
                        {val.name}
                    </td>
                    <td>
                        {val.id}
                    </td>
                    <td>
                        <BalanceButton id={val.id} />
                    </td>
                </tr>);
            return listItem;
        });

        setAccounts(list);
    }

    const refresh = async () => {
        setLoading(true);
        let data = await getData()
        setAccountsList(data);
        setLoading(false);
    }

    if(loading) {
        return(
            <Loading title={'Accounts List'} message={'loading accounts list'} />
        );
    } else {
        return(
            <div>
                <h2>Accounts List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    {accounts}
                </table>
                <PrimaryButton text={'Refresh'} action={refresh} backgroundColor={'blue'}  />
            </div>
        );
    }
}
