import React, { useState } from "react";
import { IDropDownProps, ODropDownProps } from "./DropDownTypes";

//Custom Hook -> Mangage Dropdown state
const useDropDown = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<ODropDownProps>({
    value: "",
    element: "",
  });

  const handleOpenOptions = (event: any) => {
    setOpen(!open);
  };
  const handleOnBlur = (event: any) => {
    setOpen(false);
  };
  const handleClick = (option: ODropDownProps) => {
    setDropdown(option);
    setOpen(false);
  };

  return {
    open,
    dropdown,
    handleOpenOptions,
    handleOnBlur,
    handleClick,
  };
};

export default function DropDown({ options }: IDropDownProps) {
  const { open, dropdown, handleOpenOptions, handleOnBlur, handleClick } =
    useDropDown();

  return (
    <div
      className="Dropdown"
      onBlur={handleOnBlur}
      onClick={handleOpenOptions}
      tabIndex={1}
    >
      <input readOnly value={dropdown.element || dropdown.value} />
      <div className={`options ${open ? "" : "d-none"}`}>
        <ul>
          {options.map((option, index) => {
            return (
              <li key={index} onMouseDown={() => handleClick(option)}>
                {option.element || option.value}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
