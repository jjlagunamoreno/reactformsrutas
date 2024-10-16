import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    selectMultiple = React.createRef();

    state = {
        seleccionados: ""
    }

    mostrarMultiples = (e) => {
        e.preventDefault();
        //DENTRO DE UN SELECT MULTIPLE TENEMOS UN ARRAY CON TODAS LAS OPTIONS
        let options = this.selectMultiple.current.options;
        let datos = "";
        //CADA OBJETO OPTION DENTRO DEL ARRAY CONTIENE UN ATRIBUTO PARA
        // SANER SI ESTÁ SELECCIONADO: selected, value, text
        for (var option of options) {
            if (option.selected == true) {
                datos += option.value;
            }
        }
        //modificamos el state del render ()
        this.setState({
            seleccionados: datos
        })
    }

    render() {
        return (
            <div>
                <h1>Seleccion Múltiple Forms</h1>

                <h2 style={{ color: "red" }}>{this.state.seleccionados}</h2>

                <form onSubmit={this.mostrarMultiples}>
                    <select size="10" multiple ref={this.selectMultiple}>
                        <option>Elemento 1</option>
                        <option>Elemento 2</option>
                        <option>Elemento 3</option>
                        <option>Elemento 4</option>
                        <option>Elemento 5</option>
                        <option>Elemento 6</option>
                        <option>Elemento 7</option>
                        <option>Elemento 8</option>
                    </select>
                    <button>Mostrar Seleccionados</button>
                </form>
            </div>
        )
    }
}
