import React from "react";
import { createUseStyles, useTheme } from "react-jss";
//Components
import Typography from "../Typography/Typography";

const useStyles = createUseStyles((theme) => ({
  headingContainer: (props) => ({
    marginTop: `${theme.spacing(6)}px`,
    marginBottom: `${theme.spacing(3)}px` || props.marginBottom,
  }),
  headingWrapper: {
    display: "flex",
    alignItems: "flex-end",
  },
  headingText: {
    marginRight: "auto",
  },
  headingLine: {
    width: "100%",
    height: "1px",
    backgroundColor: "white",
  },
}));

export const Heading = ({ children, marginBottom, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ marginBottom });
  return (
    <div className={classes.headingContainer}>
      <div className={classes.headingWrapper}>
        <Typography
          component="h1"
          color={theme.palette.secondary.main}
          textTransform="uppercase"
          className={classes.headingText}
        >
          {children}
        </Typography>
      </div>
      <div className={classes.headingLine} />
    </div>
  );
};

export default Heading;
