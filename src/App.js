import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const empleado={
      nombre:'carlos',
      trabajo:'desarrollo web'
    }
    return (

      // <React.Fragment></React.Fragment>
      <div className="contenedor">
        <div className="mayusculas">
          <h1>Detalles de:</h1>
        </div>
        
        <p>Nombre: {empleado.nombre}</p>
        <p>Ocupacion: {empleado.trabajo}</p>
      </div>
    );
  }
}

export default App;
