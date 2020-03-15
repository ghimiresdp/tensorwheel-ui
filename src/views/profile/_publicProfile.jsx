import React, {Component} from "react";
import {Footer} from "../../components/common";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserFriends} from "@fortawesome/free-solid-svg-icons";

export class PublicProfile extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="py-4 row">
            <div className="ml-sm-auto mr-sm-auto text-center text-md-left mb-sm-0 col-12 col-sm-4 col-md-12">
              <span className="text-uppercase page-subtitle">Overview</span>
              <h3 className="page-title">User Profile</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-4 pt-3 card">
                <div className="border-bottom text-center">
                  <div className="mb-3 mx-auto">
                    <img className="profile-image" src="/static/img/logo/logo256.png" alt="Profile"/>
                  </div>
                  <h4 className="mb-0">Sierra Brooks</h4><span
                  className="text-muted d-block mb-2">Project Manager</span>
                  <button className="mb-2 btn btn-outline-primary btn-rounded">
                    <FontAwesomeIcon icon={faUserFriends}/> Follow
                  </button>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="px-4 list-group-item">
                    <div className="progress-wrapper"><strong className="text-muted d-block mb-2">Workload</strong>
                      <div className="progress-sm progress">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="74"
                             aria-valuemin="0" aria-valuemax="100" style={{width: "74%"}}><span
                          className="progress-value">74%</span></div>
                      </div>
                    </div>
                  </li>
                  <li className="p-4 list-group-item">
                    <strong className="text-muted d-block mb-2">Bio</strong>
                    <span>
                        {"Bio Goes Here"}
                      </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="mb-4 card card-small">
                <div className="border-bottom card-header"><h6 className="m-0">Account Details</h6></div>
                <ul className="list-group list-group-flush">
                  <li className="p-3 list-group-item">
                    <div className="row">
                      <div className="col">
                        <form className="">
                          <div className="form-row">
                            <div className="form-group col-md-6"><label htmlFor="feFirstName">First Name</label><input
                              id="feFirstName" placeholder="First Name" className="form-control" value="Sierra"/>
                            </div>
                            <div className="form-group col-md-6"><label htmlFor="feLastName">Last Name</label><input
                              id="feLastName" placeholder="Last Name" className="form-control" value="Brooks"/></div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6"><label htmlFor="feEmail">Email</label><input
                              type="email" id="feEmail" placeholder="Email Address" autoComplete="email"
                              className="form-control" value="sierra@example.com"/></div>
                            <div className="form-group col-md-6"><label htmlFor="fePassword">Password</label><input
                              type="password" id="fePassword" placeholder="Password" autoComplete="current-password"
                              className="form-control" value="EX@MPL#P@$$w0RD"/></div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="feAddress">Address</label>
                            <input id="feAddress"
                                   placeholder="Address"
                                   className="form-control"
                                   value="1234 Main St."/>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6"><label htmlFor="feCity">City</label><input
                              id="feCity" placeholder="City" className="form-control"/></div>
                            <div className="form-group col-md-4"><label htmlFor="feInputState">State</label><select
                              id="feInputState" className="form-control custom-select">
                              <option>Choose...</option>
                              <option>...</option>
                            </select></div>
                            <div className="form-group col-md-2"><label htmlFor="feZipCode">Zip</label><input
                              id="feZipCode" placeholder="Zip" className="form-control"/></div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-12"><label
                              htmlFor="feDescription">Description</label>
                              <textarea id="feDescription" rows="5" className="form-control"/>
                            </div>
                          </div>
                          <button className="btn btn-accent">Update Account</button>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}