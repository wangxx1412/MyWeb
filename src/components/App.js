import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Resume from "./Resume";

class App extends Component {

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Resume />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
