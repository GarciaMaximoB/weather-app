import "./CurrentWeather.css";
import capitalizarPrimeraLetra from "../../capitalizar";

export default function CurrentWeather({data}) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{capitalizarPrimeraLetra(data.weather[0].description)}</p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="Clima" className="weather-icon" />
      </div>

      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Detalles</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">ST</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Viento</span>
            <span className="parameter-value">{data.wind.speed}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humedad </span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Presion</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
