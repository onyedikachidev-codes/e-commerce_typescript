"use client";

import {
  cloneElement,
  createContext,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

interface ModalContextType {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}

interface OverlayProps {
  children: ReactNode;
}

interface StyledDivProps {
  children: ReactNode;
}

interface StyledButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface OpenProps {
  children: ReactElement<{ onClick?: MouseEventHandler<HTMLElement> }>;
  opens: string;
}

interface ModalProps {
  children: ReactNode;
}

interface WindowProps {
  children: ReactNode;
  name: string;
}

interface WindowChildProps {
  onCloseModal: () => void; // Define the onCloseModal prop explicitly
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function Overlay({ children }: OverlayProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] z-[1000] transition-all duration-1000 backdrop-blur-sm bg-black/30">
      {children}
    </div>
  );
}

function StyledDiv({ children }: StyledDivProps) {
  return (
    <div className="fixed top-1/2 lg:left-[50%] xl:left-[50%] xl:right-[10%] left-3 right-3 lg:right-0 md:left-24 md:right-24 lg:-translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg shadow-lg px-16 pt-12 transition-all duration-500">
      {children}
    </div>
  );
}

function StyledButton({ children, onClick }: StyledButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-none p-[0.4rem] rounded-sm translate-x-3 transition-all absolute top-[1.2rem] right-[1.9rem] hover:bg-gray-100 "
    >
      {children}
    </button>
  );
}

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }: OpenProps) {
  const { open } = useContext(ModalContext) as ModalContextType;

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }: WindowProps) {
  const { openName, close } = useContext(ModalContext) as ModalContextType;

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledDiv>
        <StyledButton onClick={close}>
          <HiXMark />
        </StyledButton>
        <div>
          {cloneElement(children as ReactElement<WindowChildProps>, {
            onCloseModal: close,
          })}
        </div>
      </StyledDiv>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
