export async function createTransaction(sender, receiver, amount, description) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    const data = JSON.stringify({
        from_account: sender,
        to_account: receiver,
        amount: amount,
        description: description});

    const requestOptions = {
        method: 'POST',
        headers: headers,
        redirect: 'follow',
        body: data
    };

    let res = await fetch('/transaction/create', requestOptions);

    if(res.status === 201) {
        return "Successfully created transaction"
    } else {
        return `Error in request with code: ${res.status}`;
    }
}

export async function getTransactions() {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    const res = await fetch("/transactions", requestOptions);
    const body = await res.json();

    // TODO check body for accounts arr

    if(res.status !== 200) {
        // TODO handle error
        console.log("che");
        return null;
    } else {
        return body;
    }
}
