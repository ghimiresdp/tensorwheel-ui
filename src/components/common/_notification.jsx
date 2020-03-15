import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faCheck, faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

export default class Notification extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {data} = this.props;
    const notifs = data.map(notif => (
        <a key={notif.id} className={"dropdown-item d-flex align-items-center"+ (notif.read?" bg-white":" bg-light")} href="#">
          <div className="mr-3">
            <div className="icon-circle bg-primary">
              <FontAwesomeIcon className="text-white" icon={faExclamationTriangle}/>
            </div>
          </div>
          <div>
            <div className="small text-gray-500">{notif.date}</div>
            <span className="font-weight-bold">{notif.message}</span>
          </div>
        </a>
      )
    );
    return (
      <li className="nav-item dropdown no-arrow mx-1">
        <span className="user-link dropdown-toggle" id="alertsDropdown" role="button" data-toggle="dropdown"
           aria-haspopup="true" aria-expanded="false">
          <FontAwesomeIcon icon={faBell} transform={{rotate: 15, size:"25"}}/>
          {data.length!==0&&<span className="badge badge-danger badge-counter">{data.length}</span>}
            {/*<span className="badge badge-success badge-counter">*/}
            {/*  <FontAwesomeIcon icon={faCheck}/>*/}
            {/*</span>*/}
        </span>
        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
             aria-labelledby="alertsDropdown">
          <h6 className="dropdown-header text-light">
            Notifications
          </h6>
          {notifs}
          <a className="dropdown-item text-center small text-gray-500" href="#">Show All</a>
        </div>
      </li>
    );
  }
}