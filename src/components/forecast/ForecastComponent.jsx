import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

import "./Forecast.css"
import capitalizarPrimeraLetra from "../../capitalizar";

const WEEK_DAYS = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

export default function Forecast({ data }) {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">{capitalizarPrimeraLetra(item.weather[0].description)}</label>
                  <label className="min-max">{Math.round(item.main.temp_min)}°C</label>


                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Presion</label>
                  <label>{item.main.pressure} hPa</label>    
                </div> 
                <div className="daily-details-grid-item">
                  <label>Humedad</label>
                  <label>{item.main.humidity}%</label>    
                </div> 
                <div className="daily-details-grid-item">
                  <label>Nubes</label>
                  <label>{item.clouds.all}%</label>    
                </div> 
                <div className="daily-details-grid-item">
                  <label>Viento</label>
                  <label>{item.wind.speed} m/s </label>    
                </div> 
                <div className="daily-details-grid-item">
                  <label>Nivel del mar</label>
                  <label>{item.main.sea_level} mts</label>    
                </div> 
                <div className="daily-details-grid-item">
                  <label>ST</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>    
                </div> 
              </div>
              
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
