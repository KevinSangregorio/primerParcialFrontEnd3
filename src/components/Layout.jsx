import React from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import story from "../data.json";
import swal from "sweetalert";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      chosenLetter: "",
    };
  }

  historial = [];

  componentDidMount() {
    const name = prompt("Bienvenidx! Como te llamas?");
    // alert(
    //   
    // );
    swal(`Que bello nombre tienes ${name}, espero que disfrutes esta historia!`);
    story.push(story.shift());
  }

  componentDidUpdate(prevProps, prevState) {
    story.push(story.shift());
    story.push(story.shift());

    this.historial.push(this.state.chosenLetter);

    if (this.historial.length === 5) {
     swal({
       title: "Has concluido este viaje...",
       text: "¿Deseas repetir la experiencia y elegir otro rumbo?",
       icon: "success",
       buttons: ["No", "Si"]
     }).then(respuesta => {
       if (respuesta) {
         window.location.reload()
       }
      })
    }
  }

  handlePath = (letraElegida) => {
    if (letraElegida === "A") {
      this.setState({
        count: 0,
        chosenLetter: letraElegida,
      });
    } else {
      this.setState({
        count: 1,
        chosenLetter: letraElegida,
      });
    }
  };
  // handlePath = (letraElegida) => {
  //   const letra = letraElegida;
  //   //PRIMER ESCENARIO
  //   if (this.state.count === 0 && letra === "A") {
  //     this.setState({
  //       count: this.state.count + 1,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   } else if (this.state.count === 0 && letra === "B") {
  //     this.setState({
  //       count: this.state.count + 2,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   }
  //   //SEGUNDO ESCENARIO EN A
  //   if (this.state.count === 1 && letra === "A") {
  //     this.setState({
  //       count: this.state.count + 2,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   } else if (this.state.count === 1 && letra === "B") {
  //     this.setState({
  //       count: this.state.count + 3,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   }
  //   //SEGUNDO ESCENARIO EN B
  //   if (this.state.count === 2 && letra === "A") {
  //     this.setState({
  //       count: this.state.count + 1,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   } else if (this.state.count === 2 && letra === "B") {
  //     this.setState({
  //       count: this.state.count + 2,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   }
  //   //TERCER ESCENARIO EN A
  //   if (this.state.count === 3 && letra === "A") {
  //     this.setState({
  //       count: this.state.count + 2,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   } else if (this.state.count === 3 && letra === "B") {
  //     this.setState({
  //       count: this.state.count + 3,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   }
  //   //TERCER ESCENARIO EN B
  //   if (this.state.count === 4 && letra === "A") {
  //     this.setState({
  //       count: this.state.count + 1,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   } else if (this.state.count === 4 && letra === "B") {
  //     this.setState({
  //       count: this.state.count + 2,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   }
  //   //CUARTO ESCENARIO EN A
  //   if (this.state.count === 5 && letra === "A") {
  //     this.setState({
  //       count: this.state.count + 2,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   } else if (this.state.count === 5 && letra === "B") {
  //     this.setState({
  //       count: this.state.count + 3,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   }
  //   //CUARTO ESCENARIO EN B
  //   if (this.state.count === 6 && letra === "A") {
  //     this.setState({
  //       count: this.state.count + 1,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   } else if (this.state.count === 6 && letra === "B") {
  //     this.setState({
  //       count: this.state.count + 2,
  //       chosenLetter: letra
  //     });
  //     this.historial.push(letra);
  //   }
  //   // console.log("===============================================");
  //   // console.log("Estado de count: "+this.state.count);
  //   // console.log("Letra elegida: "+letra);
  //   // console.log("Historial: "+this.historial);
  //   // console.log("Letra STATE elegida: "+this.state.chosenLetter);
  //   // console.log(data);
  // };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{story[this.state.count].historia} </h1>

        <Opciones
          handlePath={this.handlePath}
          optionA={story[this.state.count].opciones.a}
          optionB={story[this.state.count].opciones.b}
        />

        <Recordatorio
          chosenLetter={this.state.chosenLetter}
          history={this.historial}
        />
      </div>
    );
  }
}

export default Layout;
