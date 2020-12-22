
    export async function getAccounts() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }

        const res = await fetch("/accounts", requestOptions);
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

    export async function createAccount(name) {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        const data = JSON.stringify({name: name});

        const requestOptions = {
            method: 'POST',
            headers: headers,
            redirect: 'follow',
            body: data
        };

        let res = await fetch('/account/create', requestOptions);

        if(res.status === 201) {
            return "Successfully created account"
        } else {
            return `Error in request with code: ${res.status}`;
        }
    }


    export async function deleteAccount(id) {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'DELETE',
            headers: headers,
            redirect: 'follow'
        };

        let res = await fetch(`/account/delete/${id}`, requestOptions);

        if (res.status === 200) {
            return "Successfully deleted account"
        } else {
            return `Error in request with code: ${res.status}`;
        }
    }

    export async function getBalance(id) {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }

        const res = await fetch(`/accounts/${id}/balance`, requestOptions);
        const body = await res.json();

        // TODO check body for balance

        if(res.status !== 200) {
            // TODO handle error
            console.log("che");
            return null;
        } else {
            return parseInt(body);
        }
    }

