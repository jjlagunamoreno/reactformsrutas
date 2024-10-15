import React, { Component } from 'react';

export default class Collatz extends Component {
    // AQUÍ DEFINO UNA REFERENCIA PARA EL INPUT DEL NÚMERO QUE EL USUARIO VA A INTRODUCIR
    cajaNumero = React.createRef();

    // ESTADO INICIAL DONDE GUARDARÉ LOS RESULTADOS DE LA SECUENCIA DE COLLATZ
    state = {
        resultados: []
    }

    // MÉTODO QUE GENERA LA SECUENCIA DE COLLATZ
    metodoCollatz = (e) => {
        e.preventDefault(); // EVITO QUE EL FORMULARIO RECARGUE LA PÁGINA AL ENVIARSE

        // OBTENGO EL NÚMERO DEL INPUT Y LO CONVIERTO A UN NÚMERO ENTERO
        let numero = parseInt(this.cajaNumero.current.value);

        // MUESTRO EN CONSOLA EL NÚMERO QUE HEMOS SELECCIONADO
        console.log("Número seleccionado: " + numero)

        // SI EL NÚMERO NO ES VÁLIDO O ES MENOR O IGUAL A 0, MUESTRO UNA ALERTA
        if (isNaN(numero) || numero <= 0) {
            alert("Por favor, ingrese un número válido mayor que 0.");
            return;
        }

        // CREO UN ARRAY PARA GUARDAR LA SECUENCIA DE NÚMEROS
        let secuencia = [];

        // MIENTRAS EL NÚMERO NO SEA 1, APLICO EL MÉTODO DE COLLATZ
        while (numero !== 1) {
            // AÑADO EL NÚMERO ACTUAL A LA SECUENCIA
            secuencia.push(numero);

            // SI EL NÚMERO ES PAR, LO DIVIDO ENTRE 2
            if (numero % 2 === 0) {
                numero = numero / 2;
            } else {
                // SI ES IMPAR, LO MULTIPLICO POR 3 Y LE SUMO 1
                numero = numero * 3 + 1;
            }
        }
        // AÑADO EL NÚMERO 1 AL FINAL DE LA SECUENCIA
        secuencia.push(1);

        // ACTUALIZO EL ESTADO CON LA SECUENCIA GENERADA
        this.setState({
            resultados: secuencia
        });
    }

    render() {
        return (
            <div>
                <h1>Conjetura de Collatz</h1>
                <form onSubmit={this.metodoCollatz}>
                    <label>Inserte un número: </label>
                    {/* AQUI INSERTO UN CAMPO DE TEXTO PARA QUE EL USUARIO INGRESE UN NÚMERO */}
                    <input type="text" ref={this.cajaNumero}></input> <br />
                    <button>Aplicar método</button>
                </form>

                {/* SI LA SECUENCIA TIENE VALORES, MUESTRO LOS RESULTADOS EN UNA LÍNEA */}
                {
                    this.state.resultados.length > 0 && (
                        <div>
                            <h2>Secuencia de Collatz:</h2>
                            {/* UTILIZO MAP PARA MOSTRAR LOS NÚMEROS EN UNA LÍNEA SEPARADOS POR COMAS */}
                            <p>
                                {this.state.resultados.map((num, index) => (
                                    // SI NO ES EL ÚLTIMO NÚMERO, LE AÑADO UNA COMA
                                    <span key={index}>
                                        {num}{index !== this.state.resultados.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </p>
                        </div>
                    )
                }
            </div>
        );
    }
}
