import { Component } from "react";
import ReactDOM from "react-dom";

export default class Portal extends Component {
  state = {
    el: null,
    target: null,
  };

  componentDidMount() {
    this.setState(
      { el: document.createElement("div"), target: document.body },
      () => {
        this.state.target.appendChild(this.state.el);
      }
    );
  }

  componentWillUnmount() {
    this.state.target && this.state.target.removeChild(this.state.el);
  }

  render() {
    const { children } = this.props;

    if (this.state.el) {
      return ReactDOM.createPortal(children, this.state.el);
    }

    return null;
  }
}
