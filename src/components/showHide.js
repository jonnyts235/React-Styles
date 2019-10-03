import React from "react";

class ShowHide extends React.Component {
  constructor() {
    super();

    this.state = {
      bool: true
    };
  }

  handleBool = () => {
    this.setState({ bool: !this.state.bool });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleBool}>
          {this.state.bool ? "Show" : "Hide"}
        </button>
        <h1 style={{ display: this.state.bool ? "none" : "block" }}>
          Peek-a-boo
        </h1>
      </div>
    );
  }
}

export default ShowHide;
