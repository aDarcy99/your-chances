import React from "react";
import clsx from "clsx";
import { createUseStyles, useTheme } from "react-jss";
import Color from "color";

const useStyles = createUseStyles((theme) => ({
  filledVariant: (props) => ({
    cursor: "pointer",
    fontWeight: "600",
    color: theme.palette.primary.text,
    minHeight: "40px",
    backgroundColor: theme.palette.primary.main,
    border: "1px solid transparent",
    borderRadius: props.radius,
    transition: "all 0.3s",
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark,
      border: `1px solid ${theme.palette.primary.dark}`,
    },
    "&:active": {
      backgroundColor: theme.palette.primary.darker,
      border: `1px solid ${theme.palette.primary.darker}`,
    },
  }),
  outlinedVariant: (props) => ({
    cursor: "pointer",
    fontWeight: "600",
    color: theme.palette.primary.main,
    minHeight: "40px",
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: props.radius,
    transition: "all 0.3s",
    "&:hover, &:focus": {
      color: theme.palette.primary.dark,
      border: `1px solid ${theme.palette.primary.dark}`,
    },
    "&:active": {
      backgroundColor: Color(theme.palette.primary.light).fade(0.85).toString(),
      border: `1px solid ${theme.palette.primary.darker}`,
    },
  }),
  transparentVariant: (props) => ({
    cursor: "pointer",
    fontWeight: "600",
    color: theme.palette.primary.main,
    minHeight: "40px",
    backgroundColor: "transparent",
    border: `1px solid transparent`,
    borderRadius: props.radius,
    transition: "all 0.3s",
    "&:hover, &:focus": {
      color: theme.palette.primary.dark,
      backgroundColor: Color(theme.palette.primary.lighter)
        .fade(0.95)
        .toString(),
    },
    "&:active": {
      color: theme.palette.primary.dark,
      backgroundColor: Color(theme.palette.primary.dark).fade(0.85).toString(),
    },
  }),
}));

export const Button = ({
  children,
  className,
  variant = "filled",
  paddingLeft = "16px",
  paddingRight = "16px",
  radius = "4px",
  ...props
}) => {
  const classes = useStyles({
    variant,
    paddingLeft,
    paddingRight,
    radius,
  });
  return (
    <button
      {...props}
      className={clsx([classes[`${variant}Variant`], className])}
    >
      {children}
    </button>
  );
};

export default Button;
