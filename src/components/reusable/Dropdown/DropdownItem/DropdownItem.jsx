import React from "react";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
import { colors } from "@themerig/core";

const useStyles = createUseStyles((theme) => ({
  dropdownItem: {
    cursor: "pointer",
    padding: `${theme.spacing(1)}px`,
    width: "10rem",
    "&:hover":{
      backgroundColor: colors.grey[2]
    }
  },
}));

export const DropdownItem = ({
  className,
  onClick,
  onFocus,
  onBlur,
  option,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div
      tabIndex="0"
      className={clsx(classes.dropdownItem, className)}
      onClick={onClick(option.value || option)}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {/* */}
      {option.label ? option.label : option.value ? option.value : option}
    </div>
  );
};

export default DropdownItem;
