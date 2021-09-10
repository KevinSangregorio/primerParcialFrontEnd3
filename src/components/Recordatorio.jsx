import React from "react";

class Recordatorio extends React.Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.chosenLetter}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>
          {
            this.props.history.map((e, index) => {
              return <li key={index}>{e}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Recordatorio;
