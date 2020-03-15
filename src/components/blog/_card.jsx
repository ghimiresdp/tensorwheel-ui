import React, {Component} from "react";
import routes from "../../routes";
import propTypes from "prop-types";
import {Link, matchPath} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenAlt} from "@fortawesome/free-solid-svg-icons";
import {DeleteBlogModal} from "../modals";
import {deleteBlog} from "../../services/blogService";
import {toast} from "react-toastify";

export class BlogCard extends Component {
  static propTypes = {
    history: propTypes.any.isRequired,
    protected: propTypes.bool
  };
  onDeleteBlog = (id) => {
    deleteBlog(id).then(
      res => {
        toast('Blog deleted Successfully');
        window.location.reload()
      }
    ).catch(
      err => {
        toast('failed to delete');
      }
    )
  };

  render() {
    const {post} = this.props;
    return (
      <>
        <div className="blog-card blog-card--1"
             onClick={(e) => {
               e.preventDefault();
               this.props.history.push(
                 post.published ? (routes.blog.index + "/" + post.id) : ("/my-blog/compose/" + post.id)
               );
             }}>
          <div className={post.cover ? "blog-card__image" : "blog-card__image bg-login-gradient"}
               style={{backgroundImage: `url(${post.cover})`}}
          >
            {post.tags}
            {post.user &&
            <div className="blog-card__author d-flex" onClick={e => e.stopPropagation()}>
              <Link to="#" className="blog-card__author-avatar blog-card__author-avatar"
                    style={{backgroundImage: `url('${post.user.picture}')`}}
                    title={post.user.first_name || post.user.last_name ?
                      post.user.first_name + " " + post.user.last_name : post.user.username}
              >
              </Link>
            </div>}
          </div>
          <div className="card-body bg-white">
            {this.props.protected &&
            <>
              <div className={'card-actions'} onClick={e => e.stopPropagation()}>
                <Link className="mx-3" to={"/my-blog/compose/" + post.id}>Edit</Link>
                <span className="mx-3" data-toggle="modal" data-target="#deleteBlogModal">Delete</span>
              </div>
              {!post.published &&
              <span className="blog-tag blog-tag-secondary" style={{position: 'absolute', top: 5}}>
                <FontAwesomeIcon icon={faPenAlt}/>Draft
              </span>
              }
            </>
            }
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text mb-3 text-dark">{post.subtitle}</p>
          </div>
          {post.date_published &&
          <div className="card-footer">
            <span className="">Published: {post.date_published}</span>
          </div>}
        </div>
        < DeleteBlogModal
          onDelete={() => this.onDeleteBlog(post.id)}
          title={post.title}
        />
      </>
    );
  }
}