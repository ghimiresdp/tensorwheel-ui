import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import AceEditor from "react-ace";
import 'ace-builds/src-min-noconflict/theme-cobalt';

import 'ace-builds/src-min-noconflict/mode-python';
import 'ace-builds/src-min-noconflict/mode-julia';
import 'ace-builds/src-min-noconflict/mode-r';
import 'ace-builds/src-min-noconflict/mode-java';
import 'ace-builds/src-min-noconflict/mode-html';
import 'ace-builds/src-min-noconflict/mode-jsx';
import 'ace-builds/src-min-noconflict/mode-c_cpp';

export class SnippetEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  handleChange = (e) => {
    let {section} = this.props;
    section[e.target.name] = e.target.value;
    this.props.onChangeSection(section)
  };

  handleTextChange = (newValue) => {
    let {section} = this.props;
    section["content"] = newValue;
    this.props.onChangeSection(section);
  };

  render() {
    return (
      <div id={"section_" + this.props.section.id} className="card section-card mb-3">
        <div className="w-100 mx-4">
          <FontAwesomeIcon className="text-primary mr-4" icon={faCode}/>
          <input name='title' onChange={this.handleChange}
                 value={this.props.section.title}
                 className="section-title-input"
                 placeholder="Section Title"
          />

          <select className="section-title-input" id="language" name="language" value={this.props.section.language} onChange={this.handleChange}>
            <option value="" defaultValue>Select Language</option>
            <option value="python">Python</option>
            <option value="julia">Julia</option>
            <option value="r">R</option>
            <option value="c_cpp">C/ C++</option>
            <option value="java">Java</option>
            <option value="html">Html/ XML</option>
            <option value="jsx">Javascript/ JSX</option>
          </select>
        </div>
        <div className="card-body">
          <div>
            <AceEditor name="content" mode={this.props.section.language} value={this.props.section.content}
                       theme="cobalt" onChange={this.handleTextChange} width="100%"/>
          </div>
        </div>
      </div>
    );
  }
}