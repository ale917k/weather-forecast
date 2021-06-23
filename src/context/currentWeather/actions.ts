import CurrentWeatherTypes from "./types";

type CurrentWeatherPayload = {
  [CurrentWeatherTypes.Add]: Record<City, CurrentWeatherData>;
};

type CurrentWeatherActions = ActionMap<CurrentWeatherPayload>[keyof ActionMap<CurrentWeatherPayload>];

export default CurrentWeatherActions;
