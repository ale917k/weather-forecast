import React, { useContext, useEffect, useState } from "react";
import { retrieveAllExtWeathers } from "api";
import { AppContext } from "context";
import ExtWeatherTypes from "context/extWeather/types";
import cities from "data/cities.json";
import Spinner from "components/Spinner";
import SearchCard from "./SearchCard";
import { ErrorMessage, Wrapper } from "./styles";
import GridTable from "./GridTable";

/**
 * Displays extended 16-day weather data for all specified cities.
 * @returns Extended 16-day weather page with filterable weathers for multiple locations.
 */
const ExtendedWeather: React.FC = () => {
  const { extWeather, dispatch } = useContext(AppContext);

  // Weather data filters
  const [filters, setFilters] = useState<Filters>({
    minTemp: undefined,
    maxTemp: undefined,
  });

  // Error message to handle server errors
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Retrieve extended 16-day weathers for all specified cities
  useEffect(() => {
    retrieveAllExtWeathers(cities as City[])
      .then((data) => {
        dispatch({
          type: ExtWeatherTypes.Set,
          payload: data,
        });
      })
      .catch((err) => {
        setErrorMessage("Aw snap, something went wrong. Please try again later.");
        console.warn(err);
      });
  }, []);

  /**
   * Filter data with min / max temp, if specified.
   * @param {ExtWeatherData[]} locData - Weathers data to filter by min / max temperatures.
   * @returns Filtered weather data.
   */
  const filterData = (locData: ExtWeatherData[]): ExtWeatherData[] =>
    locData?.filter((data) => {
      if ((filters.minTemp || "")?.toString() && (filters.maxTemp || "")?.toString()) {
        return data.min_temp <= Number(filters.minTemp) && data.max_temp >= Number(filters.maxTemp);
      }
      if ((filters.minTemp || "")?.toString()) {
        return data.min_temp <= Number(filters.minTemp);
      }
      if ((filters.maxTemp || "")?.toString()) {
        return data.max_temp >= Number(filters.maxTemp);
      }
      return true;
    });

  return (
    <>
      {errorMessage ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : (
        <>
          {extWeather ? (
            <Wrapper>
              <SearchCard filters={filters} setFilters={setFilters} />

              {Object.entries(extWeather).map((locationData, index) =>
                filterData(locationData[1])?.length ? (
                  <GridTable
                    key={`${locationData[0]}-${index}`}
                    filterData={filterData}
                    title={locationData[0] as City}
                    data={locationData[1]}
                  />
                ) : null,
              )}
            </Wrapper>
          ) : (
            <Spinner />
          )}
        </>
      )}
    </>
  );
};

export default ExtendedWeather;
