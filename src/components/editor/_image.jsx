import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImages} from "@fortawesome/free-solid-svg-icons";

export class ImageEditor extends Component {

  handleChange = (e) => {
    let section = this.props.section;
    section[e.target.name] = e.target.value;
    this.props.onChangeSection(section)
  };

  render() {
    return (
      <div  id={"section_"+this.props.section.id} className="card section-card mb-3">
        <div className="w-100 mx-4">
          <FontAwesomeIcon className="text-primary mr-2" icon={faImages}/>
          <input name='title' value={this.props.section.title} onChange={this.handleChange}
                 className="section-title-input"
                 placeholder="Image Description or Section Title"
          />
        </div>
        <div className="card-body">
            <input name='content' value={this.props.section.content}
                   onChange={this.handleChange}
                   className="section-input"
                   placeholder="Image URL"
            />
          <div>
            <img src={this.props.section.content} width="100%" alt={this.props.section.title}/>
          </div>
        </div>
      </div>
    );
  }
}