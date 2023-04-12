//API key generated by AccuWeather
const  key  = 'md8HZIQeVIwkTkQHArT39YQ9mdfLRKC4';

//*1st request
//send 1st request to location API to get the city code 
const cityCode = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    //adding query parameter apiKey & q are two required parameters
    //https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search 
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data= await response.json();

    return data[0];
}

//*2nd request
// using the city code from 1st request to make 2nd request
// send city code to current conditions API to get the info of the city
//https://developer.accuweather.com/accuweather-current-conditions-api/apis/get/currentconditions/v1/%7BlocationKey%7D
const weatherInfo = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    //pass city code as id and query parameter api
    const query = `${id}?apikey=${key}`;

    const  response = await  fetch(base + query);
    const data = await response.json();

    return data[0];
}



