import React from "react";
import { IGridProps } from "./GridTypes";

export default function Grid({
  children,
  grid,
  item,
  layoutName = '', 
  styles = {},
  customClassNames = '',
}: IGridProps) {
  const gridClass = {
    type: item ? 'item' : grid ? 'grid' : '',
  };

  return (
    <div
      className={`${layoutName} ${gridClass.type} ${customClassNames}`}
      style={styles}
    >
      {children}
    </div>
  );
}
