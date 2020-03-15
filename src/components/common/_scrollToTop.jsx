import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

export class ScrollToTop extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({isTop: window.scrollY < 300})
    });
  }

  clickListener = () => {
    window.scrollTo({top:0, behavior:'smooth'})
  };

  render() {
    return (
      <button className="scroll-to-top rounded"
              style={this.state.isTop ? {
                opacity: 0,
                transition: "width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s"
              } : {
                opacity: 1,
                transition: "width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s"
              }}
              onClick={this.clickListener}
      >
        <FontAwesomeIcon icon={faAngleUp}/>
      </button>
    )
  }
}