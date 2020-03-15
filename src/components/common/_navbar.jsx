import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBlog, faCogs,
  faList, faNewspaper, faProjectDiagram,
  faSearch, faSignInAlt, faSignOutAlt, faUser, faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import {LogoutModal} from "../modals";
import {Link, NavLink} from "react-router-dom";
import {AppRoutes} from "../../Routes";
import AuthUtils from "../../utils/authUtils";
import Notification from "./_notification";
import {userService} from "../../services/userService";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
      LoggedIn: AuthUtils.getAccessToken() !== null,
      toggled: false,
      user: {
        username: "",
        first_name: "",
        Last_name: "",
        email: "",
        picture: "",
        email_confirmed: true,
        notifications: []
      }
    };
  }

  getUserDetails = () => {
    userService.getProfile().then(
      response => {
        this.setState({user: response.data})
      }
    ).catch(
      error => {
        alert("Ooh")
      }
    )
  };

  componentDidMount() {
    //   window.addEventListener('scroll', this.handleScroll);
    if (this.state.LoggedIn) {
      this.getUserDetails();
    }
  }

  // componentWillUnmount() {
  //   // window.addEventListener('scroll', this.handleScroll)
  // }

  // handleScroll = () => {
  //   const {scrollPos} = this.state;
  //   this.setState({
  //     scrollPos: document.body.getBoundingClientRect().top,
  //     show: document.body.getBoundingClientRect().top > scrollPos
  //   })
  // };
  // toggle = () => {
  //   this.setState({toggled: !this.state.toggled})
  // };

  render() {
    // const showNav = (this.state.show ? "" : " topbar-hidden");
    return (
      <>
        <LogoutModal/>
        <nav className="navbar navbar-expand fixed-top shadow">
          <div className="container">
            <Link to={AppRoutes.index} className="navbar-brand">
              <img height="42px" src="/static/img/logo/logo_nobg.svg" alt=""/>
            </Link>
            <div className="navbar-divider"/>
            <div className="d-none d-md-block" id='navbar1'>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to={AppRoutes.blog.index}>
                    <FontAwesomeIcon icon={faBlog}/>&nbsp;&nbsp;Blog
                  </NavLink>
                </li>
                {/*<li className="nav-item main-nav-item">*/}
                {/*  <NavLink className="nav-link" to={"#"}><FontAwesomeIcon icon={faNewspaper}/>&nbsp;&nbsp;Publication</NavLink>*/}
                {/*</li>*/}
                <li className="nav-item">
                  <NavLink className="nav-link" to={AppRoutes.project.index}>
                    <FontAwesomeIcon icon={faProjectDiagram}/>&nbsp;&nbsp;Project</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={AppRoutes.warehouse.index}>
                    <FontAwesomeIcon icon={faWarehouse}/>&nbsp;&nbsp;Warehouse</NavLink>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown no-arrow" style={{position: 'initial'}}>
                <Link className="btn btn-sm btn-secondary dropdown-toggle" to="#" id="searchDropdown" role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faSearch}/>
                </Link>
                <div className="dropdown-menu p-3 w-auto shadow m-2 bg-light animated--grow-in"
                     aria-labelledby="searchDropdown">
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group w-100">
                      <input type="text" className=" search form-control small"
                             placeholder="Search for..."
                             aria-label="Search" aria-describedby="basic-addon2"/>
                      <div className="input-group-append">
                        <button className="btn btn-secondary" type="button">
                          <FontAwesomeIcon icon={faSearch}/>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
            <div className="navbar-divider"/>
            {this.state.LoggedIn ? (
              <ul className="navbar-nav">
                <Notification data={this.state.user.notifications}/>
                {/*< Message/>*/}
                <li className="nav-item dropdown no-arrow">
                  <Link className="user-link dropdown-toggle" to="#" id="userDropdown" role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline">{this.state.user.first_name}</span>
                    {this.state.user.picture ? <img className="img-profile" src={this.state.user.picture} alt=""/>:
                      <div className="img-profile">
                        {this.state.user.first_name?this.state.user.first_name[0]:this.state.user.username[0]}
                      </div>}

                  </Link>
                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                       aria-labelledby="userDropdown">
                    <h5 className="text-primary text-center">
                      {this.state.user.first_name + " " + this.state.user.last_name}
                    </h5>
                    <Link className="nav-link dropdown-item" to={AppRoutes.profile}>
                      <FontAwesomeIcon className="text-gray-600 mr-2" icon={faUser}/>
                      Profile
                    </Link>
                    <Link className="nav-link dropdown-item" to={AppRoutes.settings}>
                      <FontAwesomeIcon className="text-gray-600 mr-2" icon={faCogs}/>
                      Settings
                    </Link>
                    <Link className="nav-link dropdown-item" to={AppRoutes.blog.my_blog}>
                      <FontAwesomeIcon className="text-gray-600 mr-2" icon={faNewspaper}/>
                      My Blog
                    </Link>
                    <Link className="nav-link dropdown-item" to="#">
                      <FontAwesomeIcon className="text-gray-600 mr-2" icon={faList}/>
                      Stats
                    </Link>
                    <div className="dropdown-divider"/>
                    <Link className="nav-link dropdown-item" to="#" data-toggle="modal"
                          data-target="#logoutModal">
                      <FontAwesomeIcon className="text-gray-600 mr-2" icon={faSignOutAlt}/>
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            ) : (
              <Link className="btn btn-danger" to={AppRoutes.login}>
                <FontAwesomeIcon icon={faSignInAlt}/>&nbsp;&nbsp;Login
              </Link>
            )}
            < ul className='navbar-nav'>
              < li className="nav-item dropdown no-arrow">
          <span className="navbar-toggler-icon d-md-none ml-5" role="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false" id="userDropdown"/>
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                     aria-labelledby="userDropdown">
                  <Link className="nav-link" to={AppRoutes.blog.index}><FontAwesomeIcon
                    icon={faBlog}/>&nbsp;&nbsp;Blog</Link>
                  <hr className="m-0"/>
                  {/*<a className="nav-link m-2" href="#">Publication</a>*/}
                  <Link className="nav-link" to={AppRoutes.project.index}><FontAwesomeIcon
                    icon={faProjectDiagram}/>&nbsp;&nbsp;Project</Link>
                  <hr className="m-0"/>

                  <Link className="nav-link" to={AppRoutes.warehouse.index}><FontAwesomeIcon
                    icon={faWarehouse}/>&nbsp;&nbsp;Warehouse</Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default NavBar;