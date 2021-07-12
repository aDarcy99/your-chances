import React from "react";
import { createUseStyles } from "react-jss";
import { colors } from "@themerig/core";
//asets
import { ArrowRightIcon } from "../../../assets/SVGs/assets";
//components
import Link from "next/link";
import clsx from "clsx";

const useStyles = createUseStyles((theme) => ({
  readMore: {
    textDecoration: "none",
    transition: "all 0.3s",
    "&:link": {
      color: colors.blue[5],
    },
    "&:visited": {
      color: colors.blue[6],
    },
    "&:hover, &:focus": {
      color: theme.palette.primary.main,
      //Changing colour of svg arrow
      "& $readMoreArrow path": {
        fill: theme.palette.primary.main,
      },
    },
  },
  readMoreArrow: {
    "& path": {
      transition: "all 0.3s",
    },
  },
}));

const ReadMore = ({ children = "Read More", className, href, ...props }) => {
  const classes = useStyles();
  return (
    <Link href={href}>
      <a className={clsx(classes.readMore, className)}>
        {children} <ArrowRightIcon className={classes.readMoreArrow} />
      </a>
    </Link>
  );
};

export default ReadMore;
