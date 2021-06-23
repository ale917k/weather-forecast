import ExtWeatherActions from "./actions";
import ExtWeatherTypes from "./types";

const extWeatherReducer = (
  state: LocationsExtWeather | null,
  action: ExtWeatherActions,
): LocationsExtWeather | null => {
  switch (action.type) {
    case ExtWeatherTypes.Set:
      return action.payload;
    default:
      return state;
  }
};

export default extWeatherReducer;
