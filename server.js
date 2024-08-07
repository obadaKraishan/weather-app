const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = '65cba39075d0db7bf26e9fbb32baefdc';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
