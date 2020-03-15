import React, {Component} from "react";
import Axios from "axios";
import {ProfileCard} from "../../components/profile";
import Highlight from 'react-highlight.js';
import {Footer} from "../../components/common";

class BlogDetail extends Component {
  state = {
    blog: {}
  };

  componentWillMount() {
    const {blogId} = this.props.match.params;
    Axios.get(`/api/blog/${blogId}/`)
      .then(({data: blog}) => {
        this.setState({blog: blog});
        document.title = this.state.blog.title;
      });
  }

  render() {
    const {blog} = this.state;
    let displaySection = (section) => {
      switch (section.type) {
        case 'text':
          return (
            <section key={section.title}>
              <p className="section-header">{section.title}</p>
              <div dangerouslySetInnerHTML={{__html: section.content}}/>
            </section>
          );
        case 'image':
          return (
            <section key={section.title}>
              <img width="100%" src={section.content} alt={section.title}/>
              <p className="section-header text-center">{section.title}</p>
            </section>
          );
        case 'video':
        case 'embed':
          return (
            <section key={section.title}>
              <p className="section-header text-center">{section.title}</p>
              <iframe
                title={section.title}
                src={section.content}
                width="100%"
                height={"100%"}
              />
            </section>
          );
        default:
          return (
            <section key={section.title}>
              <h2 className="section-header">{section.title}</h2>
              <Highlight language={section.language}>
                {section.content}
              </Highlight>
            </section>
          )
      }
    };
    const blogContent = Object.keys(blog).length === 0 ? (
      <h1 className="text-center">Prime Data Factory</h1>
    ) : (
      <>
        <div className={blog.cover ? "jumbotron blog-cover" : "jumbotron bg-login-gradient blog-cover"}
             style={{backgroundImage: `url(${blog.cover})`, minHeight: "50vh"}}>
          <span>
            <h1 className="blog-title">{blog.title}</h1>
            <h4 className="blog-subtitle">{blog.subtitle}</h4>
          </span>
        </div>
        <div className="container-xl">
          <div className="row pb-5">
            <div className="col-lg-9 col-12">
              <div id="blog-detail" className="card blog-post p-3 shadow">
                {blog.content && JSON.parse(blog.content).map(x => displaySection(x))}
                {!blog.content && <h1>Prime Data Factory</h1>}
                <hr/>
                <ProfileCard user={blog.user}/>
              </div>
            </div>
            <div className="col-12 col-lg-3">
            </div>
          </div>
        </div>
      </>
    );
    return (
      <>
        <div className="wrapper blog-container">
          {blogContent}
        </div>
        <Footer/>
      </>
    );
  }

}

export {BlogDetail};