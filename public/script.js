document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
  
    fetch(`/weather?city=${city}`)
      .then(response => response.json())
      .then(data => {
        const weatherResult = document.getElementById('weatherResult');
        if (data.error) {
          weatherResult.innerHTML = `<p class="text-danger">${data.error}</p>`;
        } else {
          weatherResult.innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Humidity: ${data.main.humidity} %</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
          `;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        const weatherResult = document.getElementById('weatherResult');
        weatherResult.innerHTML = `<p class="text-danger">Error fetching weather data</p>`;
      });
  });
  