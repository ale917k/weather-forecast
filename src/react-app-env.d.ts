/// <reference types="react-scripts" />

// List of cities to retrieve the weather for
type City = "City of London" | "New York" | "Mumbai" | "Sydney" | "Tokyo";

// Shape of current weather data
type CurrentWeatherData = {
  app_temp: number;
  aqi: number;
  city_name: string;
  clouds: number;
  country_code: string;
  datetime: string;
  dewpt: number;
  dhi: number;
  dni: number;
  elev_angle: number;
  ghi: number;
  h_angle: number;
  lat: number;
  lon: number;
  ob_time: string;
  pod: string;
  precip: number;
  pres: number;
  rh: number;
  slp: number;
  snow: number;
  solar_rad: number;
  state_code: string;
  station: string;
  sunrise: string;
  sunset: string;
  temp: number;
  timezone: string;
  ts: number;
  uv: number;
  vis: number;
  weather: {
    icon: string;
    code: number;
    description: string;
  };
  wind_cdir: string;
  wind_cdir_full: string;
  wind_dir: number;
  wind_spd: number;
} & {
  date: Date;
};

// Shape of extended 16-day weather data
type ExtWeatherData = {
  app_max_temp: number;
  app_min_temp: number;
  clouds: number;
  clouds_hi: number;
  clouds_low: number;
  clouds_mid: number;
  datetime: string;
  dewpt: number;
  high_temp: number;
  low_temp: number;
  max_dhi: null;
  max_temp: number;
  min_temp: number;
  moon_phase: number;
  moon_phase_lunation: number;
  moonrise_ts: number;
  moonset_ts: number;
  ozone: number;
  pop: number;
  precip: number;
  pres: number;
  rh: number;
  slp: number;
  snow: number;
  snow_depth: number;
  sunrise_ts: number;
  sunset_ts: number;
  temp: number;
  ts: number;
  uv: number;
  valid_date: string;
  vis: number;
  weather: {
    icon: string;
    code: number;
    description: string;
  };
  wind_cdir: string;
  wind_cdir_full: string;
  wind_dir: number;
  wind_gust_spd: number;
  wind_spd: number;
};

// Object with current weather for multiple locations
type LocationsCurrentWeather = Record<City, CurrentWeatherData>;

// Object with extended 16-day weather for multiple locations
type LocationsExtWeather = Record<City, ExtWeatherData[]>;
