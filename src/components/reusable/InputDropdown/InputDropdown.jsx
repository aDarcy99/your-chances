import React from "react";
import { createUseStyles } from "react-jss";
import { colors } from "@themerig/core";
//components
import Dropdown from "../Dropdown/Dropdown";
import { Input } from "../reusable";

export const InputDropdown = ({
  InputClassName,
  dropdownClassName,
  dropdownItemClassName,
  searchValue,
  onInputChange,
  onInputFocus,
  onInputBlur,
  onDropdownItemClick,
  onDropdownItemBlur,
  options,
  isOpen = false,
  dropdownRef,
  placeholder,
  ...props
}) => {
  return (
    <div>
      <Input
        placeholder={placeholder}
        onChange={onInputChange}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        value={searchValue}
        className={InputClassName}
      />
      <Dropdown
        ref={dropdownRef}
        className={dropdownClassName}
        dropdownItemClassName={dropdownItemClassName}
        onDropdownItemClick={onDropdownItemClick}
        onDropdownItemBlur={onDropdownItemBlur}
        isOpen={isOpen}
        searchValue={searchValue}
        options={options}
      />
    </div>
  );
};

export default InputDropdown;
