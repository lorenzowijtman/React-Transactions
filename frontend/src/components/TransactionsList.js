import React, {useEffect, useState} from "react";

import Loading from "./common/Loading";
import PrimaryButton from "./common/PrimaryButton";
import {getTransactions} from "../services/TransactionService";

export default function TransactionsList() {
    const [loading, setLoading] = useState();
    const [rows, setRows] = useState([]);

    // Hook for componentDidMount, empty array as second argument so that it only runs once
    useEffect(() => {
        // Scoped async function for retrieving data
        // TODO handle error
        async function load() {
            let data = await getData()
            setTransactionsRow(data);
            setLoading(false);
        }

        load();
    },[]);

    const setTransactionsRow = (data) => {
        const list = data.map(function(val, index) {
            let row =
                (
                  <tr key={index}>
                      <td>{val.id}</td>
                      <td>{val.from_account}</td>
                      <td>{val.to_account}</td>
                      <td>{val.amount}</td>
                      <td>{val.description}</td>
                  </tr>
                );
            return row;
        });
        setRows(list);
    }

    const getData = async () => {
        let data = await getTransactions();
        return data;
    }

    const refresh = async () => {
        setLoading(true);
        let data = await getData()
        setTransactionsRow(data);
        setLoading(false);
    }

    if(loading) {
        return(
            <Loading title={'Transactions List'} message={'Loading transactions list'} />
        );
    } else {
        return(
            <div>
                <h2>Transactions List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>From(ID)</th>
                            <th>To(ID)</th>
                            <th>Amount</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    {rows}
                </table>
                <PrimaryButton text={'Refresh'} action={refresh} />
            </div>
        );
    }

}
