
import React from "react";
import Historial from './Historial';

export default class Aventura extends React.Component {
  
  constructor() {
    super();
    this.state = {
      historial: [],
      seleccionAnterior: "1",     
    };
  }

  componentDidMount(){
    if(this.state.seleccionAnterior[0] === "1") {
      alert('Bienvenido! Listo para jugar?')
    }
  }

  componentDidUpdate(){
    console.log(this.state.seleccionAnterior);
  }


  onClickHandler(option) {
    if(this.state.seleccionAnterior[0] === "5") {
      alert("Fin!")
      return
    }
    const nextId = this.nextId(option, this.state.seleccionAnterior)
    this.setState({
      seleccionAnterior: nextId,
      historial: [ ...this.state.historial, option ] 
    });    
  }
  
 

  nextId = (opcion, id) => {
    let idNumber = parseInt(id[0]) + 1 
    let newId = idNumber + opcion[0]
    return newId
  }


  render () {
    
    let index = this.props.options.findIndex(option => option.id === this.state.seleccionAnterior)
    

    return (
      <div className="layout">
        <h1 className="historia">{ this.props.options[index].historia }</h1>
        <div className= "opciones">
          <div className= "opcion">
          <button className="botones" onClick={() => this.onClickHandler("a")}>A</button>
          <h2>{this.props.options[index].opciones.a}</h2>
          </div>
          <div className= "opcion">
            <button className="botones" onClick={() => this.onClickHandler("b")}>B</button>
            <h2>{this.props.options[index].opciones.b}</h2>
          </div>
          <Historial seleccionAnterior={this.state.seleccionAnterior} historial= {this.state.historial.slice(0, -1)}/>
        </div>
      </div>

    );
  }
  
}