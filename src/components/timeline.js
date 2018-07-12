import React, { Component } from "react";
import LogoTwt from "../images/logo-twitter.svg";
import LogoSym from "../images/logo-symbol.svg";
import LogoTyp from "../images/logo-type.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "../App.css";
import "react-vertical-timeline-component/style.min.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.renderTimelineElement = this.renderTimelineElement.bind(this);
  }

  renderTimelineElement() {
    return this.props.location.state.team.map(tweet => {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ color: "#fff" }}
          icon={
            <img
              src={tweet.avatar}
              style={{ borderRadius: "50%", width: "100%" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">{tweet.name}</h3>
          <h4 className="vertical-timeline-element-subtitle">{tweet.tweet}</h4>
          <p />
        </VerticalTimelineElement>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="Header" />
        <div>
          <div className="navbar">
            <Link to="/">
              <img className="logo-att" src={LogoSym} />
              <img src={LogoTyp} />
            </Link>
          </div>
          <div className="title">
            <h1>Last Tweets</h1>
          </div>
        </div>

        <div className="timeline">
          <VerticalTimeline>{this.renderTimelineElement()}</VerticalTimeline>
        </div>
      </div>
    );
  }
}

export default Timeline;
