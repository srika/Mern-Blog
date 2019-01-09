import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CommentItem extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <span className="text-left text-danger"> {comment.name}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="lead">{comment.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(CommentItem);
