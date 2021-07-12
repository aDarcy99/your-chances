import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";
import {colors} from "@themerig/core"

const useStyles = createUseStyles((theme) => ({
  outlinedVariant: {
    minHeight: "40px",
    backgroundColor: "transparent",
    color: colors.grey[1],
    padding: `0 ${theme.spacing(2)}px`,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "4px",
    "&::placeholder": {
      color: colors.grey[5]
    }
  },
}));
 
export const Input = ({
  className,
  component = "input",
  variant = "outlined",
  placeholder,
  ...props
}) => {
  const classes = useStyles();
  const Component = component;
  return (
    <Component
      className={clsx(classes.outlinedVariant, className)}
      {...props}
      placeholder={placeholder}
    />
  );
};

export default Input;
