import React from "react"
import { useImages } from "../hooks/useImages"

export default function Header(){
    const {get, searchValue, setPage, setSearchValue } = useImages()

    const onSubmit = (e) => {
        setPage(1)
        e.preventDefault()
        get(searchValue)
    }


    return (
        <header className="header">
        <div className="header__content">
        <form className="header__formSearch" onSubmit={onSubmit}>
            <input
                type="text"
                className="form-control"
                name="buscador"
                placeholder="Buscar"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
            />
            <input type="submit" value="buscar" className="btn btn-search" />
        </form>
        </div>
    </header>
    )
}