import React, { Fragment } from "react";
import Card from "components/Card";
import { CardTitle, Grid, Heading, Content, Img } from "./styles";

type Props = {
  filterData: (locData: ExtWeatherData[]) => ExtWeatherData[];
  title: City;
  data: ExtWeatherData[];
};

const GridTable: React.FC<Props> = ({ filterData, title, data }: Props) => (
  <Card>
    <CardTitle>{title}</CardTitle>

    <Grid>
      <Heading>Date</Heading>
      <Heading>Weather</Heading>
      <Heading>Temp</Heading>
      <Heading>Min Temp</Heading>
      <Heading>Max Temp</Heading>

      {filterData(data)?.map(({ datetime, weather, temp, min_temp, max_temp }, index) => (
        <Fragment key={`${datetime}-${index}`}>
          <Content>{datetime}</Content>
          <Content>
            <Img src={`https://www.weatherbit.io/static/img/icons/${weather?.icon}.png`} alt={weather?.description} />
          </Content>
          <Content>{temp}°</Content>
          <Content>{min_temp}°</Content>
          <Content>{max_temp}°</Content>
        </Fragment>
      ))}
    </Grid>
  </Card>
);

export default GridTable;
