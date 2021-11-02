import React, { Component } from "react";

class History extends Component {
  onClickBack = () => {
    this.props.history.goBack();
  };
  onClickMain = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    // Ask really move the page
    this.unblock = this.props.history.block("Do you want to leave this page?");
  }

  componentWillUnmount() {
    // If unmounted, not ask the question
    if (this.unblock) this.unblock();
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickBack}>Back</button>
        <button onClick={this.onClickMain}>To Main</button>
      </div>
    );
  }
}

export default History;
