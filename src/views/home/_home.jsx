import React, {Component} from "react";
import {BlogCoverImage} from "../components/blog";
import {toast} from "react-toastify";
import {Footer} from "../components/common";

export class Index extends Component {
  state = {
    categories: [
      'Programming',
      'AI',
      'Machine Learning',
      'Data Science',
      'Development',
      'Design',
      'Gaming'
    ],
    blogs: [
      {
        id: 1,
        title: 'Be Ready',
        image: '/img/cover.png',
        description: 'Be ready, We are Coming Soon !!',
        date: 'January 1, 2019',
        user: 'Sudip Ghimire'
      },
    ]
  };

  render() {
    document.title = 'Prime Data Factory';
    const {error} = this.state;
    return (
      <div className="position-relative">
        {error && toast(error)}
        <BlogCoverImage src="/static/img/cover.png" alt="Cover"/>
        <div className="position-absolute text-white" style={{top: 100, left: 100}}>
          <h1>We are coming soon !!</h1><br/>
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