import React from "react";

export default class ToggleStyles extends React.Component {
  constructor() {
    super();

    this.state = {
      align: "center"
    };
  }

  handleToggleStyles = style => {
    this.setState({
      align: style
    });
  };

  render() {
    return (
      <div>
        {/* <h1 style={{ display: "flex", "justify-content": this.state.align }}> */}
        <h1 style={{ "text-align": this.state.align }}>Align Me</h1>

        {/* <button onClick={() => this.handleToggleStyles("flex-start")}> */}
        <button onClick={() => this.handleToggleStyles("left")}>Left</button>

        <button onClick={() => this.handleToggleStyles("center")}>
          Center
        </button>

        {/* <button onClick={() => this.handleToggleStyles("flex-end")}> */}
        <button onClick={() => this.handleToggleStyles("right")}>Right</button>
      </div>
    );
  }
}
