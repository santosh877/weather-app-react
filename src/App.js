import React from "react";
import "./App.css";
import LocationContextProvider from "./_context/locationContext";
import CurrentWeatherContextProvider from "./_context/currentWeatherContext";
import { Typography } from "@material-ui/core";
import AppContainer from "./container/appContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Typography variant='h4'>Weather App
       
        </Typography>
        <LocationContextProvider>
          <CurrentWeatherContextProvider>
            <AppContainer />
          </CurrentWeatherContextProvider>
        </LocationContextProvider>
      </div>
    );
  }
}

export default App;

