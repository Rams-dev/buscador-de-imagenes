import React, { useState, createContext } from 'react'

const Context = createContext({})

export function ImagesContextProvider({children}){
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [searchValue, setSearchValue] = useState('bienvenida')    
    
    return <Context.Provider value={{
                images,
                isLoading,
                page,
                searchValue,
                setImages,
                setIsLoading,
                setPage,
                setSearchValue
            }}
    >
        {children}
    </Context.Provider>

}

export default Context;
