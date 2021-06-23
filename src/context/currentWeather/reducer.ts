import CurrentWeatherActions from "./actions";
import CurrentWeatherTypes from "./types";

const currentWeatherReducer = (
  state: LocationsCurrentWeather | null,
  action: CurrentWeatherActions,
): LocationsCurrentWeather | null => {
  switch (action.type) {
    case CurrentWeatherTypes.Add:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default currentWeatherReducer;
