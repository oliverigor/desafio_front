import React, { Component } from "react";
import "../index.css";

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
                <h6>{this.props.team.twitter}</h6>
                <h6>{this.props.team.role}</h6>
                <h6>{this.props.team.tweet}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
