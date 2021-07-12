import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { colors } from "@themerig/core";
//assets
import countries from "../../public/countryData.json";
//context
import { useCurrentCountry } from "../providers/CurrentCountryProvider";
//components
import {
  Button,
  Container,
  Input,
  Typography,
} from "../components/reusable/reusable";
import Map from "../components/Map/Map";
//functions
import { roundNumberToDecimal } from "../functions/mathFunctions";
import Statistics from "../components/Statistics/Statistics";
import CountryInput from "../components/CountryInput/CountryInput";

const useStyles = createUseStyles((theme) => ({
  topContainer: {
    background: "linear-gradient(75.05deg, #001428 0%, #34002F 100%)",
    marginBottom: `${theme.spacing(1)}px`,
    [`@media (max-width: ${theme.viewports.lg})`]: {
      paddingLeft: `${theme.spacing(2)}px`,
      paddingRight: `${theme.spacing(2)}px`,
    },
  },
  title: {
    paddingTop: `${theme.spacing(3)}px`,
    paddingBottom: `${theme.spacing(1)}px`,
  },
  map: {
    width: "100%",
    height: "60vh",
    marginBottom: `${theme.spacing(3)}px`,
    [`@media (max-width: ${theme.viewports.sm})`]: {
      height: "50vh",
    },
  },
  inputContainer: {
    display: "flex",
    paddingBottom: `${theme.spacing(3)}px`,
    "& Button, input": {
      marginRight: `${theme.spacing(3)}px`,
      [`@media (max-width: ${theme.viewports.sm})`]: {
        width: "100%",
        marginBottom: `${theme.spacing(2)}px`,
      },
    },
    [`@media (max-width: ${theme.viewports.sm})`]: {
      flexDirection: "column",
      paddingBottom: `0`,
    },
  },
  chancesContainer: {
    marginBottom: `${theme.spacing(3)}px`,
    [`@media (max-width: ${theme.viewports.lg})`]: {
      paddingLeft: `${theme.spacing(2)}px`,
      paddingRight: `${theme.spacing(2)}px`,
    },
  },
}));

export const IndexPage = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  console.log(theme);
  const { currentCountry, setCurrentCountry } = useCurrentCountry();

  const onRandomCountryClick = () => {
    setCurrentCountry(getRandomBirthCountry(countries));
  };
  return (
    <React.Fragment>
      <section className={classes.topContainer}>
        <Container>
          <Typography
            component="h1"
            className={classes.title}
            color={colors.grey[1]}
            id="chances"
          >
            Your Chances
          </Typography>
          <Map country={currentCountry} className={classes.map} />
          <div className={classes.inputContainer}>
            <Button onClick={onRandomCountryClick}>Random Country</Button>
            <CountryInput />
          </div>
        </Container>
      </section>
      <Container component="section" className={classes.chancesContainer}>
        <Typography component="h2" marginBottom={`${theme.spacing(1)}px`}>
          Chances
        </Typography>
        <div>
          {currentCountry ? (
            <React.Fragment>
              <Typography
                fontSize={theme.typography.body1.fontSize}
                marginBottom={`${theme.spacing(2)}px`}
                lineHeight="150%"
              >
                You're born in{" "}
                <Typography
                  component="span"
                  display="inline-block"
                  color={theme.palette.primary.main}
                >
                  {currentCountry.name}
                </Typography>
                .
                <br />
                The chance of being born here is{" "}
                <Typography
                  component="span"
                  display="inline-block"
                  color={theme.palette.primary.main}
                >
                  {roundNumberToDecimal(currentCountry.data.birthChance)}%
                </Typography>
              </Typography>
              <Typography component="h3">Population</Typography>
              <Typography
                fontSize={theme.typography.body1.fontSize}
                lineHeight="150%"
              >
                The estimated population of {currentCountry.name} is{" "}
                <Typography
                  component="span"
                  display="inline-block"
                  color={theme.palette.primary.main}
                >
                  {currentCountry.data.population.value.toLocaleString()}.
                </Typography>
              </Typography>
            </React.Fragment>
          ) : (
            <Typography
              fontSize={theme.typography.body1.fontSize}
              lineHeight="150%"
            >
              Using data from the CIA world factbook, this calculates the
              chances of the next person born being born in a certain country.
            </Typography>
          )}
        </div>
      </Container>
      {currentCountry ? <Statistics /> : ""}
    </React.Fragment>
  );
};

export default IndexPage;

function getRandomBirthCountry(Countries) {
  var randomNumber = Math.random() * 100;
  var currentWeight = 0;
  for (let countryIdx = 0; countryIdx <= Countries.length; countryIdx++) {
    currentWeight += Countries[countryIdx].data.birthChance;
    if (randomNumber > currentWeight) {
      continue;
    } else {
      return Countries[countryIdx];
    }
  }
}
