import React, { Component } from 'react'
import Imagenes from './Imagenes'
const API_KEY = '17445569-8153355b5d97e54516f976e80'

export default class Buscador extends Component {
    state={
        valorBusquedad:"",
        datos: []
    }

    inputValue = (e) =>{
        e.preventDefault();
        this.setState({
            valorBusquedad: e.target.value
        })
        // console.log(e.target.value)
        // console.log(this.state.valorBusquedad)
    }

    onSubmit = (e) =>{
        e.preventDefault();
        fetch(`https://pixabay.com/api/?key=${API_KEY}&s=${this.state.valorBusquedad}`)
        .then(res => res.json())
        .then(data => 
            this.setState({
                datos: data.hits
            })
        )
    }
    

    render() {
        return (
            <div>
                <form className="formSearch" onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        name="buscador" 
                        placeholder="Buscar" 
                        onChange={this.inputValue} 
                        value={this.state.valorBusquedad}
                    />
                    <input type="submit" value="buscar"/>
                </form>
                <Imagenes
                imagenes = {this.state.datos}
                />
                {/* {this.state.datos.map(dato =>(
                    <p>{dato.id}</p>
                ))}                 */}
            </div>
        )
    }
}
