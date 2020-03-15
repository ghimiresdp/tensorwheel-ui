import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faChartArea, faFolder} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: (window.innerWidth < 768)
    };
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        this.setState({isToggled: true})
      }
    })
  }

  toggle = () => {
    this.setState({isToggled: !this.state.isToggled})
  };

  render() {
    const toggleClass = this.state.isToggled ? (" toggled") : null;
    return (
      <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" + toggleClass}
          id="accordionSidebar"
          style={{position: "relative"}}
      >
        {/*<span style={{position: 'fixed'}}>*/}
        {/* <!-- Sidebar - Brand -->*/}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center mt-1 mb-3" to="#">
          <div className="sidebar-brand-icon">
            {this.state.isToggled ? (
              <img height="32px" src="/static/img/logo/primedatafactory_no_outline.svg" alt=""/>
            ) : (
              <img height="64px" src="/static/img/logo/pdfactory_full_light.svg" alt=""/>
            )
            }

          </div>
        </Link>
        <hr className="sidebar-divider"/>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <FontAwesomeIcon icon={faChartArea}/> Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <FontAwesomeIcon icon={faChartArea}/> Publication
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <FontAwesomeIcon icon={faChartArea}/> Project
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <FontAwesomeIcon icon={faChartArea}/> Warehouse
          </Link>
        </li>

        <hr className="sidebar-divider"/>

        <div className="sidebar-heading">
          Addons
        </div>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages">
            <FontAwesomeIcon icon={faFolder}/> Pages
          </Link>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages"
               data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Page Header:</h6>
              <Link className="collapse-item" to="#">Page 1</Link>
              <Link className="collapse-item" to="#">Page 2</Link>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider d-none d-md-block"/>

        {/*// <!-- Sidebar Toggler (Sidebar) -->*/}
        <div className="text-center d-none d-md-inline">
          <button onClick={this.toggle} className="rounded-circle border-0" id="sidebarToggle">
            <FontAwesomeIcon className='text-white' icon={this.state.isToggled ? faAngleRight : faAngleLeft}/>
          </button>
        </div>
        {/*</span>*/}

      </ul>
    )
  }
}