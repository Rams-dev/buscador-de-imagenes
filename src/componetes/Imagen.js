import React from 'react'

function Imagen({image}){
    const {likes, views, downloads, tags, webformatURL} = image

        return (
            <div className="card">
                <img src={webformatURL} alt={tags} className="img"/>
                <div className="overlay">
                    <div className="card__content">
                        <p className="likes"><i className="far fa-thumbs-up"></i> {likes}</p>
                        <p className="likes"><i className="far fa-eye"></i> {views}</p>
                        <p className="likes"><i className="fas fa-download"></i> {downloads}</p>
                    </div>
                </div>
            </div>
        )
}

export default Imagen