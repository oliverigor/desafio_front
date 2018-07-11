import React, { Component } from "react";
import "../index.css";
import LogoTwt from "../images/logo-twitter.svg";

class Team extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="temcard">
        <div className="card">
          <div className="profile">
            <div className="photo">
              <img src={this.props.team.avatar} />
            </div>
            <div className="content">
              <div className="text">
                <h3>{this.props.team.name}</h3>
                <h6>
                  <a href={this.props.team.twitter}>
                    {"@" + this.props.team.twitter.slice(20)}
                  </a>
                </h6>
                <h4>{this.props.team.role}</h4>
                <div className="tweetbox">
                  <h6>{"''" + this.props.team.tweet + "''"}</h6>
                </div>
                <div>
                  <img
                    className="logo-att"
                    src={LogoTwt}
                    style={{ background: "black" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
