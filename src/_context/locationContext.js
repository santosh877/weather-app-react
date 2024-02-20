import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const LocationContext = createContext();

const LocationContextProvider = (props) => {

  const [location, setLocation] = useState("");
  const setCurrentLocation = (location) => {
    setLocation({ position: location })
  };

  useEffect(() => {
    fetch('http://ip-api.com/json', 
    { method: "GET", 
    mode: 'cors', 
    headers: { 'Content-Type': 'application/json',}})
    .then(response => response.json())
    .then(function (res) {
      if(res.status === "success"){
        const { city, country, lat, lon } = res;
      setLocation({ position: { city, country, lat, lon } })
    }
  })
  .catch(function (error) {
    console.log(error);
  })

  }, []);

  return (
    <LocationContext.Provider
      value={{ location, setCurrentLocation }}>
      {props.children}
    </LocationContext.Provider>
  );
}
export default LocationContextProvider;