import React from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import data from "../data.json";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      chosenLetter: "",
    };
  }

  historial = [];

  //   componentDidMount() {
  //       const name = prompt('Bienvenidx! Como te llamas?');
  //       alert(`Que bello nombre tienes ${name}, espero que disfrutes esta historia!`)
  //   }

//   componentWillUnmount() {
//     if (this.state.count >= 7) {
//       alert("Has concluido este viaje...gracias vuelva prontos!");
//     }
//   }

  handlePath = (letraElegida) => {
    const letra = letraElegida;
    //PRIMER ESCENARIO
    if (this.state.count === 0 && letra === "A") {
      this.setState({
        count: this.state.count + 1,
        chosenLetter: letra
      });
      this.historial.push(letra);
    } else if (this.state.count === 0 && letra === "B") {
      this.setState({
        count: this.state.count + 2,
        chosenLetter: letra
      });
      this.historial.push(letra);
    }
    //SEGUNDO ESCENARIO EN A
    if (this.state.count === 1 && letra === "A") {
      this.setState({
        count: this.state.count + 2,
        chosenLetter: letra
      });
      this.historial.push(letra);
    } else if (this.state.count === 1 && letra === "B") {
      this.setState({
        count: this.state.count + 3,
        chosenLetter: letra
      });
      this.historial.push(letra);
    }
    //SEGUNDO ESCENARIO EN B
    if (this.state.count === 2 && letra === "A") {
      this.setState({
        count: this.state.count + 1,
        chosenLetter: letra
      });
      this.historial.push(letra);
    } else if (this.state.count === 2 && letra === "B") {
      this.setState({
        count: this.state.count + 2,
        chosenLetter: letra
      });
      this.historial.push(letra);
    }
    //TERCER ESCENARIO EN A
    if (this.state.count === 3 && letra === "A") {
      this.setState({
        count: this.state.count + 2,
        chosenLetter: letra
      });
      this.historial.push(letra);
    } else if (this.state.count === 3 && letra === "B") {
      this.setState({
        count: this.state.count + 3,
        chosenLetter: letra
      });
      this.historial.push(letra);
    }
    //TERCER ESCENARIO EN B
    if (this.state.count === 4 && letra === "A") {
      this.setState({
        count: this.state.count + 1,
        chosenLetter: letra
      });
      this.historial.push(letra);
    } else if (this.state.count === 4 && letra === "B") {
      this.setState({
        count: this.state.count + 2,
        chosenLetter: letra
      });
      this.historial.push(letra);
    }
    //CUARTO ESCENARIO EN A
    if (this.state.count === 5 && letra === "A") {
      this.setState({
        count: this.state.count + 2,
        chosenLetter: letra
      });
      this.historial.push(letra);
    } else if (this.state.count === 5 && letra === "B") {
      this.setState({
        count: this.state.count + 3,
        chosenLetter: letra
      });
      this.historial.push(letra);
    }
    //CUARTO ESCENARIO EN B
    if (this.state.count === 6 && letra === "A") {
      this.setState({
        count: this.state.count + 1,
        chosenLetter: letra
      });
      this.historial.push(letra);
    } else if (this.state.count === 6 && letra === "B") {
      this.setState({
        count: this.state.count + 2,
        chosenLetter: letra
      });
      this.historial.push(letra);
    }
    console.log("==============================================="); //sacar luego
    console.log("Estado de count: "+this.state.count); //sacar luego
    console.log("Letra elegida: "+letra); //sacar luego
    console.log("Historial: "+this.historial); //sacar luego
    console.log("Letra STATE elegida: "+this.state.chosenLetter); //sacar luego
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.count].historia} </h1>

        <Opciones
          handlePath={this.handlePath}
          optionA={data[this.state.count].opciones.a}
          optionB={data[this.state.count].opciones.b}
        />

        <Recordatorio  chosenLetter={this.state.chosenLetter} history={this.historial}/>
      </div>
    );
  }
}

export default Layout;
