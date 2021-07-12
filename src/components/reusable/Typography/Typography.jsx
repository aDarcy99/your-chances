import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  typography: (props) => ({
    display: props.display || "",
    color: props.color || "",
    fontFamily: props.fontFamily || "",
    fontSize: props.fontSize || "",
    fontWeight: props.fontWeight || "",
    textTransform: props.textTransform || "",
    lineHeight: props.lineHeight || "",
    marginBottom: props.marginBottom || ""
  }),
}));

export const Typography = ({
  children,
  className,
  component = "p",
  display = "block",
  color,
  fontSize,
  fontFamily,
  fontWeight,
  textTransform,
  lineHeight,
  marginBottom,
  ...props
}) => {
  const classes = useStyles({ color, fontSize, fontWeight, textTransform, lineHeight, marginBottom, display});
  const Component = component;
  return (
    <Component className={clsx(classes.typography, className)} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
