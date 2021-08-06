import React, { useEffect, useState } from 'react'
import Imagenes from './Imagenes'
const API_KEY = '17445569-8153355b5d97e54516f976e80'

function Buscador(){
    const [valorBusquedad, setValorBusquedad] = useState('')
    const [datos, setDatos] = useState([])

    const getImages = () => {
        fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${valorBusquedad}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDatos(data.hits)
            })
    }


    const onSubmit = (e) => {
        e.preventDefault()
        getImages()
    }

    useEffect(() => {
        getImages()
    },[])

    return (
        <div>
             <form className="formSearch" onSubmit={onSubmit}>
                    <input 
                        type="text"
                        className="form-control"
                        name="buscador" 
                        placeholder="Buscar" 
                        onChange={(e)=>setValorBusquedad(e.target.value) } 
                        value={valorBusquedad}
                    />
                    <input type="submit" value="buscar" className="btn btn-search"/>
                </form>
                <Imagenes
                imagenes={datos}
                /> 
        </div>
    )
}

export default Buscador
