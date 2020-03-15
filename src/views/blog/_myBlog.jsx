import React, {Component} from "react";
import AuthUtils from "../../utils/authUtils";
import {toast} from "react-toastify";
import {BlogCard} from "../../components/blog";
import {Footer} from "../../components/common";
import {apiConstants} from "../../constants";

export class MyBlog extends Component {
  state = {
    blogCount: 0,
    nextPage: '',
    prevPage: '',
    offset: 0,
    limit: 7,
    posts: [],
    title: '',
    subtitle: '',
    selected: '',
    loading: false

  };

  fetchBlog = () => {
    let requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + AuthUtils.getAccessToken()
      }
    };
    fetch(`${apiConstants.my_blog}/?limit=${this.state.limit}&offset=${this.state.offset}`,
      requestOptions).then(response => response.json()).then(
      data => {
        let {posts} = this.state;
        posts = [...posts, ...data.results];
        this.setState({posts: posts});
        this.setState({
          posts: posts,
          blogCount: data.count,
          nextPage: data.next,
          prevPage: data.previous,
          offset: this.state.offset + this.state.limit,
          loading: false
        });
        // this.setState({blogCount: data.count});
        // this.setState({nextPage: data.next});
        // this.setState({prevPage: data.previous});
        // this.setState({offset: this.state.offset+this.state.limit});
      }
    ).catch(error => {
        this.setState({loading: false});
        toast(JSON.stringify(error))
      }
    )
  };
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  handleLoadMore = (e) => {
    this.setState({loading: true});
    if (this.state.nextPage) {
      this.fetchBlog()
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + AuthUtils.getAccessToken()
      },
      body: JSON.stringify({title: this.state.title, subtitle: this.state.subtitle})
    };
    fetch(apiConstants.my_blog,
      requestOptions).then(response => response.json()).then(
      data => {
        this.setState({title: '', subtitle: '', offset: 0, posts: []});
        this.componentDidMount()
      }
    ).catch(error => {
        toast(JSON.stringify(error));
        console.log(error)
      }
    )
  };

  lazyScroll=()=>{
      let innerHeight = window.innerHeight;
      let loadingPos = document.getElementById('content-end').getBoundingClientRect().bottom;
      if (!this.state.loading && this.state.offset < this.state.blogCount && (loadingPos < innerHeight)) {
        this.setState({loading: true});
        this.fetchBlog()
      }
    };

  componentDidMount() {
    document.title = 'My Blog | Prime Data Factory';
    window.addEventListener('scroll', this.lazyScroll);
    this.fetchBlog()
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.lazyScroll)
  }

  render() {
    const {posts} = this.state;
    const blog = posts.map(post => (
      <div key={post.id.toString()} className="col-lg-3 col-md-6 col-sm-12 mb-3">
        <BlogCard protected={true} post={post} history={this.props.history}/>
      </div>
    ));

    return (
      <>
        <div className='wrapper pt-3 container-fluid'>
          <h1>My Blog</h1>
          <div className='row'>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-3 d-flex flex-row align-items-stretch">
              <div className="blog-card blog-card--1 w-100 p-4">
                <form onSubmit={this.handleSubmit}>
                  <h3>Create a blog</h3>
                  <div className="form-group">
                    <label className="label">Title</label>
                    <input name="title" value={this.state.title} className="form-control" type="text"
                           onChange={this.handleChange} placeholder="Blog Title" maxLength={64} required={true}/>
                  </div>
                  <div className="form-group">
                    <label className="label">Subtitle</label>
                    <textarea name="subtitle" value={this.state.subtitle}
                              placeholder={"Subtitle(Maximum 128 characters)"}
                              className="form-control" type="text" spellCheck={true}
                              onChange={this.handleChange} rows={4} maxLength={128} required={true}
                    />
                  </div>
                  <input type="submit" className="btn btn-outline-accent form-control" value="Create"/>
                </form>
              </div>
            </div>
            {blog}
            <div id="content-end" className="col-lg-3 col-md-6 col-sm-12 mb-3 d-flex flex-row align-items-stretch">
              {this.state.nextPage &&
              <div className="blog-card blog-card--1 w-100 p-4">
                {this.state.loading && "Loading..."}
              </div>}
            </div>
          </div>
        </div>
        <Footer/>
      </>
    )
  }
}