import React, { Dispatch, SetStateAction } from "react";
import Card from "components/Card";
import { SearchGroup, SearchTitle, FilterInput, ResetButton } from "./styles";

type Props = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
};

/**
 * Card with inputs for filtering weather data using min and max temperatures.
 * @param {Filters} filters - Min and Max temperature filters for weather data.
 * @returns Card with inputs and reset button.
 */
const SearchCard: React.FC<Props> = ({ filters, setFilters }: Props) => {
  // Handles controlled inputs on change
  const handleFiltersChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Reset filters
  const resetFilters = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setFilters({
      minTemp: undefined,
      maxTemp: undefined,
    });
  };

  return (
    <Card>
      <SearchTitle>Filter by:</SearchTitle>

      <SearchGroup>
        <FilterInput
          type="number"
          id="min_temp"
          label="Min Temp"
          name="minTemp"
          value={filters.minTemp || ""}
          min="-90"
          max="60"
          onChange={handleFiltersChange}
        />
        <FilterInput
          type="number"
          id="max_temp"
          label="Max Temp"
          name="maxTemp"
          value={filters.maxTemp || ""}
          min="-90"
          max="60"
          onChange={handleFiltersChange}
        />
      </SearchGroup>

      {(filters.minTemp || filters.maxTemp) && (
        <ResetButton type="button" onClick={resetFilters}>
          Reset
        </ResetButton>
      )}
    </Card>
  );
};

export default SearchCard;
