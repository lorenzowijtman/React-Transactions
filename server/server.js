'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const transactionsContainer = require('./transactions.json');
const accountContainer = require('./accounts.json');


// TODO account exists func
// TODO transaction exists func
// TODO getNewId func


/**
 * Calculates new unique id for the given array
 * @param arr, array where new object will reside
 * @returns new unique id
 */
function getNewId(arr) {
  let newId = arr.length;

  // Check if there are accounts already
  if(newId !== 0) {
    // New id should be id of last account in the list + 1;
    newId = arr[newId - 1].id + 1;
  }

  return newId;
}

//TODO this only retrieves one transaction it seems? balance is not updated after 2nd transaction
/**
 * Calculates and returns the balance of the account specified with the given id
 *
 * @param id (id of the account)
 * @returns balance of specific account
 */
function calcBalance(id) {
  const reducer = (accumulator, transaction) => accumulator + transaction.amount;

  const debitFiltered = transactionsContainer.transactions.filter(transaction => transaction.from_account === id);
  const debitSum = debitFiltered.reduce(reducer, 0);


  const creditFiltered = transactionsContainer.transactions.filter(transaction => transaction.to_account === id);
  const creditSum = creditFiltered.reduce(reducer, 0);


  const balance = creditSum - debitSum;

  return balance;
}

/**
 * GET /transactions
 *
 * Return the list of transactions with status code 200.
 */
app.get('/transactions', (req, res) => {
  return res.status(200).json(transactionsContainer.transactions);
});

/**
 * Get /transactions/:id
 *
 * id: Number
 *
 * Return the transaction for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/transaction/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const transaction = transactionsContainer.transactions.find((item) => item.id === id);

    if (transaction !== null) {
      return res.status(200).json({
        transaction,
      });
    } else {
      return res.status(404).json({
        message: 'Not found.',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request.',
    });
  }
});

/**
 * POST /transactions/create/
 *
 * Add a new transactions to the array transactionsContainer.transactions with the given title and description.
 * Return status code 201.
 */
app.post('/transaction/create/', (req, res) => {
  // TODO change id here as well
  // TODO check if both accounts exist

  const newId = getNewId(transactionsContainer.transactions);
  const transaction = {
    id: newId,
    from_account: req.body.from_account,
    to_account: req.body.to_account,
    amount: req.body.amount,
    description: req.body.description,
  };

  transactionsContainer.transactions.push(transaction);
  return res.status(201).json({
    message: 'Resource created',
  });
});




/**
 * GET /accounts
 *
 * Return the list of accounts with status code 200.
 */
app.get('/accounts', (req, res) => {
  return res.status(200).json(accountContainer.accounts);
});


/**
 * Get /accounts/:id
 *
 * id: Number
 *
 * Return the account for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/accounts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const account = accountContainer.accounts.find((item) => item.id === id);

    if (account !== null) {
      return res.status(200).json({
        account,
      });
    } else {
      return res.status(404).json({
        message: 'Not found.',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request.',
    });
  }
});


/**
 * Get /accounts/:id/balance
 *
 * id: Number
 *
 * Return the account balance for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/accounts/:id/balance', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const account = accountContainer.accounts.find((item) => item.id === id);

    if (account == null){
      return res.status(404).json({
        message: 'Not found.',
      });
    }

    const balance = calcBalance(id);

    return res.status(200).json(balance);
  } else {
    return res.status(400).json({
      message: 'Bad request.',
    });
  }
});


/**
 * POST /account/create/
 *
 * name: string
 *
 * Creates a new account
 * Return status code 201.
 */
app.post('/account/create/', (req, res) => {

  const newId = getNewId(accountContainer.accounts);

  const account = {
    id: newId,
    name: req.body.name,
  };

  accountContainer.accounts.push(account);

  return res.status(201).json({
    message: 'Resource created',
  });
});

/**
 * DELETE /account/delete/:id
 *
 * id: Number
 *
 * Delete the account linked to the given id.
 * If the account is found and deleted as well, return a status code 204.
 * If the account is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/account/delete/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    let account = null;
    let accountIndex = 0;

    // look for id in accounts array
    // TODO search algorithm would be better for large arrays,
    //  use id as index to first serach, if higher look below, if lower, look above etc.
    for(let i = 0; i < accountContainer.accounts.length; i++) {
      if(accountContainer.accounts[i].id === id) {
        // Get index of account to delete
        account = accountContainer.accounts[i];
        accountIndex = i;
      }
    }

    if (account !== null) {
      accountContainer.accounts.splice(accountIndex, 1);
      return res.status(200).json({
        message: 'deleted successfully',
      });
    } else {
      return res.status(404).json({
        message: 'Not found',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
    });
  }
});

app.listen(8000, () => {
  process.stdout.write('the server is available on http://localhost:8000/\n');
});
