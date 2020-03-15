import React, {Component} from 'react';
import {
  faArrowDown, faArrowUp, faCode, faExternalLinkAlt,
  faFont, faImage, faImages, faPaperclip, faSave, faTrash, faUpload, faVideo
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux';
import Axios from "axios";
import {toast} from "react-toastify";
import AuthUtils from "../../utils/authUtils";
import routes from "../../routes";
import {composerConstants} from "../../constants";
import {
  AttachmentEditor,
  EmbedEditor,
  ImageEditor,
  SnippetEditor,
  TextEditor,
  VideoEditor
} from "../../components/editor";

class Composer extends Component {
  state = {
    is_draft: true,
    errors: {}
  };

  componentDidMount() {
    const {blogId} = this.props.match.params;
    Axios.get(`/api/my-blog/${blogId}/`, {
      headers: {Authorization: "Bearer " + AuthUtils.getAccessToken()}
    })
      .then(({data: blog}) => {
        document.title = blog.title;

        this.setState({is_draft: (blog.draft_of)});
        this.props.loadData(blog)
      })
      .catch(error => {
        toast("The blog you are trying to access does not exist");
        this.props.history.push(routes.blog.my_blog)
      });
  }

  saveDraft = (publish = false) => {
    const {blogId} = this.props.match.params;
    let fData = new FormData();
    fData.append('title', this.props.title);
    fData.append('subtitle', this.props.subtitle);
    fData.append('content', JSON.stringify(this.props.sections));
    fData.append('published', publish);
    this.props.tags.forEach(x => fData.append('tags[]', x));
    if (typeof this.props.cover === 'object')
      fData.append('cover', this.props.cover);
    Axios.patch(
      `/api/my-blog/${blogId}/`, fData, {
        headers: {Authorization: "Bearer " + AuthUtils.getAccessToken()}
      }
    ).then(res => {
      toast(publish ? "Your Changes have been published" : "Your Blog have been saved. Please publish it to reflect changes");
      if (publish)
        this.props.history.push(routes.blog.my_blog)
    }).catch(err => {
      this.setState({errors: err.response.data});
    })
  };

  render() {
    const {errors} = this.state;
    const toasts = errors ? Object.keys(errors).forEach(error => {
      errors[error].forEach(err => {
        toast(err)
      })
    }) : "";
    const getCoverImage = (img) => !img ? "" : (typeof img === 'string') ? img : URL.createObjectURL(img);
    const icon = (type) => {
      switch (type) {
        case 'text':
          return faFont;
        case 'image':
          return faImages;
        case 'video':
          return faVideo;
        case 'embed':
          return faExternalLinkAlt;
        case 'code':
          return faCode;
        default:
          return faPaperclip;
      }
    };
    const sections = this.props.sections.map((section) => (
      <li className="" key={section.id}>
        <div className="section-preview-list">
          <FontAwesomeIcon className="mr-2" icon={icon(section.type)}/>
          <a
            href={"#section_" + section.id}>{section.title.length === 0 ? (section.type + " section") : section.title}</a>
          <div className="section-controls">
            <button onClick={() => this.props.moveSection(section.id, 1)}
                    className="btn-secondary bg-secondary-gradient">
              <FontAwesomeIcon icon={faArrowUp}/>
            </button>
            <button onClick={() => this.props.moveSection(section.id, -1)}
                    className="btn-secondary bg-secondary-gradient">
              <FontAwesomeIcon icon={faArrowDown}/>
            </button>
            <button onClick={() => this.props.deleteSection(section.id)} className="btn-danger">
              <FontAwesomeIcon icon={faTrash}/>
            </button>
          </div>
        </div>
      </li>
    ));
    const contents = this.props.sections.map((section) => {
      switch (section.type) {
        case 'text':
          return (
            <TextEditor
              key={section.id}
              section={section}
              onChangeSection={this.props.editSection}
            />
          );
        case 'image':
          return (
            <ImageEditor
              key={section.id}
              section={section}
              onChangeSection={this.props.editSection}
            />
          );
        case 'video':
          return (
            <VideoEditor
              key={section.id}
              section={section}
              onChangeSection={this.props.editSection}
            />
          );
        case 'code':
          return (
            <SnippetEditor
              key={section.id}
              section={section}
              onChangeSection={this.props.editSection}
            />
          );
        case 'embed':
          return (
            <EmbedEditor
              key={section.id}
              section={section}
              onChangeSection={this.props.editSection}
            />
          );
        default:
          return (
            <AttachmentEditor
              key={section.id}
              section={section}
              onChangeSection={this.props.editSection}
            />
          );
      }
    });
    return (
      <>
        {toasts}
        <div className="composer-wrapper">
          <div className='sidebar sidebar-left'>
            <div className="row">
              <button className='btn col btn-secondary m-1' onClick={() => this.saveDraft(false)}>
                <FontAwesomeIcon icon={faSave}/> Save
              </button>
              <button className='btn col btn-primary-gradient m-1' onClick={() => this.saveDraft(true)}>
                <FontAwesomeIcon icon={faUpload}/> Publish
              </button>
            </div>
            <h5 className="m-2">
              {this.props.title}
            </h5>
            <ol>
              {sections}
            </ol>
          </div>
          <div className='editor-container'>
            <div className="blog-post">
              <div
                className={this.props.cover ? "jumbotron blog-cover blog-cover--small" :
                  "jumbotron bg-login-gradient blog-cover  blog-cover--small"}
                style={{backgroundImage: `url(${getCoverImage(this.props.cover)})`, minHeight: "50vh"}}
              >
                <span className="blog-cover-overlay"/>
                <span>
                  <input id="coverImageInput" type="file" className="d-none"
                         onChange={(e) => {
                           this.props.changeCover(e.target.files[0])
                         }}
                  />
                  <button className="btn btn-lg btn-outline-light"
                          onClick={() => document.getElementById('coverImageInput').click()}
                  >
                    <FontAwesomeIcon icon={faImage}/> Change Cover Image
                  </button>
                  <h1 className="blog-title">{this.props.title}</h1>
                  <h4 className="blog-subtitle">{this.props.subtitle}</h4>
                </span>
              </div>
            </div>
            <div className="d-flex d-md-none flex-row w-100 justify-content-end align-items-stretch">
              <button className='btn btn-secondary ml-3' onClick={() => this.saveDraft(false)}>
                <FontAwesomeIcon icon={faUpload}/> Save
              </button>
              <button className='btn btn-primary-gradient ml-3' onClick={() => this.saveDraft(true)}>
                <FontAwesomeIcon icon={faUpload}/> Publish
              </button>
            </div>
            <input name='blogTitle' value={this.props.title} maxLength={64}
                   onChange={(e) => this.props.changeTitle(e.target.value)}
                   className='title-input mb-2 w-100' placeholder="Blog Title"/>

            <input name='blogSubTitle' value={this.props.subtitle} maxLength={128}
                   onChange={(e) => this.props.changeSubtitle(e.target.value)}
                   className='subtitle-input mb-2 w-100' placeholder="Blog subtitle"/>
            {contents}
            <div className="add-section">
              <div onClick={() => this.props.selectOption('text')}
                   className="btn section-btn btn-outline-secondary">
                <FontAwesomeIcon size={'2x'} icon={faFont}/>
                Text
              </div>
              <div onClick={() => this.props.selectOption('image')}
                   className="btn section-btn btn-outline-secondary">
                <FontAwesomeIcon size={'2x'} icon={faImages}/>
                Image
              </div>
              <div onClick={() => this.props.selectOption('video')}
                   className="btn section-btn btn-outline-secondary">
                <FontAwesomeIcon size={'2x'} icon={faVideo}/>
                Video
              </div>
              <div onClick={() => this.props.selectOption('embed')}
                   className="btn section-btn btn-outline-secondary">
                <FontAwesomeIcon size={'2x'} icon={faExternalLinkAlt}/>
                Embed
              </div>
              <div onClick={() => this.props.selectOption('file')}
                   className="btn section-btn btn-outline-secondary">
                <FontAwesomeIcon size={'2x'} icon={faPaperclip}/>
                File
              </div>
              <div onClick={() => this.props.selectOption('code')}
                   className="btn section-btn btn-outline-secondary">
                <FontAwesomeIcon size={'2x'} icon={faCode}/>
                Code
              </div>
            </div>
          </div>
          <div className='sidebar sidebar-right'>
            <div className="row">
              <div className="col-12 card">
                Tags
              </div>
              <div className="col-12 card">
                Images
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.compose.title,
    subtitle: state.compose.subtitle,
    cover: state.compose.cover,
    tags: state.compose.tags,
    sections: state.compose.sections,
    published: state.compose.published
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectOption: (value) => {
      dispatch({type: composerConstants.ADD_SECTION, value: value})
    },
    deleteSection: (id) => {
      dispatch({type: composerConstants.DELETE_SECTION, id: id})
    },
    moveSection: (id, step) => {
      dispatch({type: composerConstants.MOVE_SECTION, id, step})
    },
    changeTitle: (title) => {
      dispatch({type: composerConstants.RENAME_BLOG, title})
    },
    changeSubtitle: (text) => {
      dispatch({type: composerConstants.RENAME_BLOG_SUBTITLE, text})
    },
    editSection: (section) => {
      dispatch({type: composerConstants.EDIT_SECTION, section})
    },
    loadData: (blog) => {
      dispatch({type: composerConstants.LOAD_DATA, blog: blog})
    },
    changeCover: (image) => {
      dispatch({type: composerConstants.CHANGE_COVER, cover: image})
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Composer)