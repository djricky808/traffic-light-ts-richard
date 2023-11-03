import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    count: 0,
  };

  changeLight = () => {
    0;
    const count = this.state.count;
    if (count === 2) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: count + 1 });
    }
  };

  render() {
    const greenLight = this.state.count === 0;
    const yellowLight = this.state.count === 1;
    const redLight = this.state.count === 2;
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${redLight ? "red" : "black"}`}></div>
          <div className={`circle ${yellowLight ? "yellow" : "black"}`}></div>
          <div className={`circle ${greenLight ? "green" : "black"}`}></div>
        </div>
        <button className="next-state-button" onClick={this.changeLight}>
          Next State
        </button>
      </div>
    );
  }
}
