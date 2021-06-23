# Weather Forecast

Weather Forecast is a React app for displaying current and 16-day extended weather data.

[Open Live Project](https://ale917k.github.io/weather-forecast/)

## What It Uses:

- React (w/Hooks & ContextAPI)
- Typescript
- Styled Components

## Installation

Make sure to have [git](https://git-scm.com/downloads) installed, then run:

```bash
git clone https://github.com/ale917k/weather-forecast
cd ./weather-forecast
```

Add an `.env` file which looks as per `.env.example`:

```
REACT_APP_WEATHERBIT_API_KEY=<api-key> # You can grab a free Weatherbit API key after registering here: (https://www.weatherbit.io/)
```

You can then run `npm start` to start the project.

## Production

This project has been set up with a production environment ready for deployment on Github Pages.

To deploy your own version:

1. Fork project
2. Run `npm run deploy` to publish the project on github
3. Go to {your-GitHub-code-repository} -> Settings -> GitHub pages section and setup source to the gh-pages branch
4. Set your environment variables by going to {your-GitHub-code-repository} -> Settings -> Environments -> github-pages --> Under Environment secrets, add new secrets
5. Enjoy your new live project!

## License

[MIT](https://choosealicense.com/licenses/mit/)
