import React, { useState } from 'react';
import ReactDom from 'react-dom';
import AddCategory from './components/AddCategory.js';
import GifGrid from'./components/GifGrid';

const GifExpertApp = () =>{
    const [categories , setCategories] = useState(['goku']);

    
    return(
        <>
            <h2>GifExpert</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category =>
                        <GifGrid
                            key={category}
                            category={category} 
                        />
                    )
                }
            </ol>
        </>
    );
};



export default GifExpertApp;