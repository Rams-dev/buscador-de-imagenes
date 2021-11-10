import React from 'react'
import Imagen from './Imagen'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useImages } from '../hooks/useImages'



function Imagenes({ images }) {
    const {getMore, page} = useImages()

    return (
            <InfiniteScroll className="grid-images" dataLength={images.length} hasMore={true} next={() => getMore(page)} >
                {
                    images.map((image, index) => (
                        <Imagen
                            key={index}
                            image={image}
                        />
                    ))
                }
            </InfiniteScroll>
    )
}

export default Imagenes
