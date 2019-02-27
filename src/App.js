import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, ForgotPassword, Signup } from 'myahska-library';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={(props) => <Login {...props} baseURL='http://localhost:3000' />} />
          <Route path="/sign-up" exact render={(props) => <Signup {...props} baseURL='http://localhost:3000' />} />
          <Route path="/forgot-password" exact render={(props) => <ForgotPassword {...props} baseURL='http://localhost:3000' />} />
          <Route path="/dashboard" exact render={() => (<h1>Home page</h1>)} />
          <Route render={() => (<h1>404 page not found!</h1>)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
