/* eslint-disable @typescript-eslint/ban-types */
import { Component } from "react";
import ReactDOM from "react-dom";

type State = {
  el: HTMLDivElement | null;
  target: HTMLElement | null;
};

export default class Portal extends Component<{}, State> {
  state: State = {
    el: null,
    target: null,
  };

  componentDidMount() {
    this.setState(
      { el: document.createElement("div"), target: document.body },
      () => {
        this.state.el &&
          this.state.target?.appendChild<HTMLDivElement>(this.state.el);
      }
    );
  }

  componentWillUnmount() {
    this.state.el && this.state.target?.removeChild(this.state.el);
  }

  render() {
    const { children } = this.props;

    if (this.state.el) {
      return ReactDOM.createPortal(children, this.state.el);
    }

    return null;
  }
}
