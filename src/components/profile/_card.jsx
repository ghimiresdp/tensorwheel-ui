import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons";

export class ProfileCard extends Component {
  render() {
    const {user} = this.props;
    const {small} = this.props;
    const card = small ? (
      <>
        <img className="rounded-circle mr-3" src={user.picture} width="48px" height="48px" alt=""/>
        {user.github_url &&
        <a className="mx-1" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
           href={user.github_url}>
          <FontAwesomeIcon icon={faGithub}/></a>}
        {user.linkedin_url &&
        <a className="mx-1" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
           href={user.linkedin_url}>
          <FontAwesomeIcon icon={faLinkedin}/></a>}
        {user.stack_url &&
        <a className="mx-1" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
           href={user.stack_url}>
          <FontAwesomeIcon icon={faStackOverflow}/></a>}
        {this.props.children}
      </>
    ) : (
      <>
        <img className="rounded-circle mr-3" src={user.picture} width="96px" height="96px" alt=""/>
        <div className="ml-2">
          <h5 className="mb-3">{user.first_name + " " + user.last_name}</h5>
          {user.github_url &&
          <a onClick={(e) => e.stopPropagation()} className="mx-1" target="_blank" rel="noopener noreferrer"
             href={user.github_url}>
            <FontAwesomeIcon icon={faGithub} size="2x"/></a>}
          {user.linkedin_url &&
          <a onClick={(e) => e.stopPropagation()} className="mx-1" target="_blank" rel="noopener noreferrer"
             href={user.linkedin_url}>
            <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>}
          {user.stack_url &&
          <a onClick={(e) => e.stopPropagation()} className="mx-1" target="_blank" rel="noopener noreferrer"
             href={user.stack_url}>
            <FontAwesomeIcon icon={faStackOverflow} size="2x"/></a>}
        </div>
      </>
    );
    return (
      <div className="row mx-2" onClick={e => e.stopPropagation()}>
        {card}
      </div>
    );
  }
}