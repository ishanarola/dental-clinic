import React, { Component } from "react";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";

export default class notification extends Component {
  componentDidMount() {
    this.createNotification(this.props.title, this.props.type, this.props.time);
  }

  createNotification = (title, type, time) => {
    if (type === "success") {
      NotificationManager.success(title, "success", time);
    } else if (type === "error") {
      NotificationManager.error(title, "error", time);
    } else {
      NotificationManager.info(title, "Info", time);
    }
  };
  render() {
    return (
      <div>
        <NotificationContainer />
      </div>
    );
  }
}
