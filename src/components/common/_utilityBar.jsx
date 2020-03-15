import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default class UtilityBar extends Component{
  render() {
    return(
      <div className="utility-bar">
        <div className="btn btn-circle btn-dark my-2">
          <FontAwesomeIcon icon={faFacebookF}/>
        </div>
        <div className="btn btn-circle btn-dark my-2">
          <FontAwesomeIcon icon={faLinkedinIn}/>
        </div>
        <div className="btn btn-circle btn-dark my-2">
          <FontAwesomeIcon icon={faGithub}/>
        </div>
        <div className="btn btn-circle btn-dark my-2">
          <FontAwesomeIcon icon={faTwitter}/>
        </div>
      </div>
    )
  }

}