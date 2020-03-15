import React, {Component} from 'react';
import {userService} from "../../services/userService";

export class LogoutModal extends Component {
  logout = () =>{
    userService.logout();
    window.location.href ="";
  };
  render() {
    return (
      <div className="modal fade backdrop" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
              <button className="btn btn-danger" type="button" data-dismiss="modal">Cancel</button>
              <button onClick={this.logout} className="btn btn-primary">Logout</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}