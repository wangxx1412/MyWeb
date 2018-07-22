import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Resume from "./Resume";
import Blog from "./app/Blog";

class App extends Component {

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Blog}/>
            <Route exact path="/resume" component={Resume}/>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
