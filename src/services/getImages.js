import {ImagesEndPoint} from './constants'

export function getImages(SearchValue, page){
    return fetch(`${ImagesEndPoint}&q=${SearchValue}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                return data.hits
            })
}