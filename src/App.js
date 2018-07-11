import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Team from "./components/team.js";
import LogoSym from "./images/logo-symbol.svg";
import LogoTyp from "./images/logo-type.svg";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/kandebonfim/2efe731004c9311d1237e88a656a425f/raw/c3befc78feb7454f4cccb5308d38319ac77be71e/makers.json"
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="Header" />
        <div>
          <div className="navbar">
            <img className="logo-att" src={LogoSym} />
            <img src={LogoTyp} />
          </div>
          <div className="title">
            <h1>Meet our team</h1>
          </div>
          <div className="subtitle">
            <h3>
              We are a group of multi-skilled individuals who are
              entrepreneurial by nature and live to make digital products and
              services that people love to use.
            </h3>
          </div>
          <div className="section">
            {this.state.data ? (
              this.state.data.map(team => {
                return <Team team={team} />;
              })
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
