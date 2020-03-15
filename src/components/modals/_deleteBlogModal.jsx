import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class DeleteBlogModal extends Component {
  static propTypes={
    onDelete: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="modal fade" id="deleteBlogModal" tabIndex="-1" role="dialog" aria-labelledby="deleteBlogModalLabel"
           aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteBlogModalLabel">Are you sure to delete "{this.props.title}"?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              All the saved progress will be deleted. If the blog is the original instance and not draft, the published blog also will be deleted.
              Select "Delete" if you are sure or "Cancel" to cancel.
            </div>
            <div className="modal-footer">
              <button className="btn btn-accent" type="button" data-dismiss="modal">Cancel</button>
              <button type="submit" onClick={this.props.onDelete} className="btn btn-danger"  data-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}