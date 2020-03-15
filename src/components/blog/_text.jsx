import React, {Component} from 'react';
import 'react-quill/dist/quill.snow.css';

export class TextSection extends Component {
  render() {
    return (
      <div id={"section_"+this.props.section.id}>
      </div>
    );
  }
}