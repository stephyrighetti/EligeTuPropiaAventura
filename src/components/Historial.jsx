import React from "react";

export default class Historial extends React.Component {


    render() {
        return (
          <div className="recordatorio">
            <h3>Selección anterior:</h3>
            <div className="upper">{this.props.seleccionAnterior[1]}</div>
            <h4>Historial de opciones elegidas: </h4>
            <ul className="upper">{this.props.historial.map((elem, index)=> <li key={index}>{elem}</li>)}</ul> 
          </div>
        );
      }
}