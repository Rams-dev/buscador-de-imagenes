import React, { useEffect } from 'react'
import Imagenes from './Imagenes'
import { useImages } from '../hooks/useImages'
// import { useLocalStorage } from '../hooks/useLocalStorage'
import Page401 from './Page401'
import Loader from './Loader'
import Header from './Header'


function Buscador() {
    const { images, get, isLoading } = useImages()
    // const {saveItem, lastSearch} = useLocalStorage()
    
    useEffect(() => {
        get()
    },[])

    if(isLoading){
        return(
            <Loader/>
        )
    }

    return (
        <div>
            <Header/>
            {
                images.length === 0 ? <Page401/> : (
                    <Imagenes
                        images={images}
                    />
                )
            }
        </div>
    )
}

export default Buscador
