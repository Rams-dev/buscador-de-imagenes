import React, { Component } from 'react'
import Imagen from './Imagen'

export default class Imagenes extends Component {
    imagenes = () =>{
        const imagenes = this.props.imagenes
        {
            imagenes.map(imagen =>(
          
        ))
        }


        // console.log(this.props.imagenes)
    }
    render() {
        return (
            <div>
                {this.imagenes()}                
            </div>
        )
    }
}
