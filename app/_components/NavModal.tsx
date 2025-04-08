import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;

  children: ReactNode;
}

export default function NavModal({ isOpen, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed translate-y-0 -translate-x-32 flex items-center justify-center z-50">
      <div className="bg-gray-700 text-white  p-6 shadow-xl min-w-[300px]">
        {children}
      </div>
    </div>
  );
}
