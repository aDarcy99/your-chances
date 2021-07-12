import React, { createContext, useContext, useState } from "react";

const CurrentCountry = createContext("");

const SelectedCountryProvider = (props) => {
  const [currentCountry, setCurrentCountry] = useState("");

  return (
    <CurrentCountry.Provider value={{ currentCountry, setCurrentCountry }}>
      {props.children}
    </CurrentCountry.Provider>
  );
};

export default SelectedCountryProvider;

export function useCurrentCountry() {
  return useContext(CurrentCountry);
}
