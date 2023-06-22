import React, { Component } from "react";
import bellA from "./Bell A.png";
import bellB from "./Bell B.png";
class Newcomp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to Ali Murtaza",
      sub: "Subscribe",
      image: bellA,
    };
  }

  ButtonChange = () => {
    this.setState({
      message: "Click on the Bell Icon to Never Miss an Update",
      sub: "Unsubscribe",
      image: bellB,
    });
  };
  Imagechange = () => {
    this.setState({
      image: bellB,
      message: "Thank You For Subscribing",
    });
  };

  render() {
    const divStyle = {
      fontStyle: "italic",
      color: "red",
    };
    const buttonStyle = {
      marginBottom: "10px",
    };

    const imageStyle = {
      width: "30px",
      height: "30px",
    };

    return (
      <div className="App" style={divStyle}>
        <h3>{this.state.message}</h3>
        <button style={buttonStyle} onClick={this.ButtonChange}>
          {this.state.sub}
        </button>
        <img
          style={imageStyle}
          src={this.state.image}
          onClick={this.Imagechange}
          alt="Bell"
        ></img>
      </div>
    );
  }
}

export default Newcomp;
