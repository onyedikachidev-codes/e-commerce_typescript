import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  uniqueStyles: string;
}

export default function NavModal({
  isOpen,
  children,
  uniqueStyles,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={`flex items-center justify-center z-30 ${uniqueStyles}`}>
      <div className="text-gray-700 bg-white backdrop-blur-lg p-6 shadow-xl min-w-[300px]">
        {children}
      </div>
    </div>
  );
}
