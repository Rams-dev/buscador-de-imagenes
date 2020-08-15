import React, { Component } from 'react'

export default class Imagen extends Component {
    
    render() {
    const {id,tags,likes,previewURL} = this.props.datosImagen

        return (
            <div>
                {id}
                
            </div>
        )
    }
}
