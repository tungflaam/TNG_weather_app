const inputCity = document.querySelector('form');
const card = document.querySelector('.card');
const info = document.querySelector('.info');
const time = document.querySelector('.details img');
const icon = document.querySelector('.icon img');



const updatedInfo = (data) => {
    console.log(data);
    const cityInfo = data.cityInfo;
    const weather = data.weather;

    info.innerHTML = `
    <h4 class="text-uppercase text-center">${cityInfo.EnglishName}</h4>
    <span class="text-uppercase text-center">${weather.WeatherText}</span>
    <span class="text-uppercase text-center">${weather.Temperature.Metric.Value} &deg; C</span>                    
    `;

const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src',iconSrc);

let timeSrc = null;
if(weather.IsDayTime){
    timeSrc = 'img/day.svg';
} else {
    timeSrc = 'img/night.svg';
}
time.setAttribute('src',timeSrc);
};

const newCity = async (city) => {
    
    const cityInfo = await cityCode (city);
    const weather = await weatherInfo (cityInfo.Key);

    return {cityInfo , weather};
};

inputCity.addEventListener('submit', e => {

    e.preventDefault();

    const city = inputCity.city.value.trim();
    inputCity.reset();

    newCity(city)
        .then(data => updatedInfo(data))
        .catch(err => updatedInfo(err))
});

