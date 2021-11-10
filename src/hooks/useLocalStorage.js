import {useEffect, useState} from 'react'

export function useLocalStorage(){
    let keyStorage = "lastSearch"
    const [ lastSearch, setLastSearch ]  = useState([])
    
    useEffect(() => {
        setState()
    },[])   

    const setState = () => {
        setLastSearch(JSON.parse(getItem()))
    }

    const getItem = () => {
        return localStorage.getItem(keyStorage)
    }

    const deleteItem = (key) => {
        localStorage.deleteItem(key)
        setState()
    }

    const saveItem = (search) => {
        let arrSearch = []
        let lastItem = getItem() ? JSON.parse(getItem()) : []

        if(lastItem){
            arrSearch.push(search)
            setState()
        }else{
            arrSearch.push(search)
        }
        localStorage.setItem(keyStorage, JSON.stringify([...arrSearch,...lastItem]))
    }


    return {
        getItem,
        deleteItem,
        saveItem,
        lastSearch
    }
}