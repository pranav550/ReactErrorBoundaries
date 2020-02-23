import React, { Component, Fragment } from 'react';
import Employee from "./Employee";
import Widget from "./widget";
import Logo from "./logo.svg";
import Error from "./Error";

class App extends Component {

  render() {
    return (
      <Fragment>
        <h1>App Componet</h1>
        <Error>
          <Employee />
        </Error>
        <Error>
          <Widget Logo={Logo} />
        </Error>
      </Fragment>
    )
  }


}


export default App


