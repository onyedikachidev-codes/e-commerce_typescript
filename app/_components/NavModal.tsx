import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

export default function NavModal({ isOpen, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <ul className="text-gray-700 bg-white z-30 backdrop-blur-lg p-6 shadow-xl rounded absolute -left-[3.3rem] sm:-left-5 lg:-left-16 top-12 w-[260px] lg:w-[302px] overflow-y-auto">
      {children}
    </ul>
  );
}
