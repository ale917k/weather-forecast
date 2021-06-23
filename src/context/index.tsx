import React, { createContext, useReducer, Dispatch } from "react";
import CurrentWeatherActions from "./currentWeather/actions";
import currentWeatherReducer from "./currentWeather/reducer";
import ExtWeatherActions from "./extWeather/actions";
import extWeatherReducer from "./extWeather/reducer";

type InitialState = {
  currentWeather: LocationsCurrentWeather | null;
  extWeather: LocationsExtWeather | null;
};

type Actions = CurrentWeatherActions | ExtWeatherActions;

// Context Initial State
const initialState = {
  currentWeather: null,
  extWeather: null,
};

// AppContext to consume on components
const AppContext = createContext<{
  currentWeather: LocationsCurrentWeather | null;
  extWeather: LocationsExtWeather | null;
  dispatch: Dispatch<Actions>;
}>({
  currentWeather: initialState.currentWeather,
  extWeather: initialState.extWeather,
  dispatch: () => null,
});

// Main Context reducer
const mainReducer = ({ currentWeather, extWeather }: InitialState, action: Actions) => ({
  currentWeather: currentWeatherReducer(currentWeather, action as CurrentWeatherActions),
  extWeather: extWeatherReducer(extWeather, action as ExtWeatherActions),
});

// Context Provider
const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
