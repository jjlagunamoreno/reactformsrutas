import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Router from './Components/Router';
import MenuRutas from './Components/MenuRutas';
import FormSimple from './Components/FormSimple';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ textAlign: "center" }}>
      <MenuRutas />
      <h1>INDEX PRINCIPAL</h1>
      <hr />
      {/* Ejercicio Router base */}
      {/* <Router /> */}

      {/* Ejercicio de formulario */}
      <FormSimple />
      <hr />
      <h2>Pie de página</h2>
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
