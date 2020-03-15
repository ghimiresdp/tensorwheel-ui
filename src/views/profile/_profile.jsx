import React, {Component} from "react";
import Axios from "axios";
import AuthUtils from "../../utils/authUtils";
import {Footer} from "../../components/common";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserFriends} from "@fortawesome/free-solid-svg-icons";
import {apiConstants} from "../../constants";

export class Profile extends Component {
  state = {
    logged_in: false,
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    nationality: "",
    dob: "",
    profession: null,
    picture: "",
    sex: "",
    github_url: "",
    linkedin_url: "",
    stack_url: null,
    loading: true,
  };

  componentDidMount() {
    Axios.get(apiConstants.profile, {
        'headers': {
          'Authorization': 'Bearer ' + AuthUtils.getAccessToken()
        }
      }
    ).then(
      result => {
        if (result.status === 200) {
          this.setState(result.data);
          this.setState({logged_in: true});
          this.setState({loading:false})
        } else {
          this.setState({logged_in: false})
        }
      }
    ).catch(error => {
      alert(JSON.stringify(error.data))
    })
  }

  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  };

  render() {
    document.title = this.state.first_name + ' | Prime Data Factory';
    const content = this.state.logged_in === true ? (<>
        <div className="jumbotron">
          <img src={this.state.picture} width={"300px"} alt=""/>
          <p>{this.state.first_name + ' ' + this.state.last_name}</p>
        </div>
        <div className="d-flex flex-column">
          <form>
                <span className='form-group'>
                  <label>Username: (Username will be available in your public Link)</label>
                  <input className="form-control" placeholder="Username" value={this.state.username}/>
                </span>
          </form>
          <form>
                <span className='form-group'>
                  <label>First Name:</label>
                  <input className="form-control" value={this.state.first_name}/>
                </span>
            <span className='form-group'>
                  <label>Last Name:</label>
                  <input className="form-control" value={this.state.last_name}/>
                </span>
          </form>

          <span className='form-group'>
                <label>Email:</label>
                <input className="form-control" value={this.state.email}/>
              </span>
          <span className='form-group'>
                <label>Address:</label>
                <input className="form-control" value={this.state.address}/>
              </span>
          <span className='form-group'>
                <label>Nationality:</label>
                <input className="form-control" value={this.state.nationality}/>
              </span>
          <span className='form-group'>
                <label>Date of Birth:</label>
                <input className="form-control" value={this.state.dob}/>
              </span>
          <span className='form-group'>
                <label>Profession:</label>
                <input className="form-control" value={this.state.profession}/>
              </span>
          <span className='form-group'>
                <label>Picture:</label>
                <input className="form-control" value={this.state.picture}/>
              </span>
          <span className='form-group'>
                <label>Sex:</label>
                <input className="form-control" value={this.state.sex}/>
              </span>
          <span className='form-group'>
                <label>Github URL:</label>
                <input className="form-control" value={this.state.github_url}/>
              </span>
          <span className='form-group'>
                <label>LinkedIn URL:</label>
                <input className="form-control" value={this.state.linkedin_url}/>
              </span>
          <span className='form-group'>
                <label>Stack Overflow URL:</label>
                <input className="form-control" value={this.state.stack_url}/>
              </span>
        </div>
      </>
    ) : (
      <h1>User Logged Out</h1>
    );
    return (
      <div className="wrapper">
        {/*{content}*/}
        <div className="container">
          <div className="py-4 row">
            {/*<div className="ml-sm-auto mr-sm-auto text-center text-md-left mb-sm-0 col-12 col-sm-4 col-md-12">*/}
            {/*  <span className="text-uppercase page-subtitle">Overview</span>*/}
            {/*  <h3 className="page-title">User Profile</h3>*/}
            {/*</div>*/}
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-4 pt-3 card">
                <div className="border-bottom text-center">
                  <div className="mb-3 mx-auto">
                    <img className="profile-image" src={this.state.picture} alt={this.state.username}/>
                  </div>
                  {/*<h4><ActiveLabel value={this.state.first_name} onChange={()=>{}} editable/></h4>*/}
                  <h4 className="mb-0">{this.state.first_name+" "+ this.state.last_name}</h4>
                  <span className="text-muted d-block mb-2">@{this.state.username}</span>
                  <button className="mb-2 btn btn-outline-primary btn-rounded">
                    <FontAwesomeIcon icon={faUserFriends}/> Follow
                  </button>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="px-4 list-group-item">
                    <div className="progress-wrapper">
                      <strong className="text-muted d-block mb-2">Profile Completeness</strong>
                      <div className="progress-sm progress">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="74"
                             aria-valuemin="0" aria-valuemax="100" style={{width: "74%"}}>
                          <span className="progress-value">74%</span>
                        </div>
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
                        <form>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="id_first_name">First Name</label>
                              <input id="first_name" name="first_name" placeholder="First Name" className="form-control"
                                     value={this.state.first_name} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="id_last_name">Last Name</label>
                              <input
                              id="id_last_name" name="last_name" placeholder="Last Name" className="form-control"
                              value={this.state.last_name} onChange={this.handleChange}/>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="idEmail">Email</label>
                              <input
                              type="email" id="idEmail" name="email" placeholder="Email Address" autoComplete="email"
                              className="form-control" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="idUsername">Username</label>
                              <input type="text" id="idUsername" name="username" placeholder="username"
                                className="form-control" value={this.state.username} onChange={this.handleChange}/>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="idAddress">Address</label>
                            <input id="idAddress" name="address" placeholder="Address" className="form-control"
                                   value={this.state.address} onChange={this.handleChange}/>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="feCity">City</label>
                              <input id="feCity" placeholder="City" className="form-control"/></div>
                            <div className="form-group col-md-4">
                              <label htmlFor="feInputState">State</label>
                              <select id="feInputState" className="form-control custom-select">
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
    );
  }
}