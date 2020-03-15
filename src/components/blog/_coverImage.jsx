import React, {Component} from "react";

export class BlogCoverImage extends Component{
  render() {
    return(
      <div className="blog-cover blog-cover--fullscreen"
           style={{backgroundImage: `url(${this.props.src}`}}
      >
        <div className="blog-title">
          <h1>{this.props.title}</h1>
          <h3>{this.props.subtitle}</h3>
        </div>
      </div>
    );
  }
}