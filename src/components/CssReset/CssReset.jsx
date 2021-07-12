import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  "@global": {
    "*, *::before, *::after": {
      boxSizing: "border-box",
      margin: 0,
    },
    html: {
      lineHeight: 1.15,
      WebkitTextSizeAdjust: "100%",
      boxSizing: "border-box",
      fontSize: `${theme.typography.root.fontSize || 16}px`,
      fontFamily: `${theme.typography.root.fontFamily}`,
      color: `${theme.palette.defaults.text.body}`,
      backgroundColor: `${theme.palette.defaults.background}`,
      scrollBehavior: "smooth",
    },
    body: {
      margin: 0,
    },
    main: {
      display: "block",
    },
    "h1, h2, h3, h4, h5, h6": {
      color: theme.palette.defaults.text.heading,
    },
    h1: {
      ...theme.typography.h1,
      fontSize: `${theme.typography.h1.fontSize}px`,
    },
    h2: {
      ...theme.typography.h2,
      fontSize: `${theme.typography.h2.fontSize}px`,
    },
    h3: {
      ...theme.typography.h3,
      fontSize: `${theme.typography.h3.fontSize}px`,
    },
    h4: {
      ...theme.typography.h4,
      fontSize: `${theme.typography.h4.fontSize}px`,
    },
    h5: {
      ...theme.typography.h5,
      fontSize: `${theme.typography.h5.fontSize}px`,
    },
    h6: {
      ...theme.typography.h6,
      fontSize: `${theme.typography.h6.fontSize}px`,
    },
    p: {
      ...theme.typography.body1,
      fontSize: `${theme.typography.body1.fontSize}px`,
    },
    a: {
      color: theme.palette.defaults.link,
    },
    button: {
      font: "inherit",
    },
  },
}));

const CssReset = () => {
  const classes = useStyles();
  return <> </>;
};

export default CssReset;
