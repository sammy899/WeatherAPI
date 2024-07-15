document.querySelector('#weatherForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = document.querySelector('#city').value;
    const apiKey = 'YOUR_API_KEY'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.querySelector('#cityName').textContent = data.name;
            document.querySelector('#temperature').textContent = data.main.temp;
            document.querySelector('#description').textContent = data.weather[0].description;
            document.querySelector('#humidity').textContent = data.main.humidity;
            document.querySelector('#windSpeed').textContent = data.wind.speed;

            document.querySelector('#weatherResult').classList.remove('hidden');
        } else {
            alert('City not found');
        }
    } catch (error) {
        alert('Error fetching weather data');
    }

    document.querySelector('#city').value = '';
});