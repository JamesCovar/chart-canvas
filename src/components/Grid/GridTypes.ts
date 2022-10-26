import { ReactNode } from "react";

export interface IGridProps {
    children: ReactNode
    layoutName?: string
    grid?: boolean
    item?: boolean
    styles?: object
    customClassNames?: string
}