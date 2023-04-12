const inputCity = document.querySelector('form');
const card = document.querySelector('.card');
const info = document.querySelector('.info');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');


inputCity.addEventListener('submit', e => {
    e.preventDefault();

    const city = inputCity.city.value.trim();
    inputCity.reset();

    newCity(city)
        .then(data => updateUI(data))
        .catch(err => updateUI(err))
});

const newCity = async (city) => {
    
    const cityInfo = await cityCode (city);
    const weather = await weatherInfo (cityInfo.Key);

    return {cityInfo , weather};
};

const updateUI = (data) => {    
    //Destrucure properties
    const {cityInfo, weather} = data;

    info.innerHTML = `
    <h4 class="text-uppercase text-center">${cityInfo.EnglishName}</h4>
    <span class="text-uppercase text-center">${weather.LocalObservationDateTime}</span>
    <span class="text-uppercase text-center">${weather.WeatherText}</span>
    <span class="text-uppercase text-center">${weather.Temperature.Metric.Value} &deg; C</span>                    
    `;
    
if (card.classList.contains('d-none')){
    card.classList.remove('d-none');
}

const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src',iconSrc);

let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
time.setAttribute('src',timeSrc);

};


