import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default class Message extends Component {
  state = {
    messages: [
      {
        id: 1,
        new:true,
        date: "20-Dec-2014-00:40:16",
        user: {
          name: "Chicken the Dog",
          profile: "/static/img/logo/logo.svg"
        },
        message: "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good..."
      },
      {
        id: 2,
        new:true,
        date: "20-Dec-2014-00:40:16",
        user: {
          name: "Emily Fowler",
          profile: "/static/img/logo/logo.svg"
        },
        message: "Hi there! I am wondering if you can help me with a problem I've been having."
      },
      {
        id: 3,
        new:false,
        date: "20-Dec-2014-00:40:16",
        user: {
          name: "Jae Chun",
          profile: "/static/img/logo/logo.svg"
        },
        message: "I have the photos that you ordered last month, how would you like them sent to you?"
      },
      {
        id: 4,
        new:false,
        date: "20-Dec-2014-00:40:16",
        user: {
          name: "Morgan Alvarez",
          profile: "/static/img/logo/logo.svg"
        },
        message: "Last month's report looks great, I am very happy with the progress so far, keep up the good work!"
      },
    ]
  };

  render() {
    const msg_count = this.state.messages.filter(msg=>msg.new).length;
    const msgs = this.state.messages.map(msg => (
        <Link key={msg.id.toString()} className={"dropdown-item d-flex align-items-center" +(msg.new && " bg-light")} to="#">
          <div className="dropdown-list-image mr-3">
            <img className="rounded-circle" src={msg.user.profile} alt=""/>
            <div className={"status-indicator" + (msg.new&&" bg-success")}/>
          </div>
          <div className="font-weight-bold">
            <div className="text-truncate">{msg.message}</div>
            <div className="small text-gray-500">{msg.user.name} · {msg.date}</div>
          </div>
        </Link>
      )
    );
    return (
      <li className="nav-item dropdown no-arrow mx-1">
        <Link className="nav-link dropdown-toggle" to="#" id="messagesDropdown" role="button" data-toggle="dropdown"
           aria-haspopup="true" aria-expanded="false">
          <FontAwesomeIcon icon={faEnvelope}/>
          <span className="badge badge-danger badge-counter">{msg_count}</span>
        </Link>
        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
             aria-labelledby="messagesDropdown">
          <h6 className="dropdown-header">
            Messages
          </h6>
          {msgs}
          <Link className="dropdown-item text-center small text-gray-500" to="#">Read More Messages</Link>
        </div>
      </li>
    );
  }
}