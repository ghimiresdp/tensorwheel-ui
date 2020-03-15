import React, {Component} from "react";
import {connect} from 'react-redux';
import routes from "../../routes";
import {BlogCard} from "../../components/blog";
import {Footer} from "../../components/common";
import {apiConstants} from "../../constants";

class BlogIndex extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    document.title = 'Blog | Prime Data Factory';
    fetch(apiConstants.blog).then(response => response.json()).then(
      data => {
        this.setState({posts: data.results})
      }
    )
  };

  render() {
    const blog = this.state.posts.map(post => (
      <div key={post.id.toString()} className="col-lg-3 col-md-6 col-sm-12 mb-3">
        <BlogCard post={post} history={this.props.history}/>
      </div>
    ));
    return (
      <>
        <div className='wrapper container-fluid pt-3'>
          <h1>Blog</h1>
          <div className='row'>
            {blog}
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.blog.categories,
    posts: state.blog.posts
  }
};
export default connect(mapStateToProps)(BlogIndex);