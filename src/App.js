import LoginForm from "./components/LoginForm";
import DashBoard from "./components/DashBoard";
import { Switch, Route } from "react-router-dom";
import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/dash" component={DashBoard} />
      </Switch>
    );
  }
}

export default App;
