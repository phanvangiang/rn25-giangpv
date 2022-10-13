import React, { Component } from "react";

type Props = {};

type State = {
  statenumber: number;
};

class Btb4 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      statenumber: 10,
    };
  }
  handleclick = () => {
    this.setState({ statenumber: this.state.statenumber + 1 });
  };


  render() {
    return <div>
        {
            this.state.statenumber
        }
        <button onClick={this.handleclick}>dem</button>
    </div>;
  }
}

export default Btb4;
