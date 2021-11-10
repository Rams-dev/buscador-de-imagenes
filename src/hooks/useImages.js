import {useContext} from 'react'
import {getImages} from '../services/getImages'
import ImagesContext from '../context/ImagesContext'

export function useImages() {
    const {
        images,
        isLoading,
        page,
        searchValue,
        setImages,
        setIsLoading,
        setPage,
        setSearchValue
     } = useContext(ImagesContext)


    const get = () => {
        setIsLoading(true)
        getImages(searchValue, 1)
            .then(res => setImages(res))
            .finally(final => {
                setIsLoading(false)
                // setPage(page+1)
            })
    }

    const getMore = () => {
        getImages(searchValue, page)
        .then(data => {
                setImages([...images, ...data])
            })
        setPage(page + 1)
    }

    return{
        
        isLoading,
        images,
        get,
        page,
        searchValue,
        setPage,
        setSearchValue,
        getMore
    }

}