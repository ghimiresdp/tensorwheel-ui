import React, {Component} from 'react';
import {faFacebookF, faGoogle, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../Routes";
import {faHome, faSpinner} from "@fortawesome/free-solid-svg-icons";

export class Login extends Component {
  state = {
    action: 'Login'
  };

  handleChangeAction = (event) => {
    this.setState({action: this.state.action === 'Register' ? 'Login' : 'Register'})
  };

  handleLogin = (event) => {
    event.preventDefault();
    this.state.action === 'Login' ?
      this.props.login(this.refs.email.value, this.refs.password.value)
      : this.props.signup(this.refs.email.value, this.refs.password.value);
  };

  render() {
    document.title = 'Login | Prime Data Factory';
    const form = (
      <>
        <div className="form-group">
          {this.props.error && <div className="alert alert-danger">{this.props.error}</div>}
          <input type="email"
                 className="form-control form-control-user" id="email" name="email" placeholder="Email Address..."
                 autoComplete="off" required={true} ref="email"/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control form-control-user" id="password" name="password"
                 placeholder="Password" autoComplete={false} required={true} ref="password"/>
        </div>
      </>
    );
    return (
      <div className="bg-login-gradient min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-auth-page"/>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="d-flex flex-row justify-content-between">
                          <h3>{this.state.action}</h3>
                          <Link to={AppRoutes.index}><FontAwesomeIcon icon={faHome}/> Back to Home</Link>
                        </div>
                        <hr/>
                        <form className="user" onSubmit={this.handleLogin}>
                          {form}
                          <button type="submit" className="btn btn-primary btn-user btn-block">
                            {this.props.auth.loading ? (
                              <FontAwesomeIcon transform={{size: "25"}} icon={faSpinner} spin={true}/>
                            ) : this.state.action}
                          </button>
                        </form>
                        <div className="d-flex flex-row justify-content-between">
                          <button className="no-outline text-secondary">Forgot Password?</button>
                          <button className="no-outline text-secondary" onClick={this.handleChangeAction}>
                            {this.state.action === "Login" ? 'Register Instead' : 'Login Instead'}
                          </button>
                        </div>
                        <hr/>
                        or continue with
                        <div className="form-group row">
                          <div className="col-sm-4 mb-1 mb-sm-0">
                            <Link className="btn btn-google btn-user btn-block"
                                  to="#"><FontAwesomeIcon icon={faGoogle}/>
                            </Link>
                          </div>
                          <div className="col-sm-4 mb-1 mb-sm-0">
                            <Link to="#" className="btn btn-facebook btn-user btn-block">
                              <FontAwesomeIcon icon={faFacebookF}/>
                            </Link>
                          </div>
                          <div className="col-sm-4 mb-1 mb-sm-0">
                            <Link to='#' className="btn btn-linkedin btn-user btn-block">
                              <FontAwesomeIcon icon={faLinkedinIn}/>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}