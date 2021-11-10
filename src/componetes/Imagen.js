import React from 'react'

function Imagen({image}){
    const {likes, views, downloads, tags, pageURL,largeImageURL, webformatURL} = image

        return (
            <a href={pageURL} target="_blank" className="card">
                <img src={largeImageURL} alt={tags} className="img"/>
                <div className="overlay">
                    <div className="card__content">
                        <p className="likes"><i className="far fa-thumbs-up"></i> {likes}</p>
                        <p className="likes"><i className="far fa-eye"></i> {views}</p>
                        <p className="likes"><i className="fas fa-download"></i> {downloads}</p>
                    </div>
                </div>
            </a>
        )
}

export default Imagen