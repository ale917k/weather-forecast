import React, { useState, useEffect, useContext } from "react";
import { retrieveCurrentWeather } from "api";
import { AppContext } from "context";
import CurrentWeatherTypes from "context/currentWeather/types";
import Spinner from "components/Spinner";
import Card from "components/Card";
import ButtonGroup from "./ButtonGroup";
import { Wrapper, Title, Coordinates, Coordinate, StyledDate, Temperature, Property } from "./styles";

/**
 * Displays current weather data on selected location.
 * @returns Current Weather page with selectable cities & related weather data.
 */
const CurrentWeather: React.FC = () => {
  // Stored weather data
  const { currentWeather, dispatch } = useContext(AppContext);

  // City to display the weather data for
  const [activeCity, setActiveCity] = useState<City>("City of London");

  // Error message to handle server errors
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Retrieve weather data on selected city if none exists
  useEffect(() => {
    let mounted = true;

    if (!currentWeather?.[activeCity]) {
      retrieveCurrentWeather(activeCity)
        .then((data) => {
          if (mounted) {
            dispatch({
              type: CurrentWeatherTypes.Add,
              payload: { [activeCity]: data } as LocationsCurrentWeather,
            });
          }
        })
        .catch((err) => {
          setErrorMessage("Aw snap, something went wrong. Please try again later.");
          console.warn(err);
        });
    }

    return () => {
      mounted = false;
    };
  }, [activeCity]);

  /**
   * Returns air quality based on US - EPA standard 0 - +500.
   * @param aqi - Air quality expressed as number 0 - 500.
   * @returns Air quality value.
   */
  const checkAirQuality = (aqi: number): string => {
    if (aqi < 50) {
      return "Good";
    }
    if (aqi < 100) {
      return "Moderate";
    }
    if (aqi < 150) {
      return "Unhealthy for Sensitive Groups";
    }
    if (aqi < 200) {
      return "Unhealthy";
    }
    if (aqi < 300) {
      return "Very Unhealthy";
    }
    return "Hazardous";
  };

  const { lat, lon, date, temp, weather, app_temp, rh, wind_cdir, wind_spd, clouds, precip, vis, aqi } =
    currentWeather?.[activeCity] || {};

  return (
    <Wrapper>
      <Title>Choose a city to see what's the weather like today:</Title>

      <ButtonGroup activeCity={activeCity} setActiveCity={setActiveCity} />

      <Card>
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <>
            {currentWeather?.[activeCity] ? (
              <>
                <Coordinates>
                  <Coordinate>Lat: {lat}°</Coordinate>
                  <Coordinate>Lon: {lon}°</Coordinate>
                </Coordinates>

                <StyledDate>Today, {date}</StyledDate>

                <Temperature>{temp}°</Temperature>
                <img
                  src={`https://www.weatherbit.io/static/img/icons/${weather?.icon}.png`}
                  alt={weather?.description}
                />

                <Property>Feels like: {app_temp}°</Property>
                <Property>Humidity: {rh && Math.round(rh)}%</Property>
                <Property>
                  Wind: {wind_cdir} {wind_spd} m/s
                </Property>
                <Property>Clouds: {clouds}% </Property>
                <Property>Rain: {precip} mm/Hr </Property>
                <Property>Visibility: {vis} km </Property>
                <Property>
                  Air Quality: {aqi} ({aqi && checkAirQuality(aqi)})
                </Property>
              </>
            ) : (
              <Spinner />
            )}
          </>
        )}
      </Card>
    </Wrapper>
  );
};

export default CurrentWeather;
