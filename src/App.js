import logo from './logo.svg';
import './App.css';
import { useActionState, useEffect, useState } from 'react';

function App() {
  const [city,setCity]=useState("Vijayawada");
  const [weatherData,setWeatherData]=useState(null);

  const API_KEY="ac31b1088c040273df8b8ee5612cf127";
  const fetchWeatherData=async () =>{
    try{
      const response=await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

      );
      const data=await response.json();
      console.log(data);
      setWeatherData(data);

    }
    catch(error){
      console.log(error);
    };
    
  }
  useEffect(()=>{
    fetchWeatherData();
  },[])
  const handleInputChange=(event)=>{
    console.log(event.target.value);
    setCity(event.target.value);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    fetchWeatherData();
  }
  const getWeatherIconUrl=(main)=>{
    switch(main){
      case "Clouds":
        return "/thunder.webp";
      case "Rain":
        return "/rain_with_cloud.webp";
      case "Mist":
        return "/Tornado.webp";
      case "Clear":
        return "/sun.webp";
      default:
        return null;
    }
  };
  const currentDate=new Date();
  const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const month=months[currentDate.getMonth()];
  const day=currentDate.getDate();
  const year=currentDate.getFullYear();

  const formattedDate=`${month} ${day}, ${year}`




  return (
    <div className="App">
      <div className="container">
        {weatherData && (
          <>
          <h1 className="container_date">{formattedDate}</h1>
          <div className="weather_data"> 
            <h2 className="container_city">{weatherData.name}</h2>
            <img
              className='container_img'
              src={getWeatherIconUrl(weatherData.weather[0].main)}
              width="180px"
              alt="Weather Icon"
            />


      
            <h2 className="container_degree">{Math.round(weatherData.main.temp-273.15)}</h2>
            <h2 className="country_per">{weatherData.weather[0].main}</h2>
            <form className="form" onSubmit={handleSubmit}>
              <input type="text" className="input" placeholder='Enter city name'onChange={handleInputChange}/>
              <button type="submit" >Get</button>
            </form>
          </div>
          </>
        )}
        
      </div>
    </div>
  );
}

export default App;
