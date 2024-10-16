import React, { Component } from 'react'
export default class TablaMultiplicar extends Component {
    selectNumero = React.createRef();
    state = {
        numerosInicio: [1, 2, 4, 6, 53],
        tabla: []
    }
    mostrarTabla = (e) => {
        e.preventDefault();
        let numero = parseInt(this.selectNumero.current.value);
        console.log(numero);
        var aux = [];
        for (var i = 1; i <= 10; i++) {
            let dato = {
                operacion: numero + " * " + i,
                resultado: (numero * i)
            }
            aux.push(dato);
        }
        this.setState({
            tabla: aux
        })
    }

    generarOptions = (e) => {
        console.log("Loading...");
        //VAMOS A GENERAR DINÁMICAMENTE TODO EL DIBUJO HTML QUE NECESITAMOS
        var opciones = [];
        for (var i = 1; i < 5; i++) {
            var random = parseInt(Math.random() * 50) + 1;
            opciones.push(<option key={i} value={random}>
                {random}
            </option>)
        }
        //dibujo para ver si devuelve valores
        // var dibujo = (<h1>dibujo dinámico</h1>);
        return opciones;
    }

    render() {
        return (
            <div>
                {this.generarOptions()}

                <h1>TablaMultiplicar</h1>

                <select ref={this.selectNumero} onChange={this.mostrarTabla}>
                    {
                        //pasamos los números del array del select dentro de este en forma de options
                        this.state.numerosInicio.map((numero, index) => {
                            return (
                                <option key={index} value={numero}>{numero}</option>
                            )
                        })

                    }
                </select>
                <table>
                    <thead>
                        <tr>
                            <th>Operación</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tabla.map((fila, index) => {
                                return (<tr key={index}>
                                    <td>{fila.operacion}</td>
                                    <td>{fila.resultado}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div >
        )
    }
}