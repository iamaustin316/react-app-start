import React, { Component } from 'react';

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "你沒有按",
    };
  }
  render() {
    return (
      <div className="box">
        <h2>使用者：{this.props.name}</h2>
        <p>手機：{this.props.mobile}</p>
        <button className="square" onClick={() => this.setState({value: '你已經按了'})}>{this.state.value}</button>
      </div>
    );
  }
}

