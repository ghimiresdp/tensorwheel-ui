import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFont} from "@fortawesome/free-solid-svg-icons";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.section.content
    };
  }

  handleChange = (e) => {
    let section = this.props.section;
    section.title = e.target.value;
    this.props.onChangeSection(section)
  };

  handleTextChange = (value) => {
    this.setState({content: value});
    let section = this.props.section;
    section.content = value;
    this.props.onChangeSection(section)
  };

  modules = {
    toolbar: [
      [{'header': [1, 2, 3, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean']
    ],
  };

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  render() {
    return (
      <div id={"section_" + this.props.section.id} className="card section-card mb-3">
        <div className="w-100 mx-4">
          <FontAwesomeIcon className="text-primary mr-4" icon={faFont}/>
          <input onChange={this.handleChange}
                 value={this.props.section.title}
                 className="section-title-input"
                 placeholder="Section Title"
          />
        </div>
        <div className="card-body">
          <ReactQuill value={this.state.content} onChange={this.handleTextChange}
                      modules={this.modules} formats={this.formats}/>
        </div>
      </div>
    );
  }
}