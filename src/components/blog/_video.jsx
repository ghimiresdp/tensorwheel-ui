import React, {Component} from 'react';

export class VideoSection extends Component {


  render() {
    return (
      <div id={"section_" + this.props.section.id} className="card section-card mb-3">
        {/*<iframe title={this.props.section.title} width="560px" height="315px" src={this.props.section.content}/>*/}
      </div>
    );
  }
}