import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Accounts} />
            <Route path="/transactions" component={Transactions} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
