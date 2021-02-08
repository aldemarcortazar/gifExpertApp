import React from'react'
import useFetchGifs from './../hooks/useFetchGifs.js';
import GifGridItem from'./GifGridItem';
// import getGifs from'./../helpers/getGifs.js';
const GifGrid = ({ category }) =>{

    const { data:images , loading } =  useFetchGifs( category );

    return (
        <>
            <h3> {category} </h3>
            {loading && 'cargando....'}
            <div className="card-grid animate__animated animate__bounceIn">
                {
                    images.map( img =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </>
    );
};

export default GifGrid;