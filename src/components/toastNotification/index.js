import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import { connect } from "react-redux";
class ToastNotification extends Component {
  generateNotification(notification) {
    switch (notification.type.toUpperCase()) {
      case "SUCCESS":
        return toast.success(notification.message);
      case "INFO":
        return toast.info(notification.message);
      case "WARNING":
        return toast.warn(notification.message);
      case "ERROR":
        return toast.error(notification.message);
      default:
        return toast(notification.message);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    Object.keys(nextProps.notifications).map(notification_id=>{
      this.generateNotification(nextProps.notifications[notification_id])
    });
  };

  //
  // componentWillReceiveProps(newNotifications) {
  //   Object.keys(newNotifications.notifications).map(notificationId => {
  //     this.generateNotification(newNotifications.notifications[notificationId]);
  //   });
  // }

  render() {
    return (
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000} />
    );
  }
}

const mapStateToProps = ({ alertToast }) => {
  return {
    alertToast
  };
};

export default connect(mapStateToProps)(ToastNotification);
