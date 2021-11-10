import React from 'react'
import NoFound from '../assets/nofound.jpg'

export default function Page401(){
    return (
        <div className="content">
            <div className="content__img">
                <h2>No se encotraron coincidencias</h2>
                <img src={NoFound} alt="Pagina no encontrada"/>
            </div>
        </div>
    )
}