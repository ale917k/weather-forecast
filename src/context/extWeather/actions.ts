import ExtWeatherTypes from "./types";

type ExtWeatherPayload = {
  [ExtWeatherTypes.Set]: LocationsExtWeather;
};

type ExtWeatherActions = ActionMap<ExtWeatherPayload>[keyof ActionMap<ExtWeatherPayload>];

export default ExtWeatherActions;
