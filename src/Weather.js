import React, { useState } from "react";
import Weather from "./Weather";
import "./Weather.css";
import axios from "axios";

export default function SearchWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "242999345d2e2boftacbfd08fd72e7b3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(geoPosition);
  }

  function geoPosition(position) {
    const apiKey = "242999345d2e2boftacbfd08fd72e7b3";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleLink(event) {
    event.preventDefault();
    setCity(event.target.innerText);
    search(event.target.innerText);
  }
  if (weatherData.ready) {
    return (
      <div>
        <ul class="menu">
          <li class="city">
            <a href="/" class="nav-link" onClick={handleLink}>
              Berlin
            </a>
          </li>
          <li class="city">
            <a href="/" class="nav-link" onClick={handleLink}>
              London
            </a>
          </li>
          <li class="city">
            <a href="/" class="nav-link" onClick={handleLink}>
              Abuja
            </a>
          </li>
          <li class="city">
            <a href="/" class="nav-link" onClick={handleLink}>
              Toronto
            </a>
          </li>
        </ul>
        ;
        <div className="search-form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="search"
                    className="search-control"
                    placeholder="Choose your location"
                    id="enterCity"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
              </div>
              <div className="col-md-4 offset-2">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Search"
                />
                <input
                  type="button"
                  className="btn btn-transparent"
                  value="Current"
                  onClick={getCurrentLocation}
                />
              </div>
            </div>
          </form>
          <Weather data={weatherData} />
        </div>
      </div>
    );
  } else {
    search(props.defaultCity);
    return "Loading...";
  }
}
