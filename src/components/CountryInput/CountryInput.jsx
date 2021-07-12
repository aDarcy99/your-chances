import React, { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { colors } from "@themerig/core";
//assets
import countriesData from "../../../public/countryData.json";
//context
import { useCurrentCountry } from "../../providers/CurrentCountryProvider";
//components
import { InputDropdown } from "../reusable/reusable";

const countries = countriesData.map((country) => ({
  label: country.name,
  ...country,
}));

const useStyles = createUseStyles({
  
});

const CountryInput = () => {
  const classes = useStyles()

  const { currentCountry, setCurrentCountry } = useCurrentCountry();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState(countries);

  const dropdownRef = useRef(null);

  //Input Event Handlers
  const handleInputChange = (Event) => {
    setSearchValue(Event.target.value);
  };
  const handleInputFocus = (Event) => {
    setIsOpen(true);
  };
  const handleDropdownBlur = (Event) => {
    if (!dropdownRef.current.contains(Event.relatedTarget)) {
      setIsOpen(false);
    }
  };
  //Item Event Handlers
  const handleItemClick = (OptionValue) => {
    return (Event) => {
      setCurrentCountry(OptionValue);
      setSearchValue(OptionValue.name);
      setIsOpen(false);
    };
  };

  //on search value change
  useEffect(() => {
    const dropdownOptions = countries.filter((country) => {
      if (country.name.toLowerCase() === searchValue.toLowerCase()) {
        setCurrentCountry(country);
      }
      return country.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setOptions(dropdownOptions);
  }, [searchValue]);

  return (
    <InputDropdown
      placeholder="Search by Country..."
      dropdownRef={dropdownRef}
      onInputChange={handleInputChange}
      onInputFocus={handleInputFocus}
      onInputBlur={handleDropdownBlur}
      onDropdownItemClick={handleItemClick}
      onDropdownItemBlur={handleDropdownBlur}
      searchValue={searchValue}
      options={options}
      isOpen={isOpen}
      dropdownClassName={classes.dropdownItem}
    />
  );
};

export default CountryInput;
