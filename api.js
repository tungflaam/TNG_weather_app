const  key  = 'md8HZIQeVIwkTkQHArT39YQ9mdfLRKC4';


const cityCode = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data= await response.json();

    return data[0];
}

const weatherInfo = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const  response = await  fetch(base + query);
    const data = await response.json();

    return data[0];
}



