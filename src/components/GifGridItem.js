import React from'react';

const GifGridItem = ( {íd, title, url}) =>{

    return (
        <div className="animate__animated animate__bounceIn card">
            <img src={url} alt={title}/>
            <h3> {title} </h3>
        </div>
    );
}

export default GifGridItem;