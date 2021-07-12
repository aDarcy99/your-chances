import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { useCurrentCountry } from "../../providers/CurrentCountryProvider";
//assets
import electrictyImage from "../../../public/images/electricity-image.png";
import lifeExpectancyImage from "../../../public/images/life-expectancy-image.png";
import literacyImage from "../../../public/images/literacy-image.png";
import povertyImage from "../../../public/images/poverty-image.png";
//components
import { Container, Typography } from "../reusable/reusable";
import Statistic from "./Statistic/Statistic";

const useStyles = createUseStyles((theme) => ({
  root: {
    paddingTop: `${theme.spacing(1)}px`,
    [`@media (max-width: ${theme.viewports.lg})`]: {
      paddingLeft: `${theme.spacing(2)}px`,
      paddingRight: `${theme.spacing(2)}px`,
    },
  },
  statisticsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "auto",
    width: "100%",
  },
  statisticsWrapper: {
    width: `860px`,
    margin: `auto`,
    display: "flex",
  },
}));

const Statistics = ({ ...props }) => {
  const classes = useStyles();
  const { currentCountry } = useCurrentCountry();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <Container>
        <Typography component="h2" marginBottom={`${theme.spacing(1)}px`}>
          Statistics
        </Typography>
        <div className={classes.statisticsContainer}>
          {[
            {
              title: "Life Expentancy",
              data: currentCountry.data.lifeExpectancyAtBirth.value,
              body: `The average life expectancy at birth is ${currentCountry.data.lifeExpectancyAtBirth.value} years.`,
              img: <img src={lifeExpectancyImage} width="72" height="66" />,
            },
            {
              title: "Literacy",
              data: currentCountry.data.literacy.value,
              body: `${currentCountry.data.literacy.value}% of people over the age of
              15 can read.`,
              img: <img src={literacyImage} width="55" height="80" />,
            },
            {
              title: "Poverty",
              data: currentCountry.data.populationBelowPovertyLine.value,
              body: `${currentCountry.data.populationBelowPovertyLine.value}% of
              people are below the poverty line.`,
              img: <img src={povertyImage} width="64" height="43" />,
            },
            {
              title: "Electricity Access",
              data: currentCountry.data.electricityAccess.value,
              body: `${currentCountry.data.electricityAccess.value}% of the country
              has access to electricity.`,
              img: <img src={electrictyImage} width="50" height="80" />,
            },
          ].map((statistic, statisticIdx) => (
            <Statistic key={statisticIdx} {...statistic} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
