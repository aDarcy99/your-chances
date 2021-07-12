import clsx from "clsx";
import React, { forwardRef } from "react";
import { createUseStyles } from "react-jss";
import { colors } from "@themerig/core";
//components
import DropdownItem from "./DropdownItem/DropdownItem";

const useStyles = createUseStyles((theme) => ({
  dropdownContainer: {
    position: "relative",
  },
  dropDown: {
    position: "absolute",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    maxHeight: "10rem",
    padding: `${theme.spacing(0.5)}px`,
    boxShadow: theme.shadows[6],

    backgroundColor: colors.grey[0],

    overflowY: "scroll",
    zIndex: 3,
  },
}));

export const Dropdown = React.forwardRef(
  (
    {
      className,
      isOpen = false,
      options = [],
      dropdownItemClassName,
      onDropdownItemClick,
      onDropdownItemFocus,
      onDropdownItemBlur,
      ...props
    },
    dropDownRef
  ) => {
    const classes = useStyles();

    return isOpen ? (
      <div className={clsx(classes.dropdownContainer)} ref={dropDownRef}>
        <div className={clsx(classes.dropDown, className)}>
          {options.map((option, optionIdx) => (
            <DropdownItem
              onClick={onDropdownItemClick}
              onFocus={onDropdownItemFocus}
              onBlur={onDropdownItemBlur}
              key={optionIdx}
              option={option}
              className={dropdownItemClassName}
            />
          ))}
        </div>
      </div>
    ) : (
      ""
    );
  }
);

export default Dropdown;
