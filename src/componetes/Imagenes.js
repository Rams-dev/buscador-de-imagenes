import React from 'react'
import Imagen from './Imagen'

function Imagenes(props) {
    const {imagenes} = props
    return (
        <div className="grid-images">
        {
            imagenes.map(imagen => (
                <Imagen
                    id={imagen.id}
                    tags={imagen.tags}
                    likes={imagen.likes}
                    previewURL={imagen.previewURL}
                    downloads={imagen.downloads}
                    views={imagen.views}
                />
            ))
        }
        
        </div>
    )
}

export default Imagenes
