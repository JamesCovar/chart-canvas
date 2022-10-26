import React from "react";
import { ICanvasChartProps } from "./CanvasChartTypes";
import { TbLayoutGridAdd } from "react-icons/tb";

export default function CanvasChart({ children }: ICanvasChartProps) {
  return (
    <div className={"canvas-chart"}>
        <TbLayoutGridAdd className={"icon"} />
    </div>
  );
}
