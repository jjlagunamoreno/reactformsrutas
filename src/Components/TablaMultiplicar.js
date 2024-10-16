import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    // AQUÍ DEFINO UNA REFERENCIA PARA EL INPUT DEL NÚMERO QUE EL USUARIO VA A INTRODUCIR
    cajaNumero = React.createRef();

    // ARRAY DONDE GUARDARÉ LOS RESULTADOS DE LAS MULTIPLICACIONES Y EL NÚMERO INICIAL
    state = {
        numero: 0,
        numeros: [],
        resultados: [],
    }

    // funcion para multiplicar los números
    multiplicarNumero = (e) => {
        // EVITAMOS QUE EL FORMULARIO RECARGUE LA PÁGINA AL ENVIARSE
        e.preventDefault();

        //comprobamos el número que introducen está bien dentro de una variable
        let numeroIntroducido = parseInt(this.cajaNumero.current.value);
        console.log(numeroIntroducido);

        //creamos arrays para almacenar los números y resultados
        let numerosMultiplicaciones = [];
        let resultadosMultiplicaciones = [];

        //generamos las multiplicaciones y las monstramos en consola y metemos dentro de la variable multiplicaciones
        for (let i = 1; i < 11; i++) {
            numerosMultiplicaciones.push(i);
            console.log(numerosMultiplicaciones);

            resultadosMultiplicaciones.push(numeroIntroducido * i);
            console.log(resultadosMultiplicaciones);
        }

        this.setState({
            numero: numeroIntroducido,
            numeros: numerosMultiplicaciones,
            resultados: resultadosMultiplicaciones
        });
    }


    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1 style={{ color: "blue", textDecoration: "underline" }}>Tabla para Multiplicar</h1>
                <form onSubmit={this.multiplicarNumero}>
                    <label>Introduzca número para multiplicar: </label>
                    <input type='text' ref={this.cajaNumero} />
                    <br />
                    <button>Multiplicar</button>
                    <br />
                    {
                        //pintamos el número que agregamos en el state 
                        <h4>Tabla del {this.state.numero}</h4>

                    }
                    <br />
                    <table style={{ width: "90%", margin: "20px auto", borderCollapse: "collapse", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", fontFamily: "'Arial', sans-serif" }}>

                        {
                            <tr>
                                {this.state.resultados.map((arrayDeResultados, index) => (
                                    <td key={index} style={{ padding: "12px", backgroundColor: index % 2 === 0 ? "#e9e9e9" : "#ffffff", border: "1px solid #ccc", textAlign: "center", fontSize: "16px", fontWeight: "bold" }}>
                                        {this.state.numero} * {this.state.numeros[index]} = {arrayDeResultados}
                                    </td>
                                ))}
                            </tr>
                        }
                    </table>
                </form>
            </div >
        )
    }
}
