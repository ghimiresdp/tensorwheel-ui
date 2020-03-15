import React, {Component} from 'react';
export class EmbedSection extends Component {
  render() {
    return (
      <div id={"section_"+this.props.section.id}>
      </div>
    );
  }
}