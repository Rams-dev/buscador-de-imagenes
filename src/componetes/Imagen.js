import React from 'react'

function Imagen(props){
    
    const {id,tags,likes,previewURL, views, downloads} = props

        return (
            <div className="card" key={id}>
                <img src={previewURL} alt={tags} className="img"/>
                <div className="overlay">
                    <div className="content">
                        <p className="likes"><i class="far fa-thumbs-up"></i> {likes}</p>
                        <p className="likes"><i class="far fa-eye"></i> {views}</p>
                        <p className="likes"><i class="fas fa-download"></i> {downloads}</p>
                    </div>
                </div>
            </div>
        )
}

export default Imagen