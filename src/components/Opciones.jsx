import React from "react";

class Opciones extends React.Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button id="A" className="botones" onClick={() => this.props.handlePath("A")}>
            A
          </button>
          <h2>{this.props.optionA}</h2>
        </div>
        <div className="opcion">
          <button id="B" className="botones" onClick={() => this.props.handlePath("B")}>
            B
          </button>
          <h2>{this.props.optionB}</h2>
        </div>
      </div>
    );
  }
}

export default Opciones;
