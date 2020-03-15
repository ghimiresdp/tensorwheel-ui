import React, {Component} from 'react';
import {BlogCoverImage} from "../../components/blog";
import {Footer} from "../../components/common";

export class WarehouseIndex extends Component {
  render() {
    document.title = 'Warehouse | Prime Data Factory';
    return (
      <div className="position-relative">
        <BlogCoverImage className="blog-cover-mobile" src="/static/img/cover.png" alt="Cover"/>
        <div className="position-absolute text-white" style={{top: 100, left: 100}}>
          <h1>We are building warehouse soon !!</h1><br/>
          <h5>Please be patient,<br/>We are Working hard to finish our work !!</h5><br/>
          Until then, you can check on<br/><br/>
          <a className="btn btn-outline-success" href="https://sudipghimire.com.np">sudipghimire.com.np</a><br/><br/>
          to know about the original developer.
        </div>
        <Footer/>
      </div>
    );
  }
}