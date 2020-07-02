import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Referral from "./components/landing";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className="container">
          <Referral />
        </main>
      </div>
    );
  }
}

export default App;
