import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: (props) => ({
    margin: "0 auto",
    maxWidth: props.maxWidth,
  }),
});

export const Container = ({
  children,
  className,
  component = "div",
  maxWidth="860px",
  ...props
}) => {
  const classes = useStyles({ maxWidth, ...props });

  const Component = component;
  return (
    <Component {...props} className={clsx(classes.container, className)}>
      {children}
    </Component>
  );
};

export default Container;
