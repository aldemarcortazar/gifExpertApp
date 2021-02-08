

const getGifs = async ( category)=>{
     console.log("estoy en gef gif y la categoria es" + category);
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=u6bmJrh5mAPwTXFEUXo6lHHkPq53z0K4`;
        console.log(url);
        const resp = await fetch( url );
        const {data} = await resp.json(); 
        
        const gifs = data.map( img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        return gifs;
}

export default getGifs;