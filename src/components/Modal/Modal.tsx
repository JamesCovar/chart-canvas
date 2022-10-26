import React from "react";
import { IModalProps } from "./ModalTypes";

export default function Modal({ children }: IModalProps) {
  return (
    <div className="modal-background">
      <div className="modal-container">{children}</div>
    </div>
  );
}
