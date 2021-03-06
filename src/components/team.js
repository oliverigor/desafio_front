import React, { Component } from "react";
import "../index.css";
import Heart from "../images/heart.svg";

class Team extends Component {
  render() {
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
                <div className="like">
                  <img
                    className="logo-att"
                    src={Heart}
                    width={17}
                    height={17}
                  />
                  <p>1</p>
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
