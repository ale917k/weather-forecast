/**
 * Simple util for checking if var is obj; If so, return string of it.
 * @param {unknown} obj - Expected object to stringify, but handles any input.
 * @return {string | boolean} - Stringified var if obj, false if not.
 */
const objToString = (obj: unknown): string | boolean => {
  if (Object.prototype.toString.call(obj) === "[object Object]") {
    return JSON.stringify(obj);
  }
  return false;
};

/**
 * Retrieve current weather on a specified  city.
 * @param {City} city - City to retrieve the weather for.
 * @returns {CurrentWeatherData} Object with current weather on specified location.
 */
export const retrieveCurrentWeather = async (city: City): Promise<CurrentWeatherData> => {
  const data = await fetch(
    `https://api.weatherbit.io/v2.0/current?key=${process.env.REACT_APP_WEATHERBIT_API_KEY}&city=${city}`,
    {
      method: "get",
      headers: { "Content-Type": "application/json" },
    },
  );

  try {
    const retrievedData = await data.json();

    if (!retrievedData?.error && retrievedData?.data?.[0]) {
      const date = new Date(retrievedData.data?.[0].ts * 1000).toLocaleDateString("en-GB");

      return {
        ...retrievedData?.data?.[0],
        date,
      } as CurrentWeatherData;
    }

    const printErr = objToString(retrievedData) || retrievedData;
    throw new Error(`Error retrieving current weather data. Ref: ${printErr}`);
  } catch (err) {
    const printErr = objToString(err) || err;
    throw new Error(`Error retrieving current weather data. Ref: ${printErr}`);
  }
};

/**
 * Retrieve list of extended 16-day weather for list of cities.
 * @param {City[]} cities - Array of cities to retrieve the weather for.
 * @returns {LocationsExtWeather} Object with weathers for all specified locations.
 */
export const retrieveAllExtWeathers = async (cities: City[]): Promise<LocationsExtWeather> => {
  const services = cities?.map((city) =>
    fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.REACT_APP_WEATHERBIT_API_KEY}&city=${city}`,
    ).then((res) => res.json()),
  );

  let extWeathers = <LocationsExtWeather>{};

  await Promise.all(services)
    .then((data) => {
      data.forEach((location) => {
        extWeathers = {
          ...extWeathers,
          [location.city_name]: location.data,
        };
      });
    })
    .catch((err) => {
      const printErr = objToString(err) || err;
      throw new Error(`Error retrieving extended 16-day weather data. Ref: ${printErr}`);
    });

  return extWeathers as LocationsExtWeather;
};
