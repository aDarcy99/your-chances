import React from "react";
import { createUseStyles, useTheme } from "react-jss";
//components
import { Typography } from "../../reusable/reusable";

const useStyles = createUseStyles((theme) => ({
  statistic: {
    display: "flex",
    alignItems: "center",
    width: "48%",
    "& img": {
      marginRight: `${theme.spacing(2)}px`,
    },
    marginBottom: `${theme.spacing(2)}px`,
    [`@media (max-width: ${theme.viewports.md})`]: {
      width: "100%",
      marginBottom: `${theme.spacing(4)}px`,
    },
  },
}));

const Statistic = ({ title, data, body, img, ...props }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.statistic}>
      {img}
      <div>
        <Typography component="h3">{title}</Typography>
        <Typography fontSize={theme.typography.body1.fontSize}>
          {data
            ? body
            : `There is currently no ${title} data available for this country.`}
        </Typography>
      </div>
    </div>
  );
};

export default Statistic;
