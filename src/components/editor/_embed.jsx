import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

export class EmbedEditor extends Component {

  handleChange = (e) => {
    let section = this.props.section;
    section[e.target.name] = e.target.value;
    this.props.onChangeSection(section)
  };

  render() {
    return (
      <div id={"section_"+this.props.section.id} className="card section-card mb-3">
       <div className="w-100 mx-4">
          <FontAwesomeIcon className="text-primary mr-2" icon={faExternalLinkAlt}/>
          <input name='title' value={this.props.section.title} onChange={this.handleChange}
                 className="section-title-input"
                 placeholder="Embed Title or section Title"
          />
        </div>
        <div className="card-body">
            <input name='content' value={this.props.section.content}
                   onChange={this.handleChange}
                   className="section-input"
                   placeholder="Video URL"
            />
          <div>
            <iframe title={this.props.section.title} width="560px" height="315px" src={this.props.section.content}/>
          </div>
        </div>
      </div>
    );
  }
}