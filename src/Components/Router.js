// import de todas las rutas del 'Router.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { Component } from 'react';
import Home from "./Home";
import Cine from "./Cine";
import Musica from "./Musica";
import Collatz from "./Collatz";
import TablaMultiplicar from "./TablaMultiplicar";
import TablaMultiplicarSelect from "./TablaMultiplicarSelect";
import SeleccionMultiple from "./SeleccionMultiple";

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cine" element={<Cine />} />
                    <Route path="/musica" element={<Musica />} />
                    <Route path="/collatz" element={<Collatz />} />
                    <Route path="/multiplicar" element={<TablaMultiplicar />} />
                    <Route path="/multiplicarslect" element={<TablaMultiplicarSelect />} />
                    <Route path="/seleccionmultiple" element={<SeleccionMultiple />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
