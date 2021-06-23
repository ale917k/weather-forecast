import React, { Dispatch, SetStateAction } from "react";
import cities from "data/cities.json";
import { Wrapper, Button } from "./styles";

type Props = {
  activeCity: City;
  setActiveCity: Dispatch<SetStateAction<City>>;
};

/**
 * Group of buttons displaying list of selectable cities for displaying related weather data.
 * @param {City} activeCity - Selected / active city.
 * @param {function} setActiveCity - Hook function for updating active city.
 * @returns List of selectable cities.
 */
const ButtonGroup: React.FC<Props> = ({ activeCity, setActiveCity }: Props) => {
  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const { name } = e?.target as HTMLButtonElement;

    setActiveCity(name as City);
  };

  return (
    <Wrapper>
      {cities?.map((city, index) => (
        <Button key={`${city}-${index}`} name={city} onClick={handleClick} active={city === activeCity}>
          {city}
        </Button>
      ))}
    </Wrapper>
  );
};

export default ButtonGroup;
