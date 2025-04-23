import { ReactNode } from "react";

const base =
  "hidden lg:block py-[0.4rem] px-7 cursor-pointer rounded-md text-base transition-all shadow-md hover:shadow-lg duration-300";

const styles = {
  signup:
    base +
    " py-[0.4rem] border border-blue-500 text-blue-600 bg-white hover:bg-gray-50 transition-transform hover:scale-105 duration-200 ease-in-out",
  login:
    base +
    " py-[0.4rem] border bg-gray-600 hover:bg-gray-700 border-gray-300 text-gray-100 transition-transform hover:scale-105 duration-200 ease-in-out",
  cta:
    base +
    "  relative py-[0.7rem] border border-gray-200 text-gray-200 bg-blue-600 transition-transform hover:scale-105 duration-200 ease-in-out mt-3 z-10",
  black:
    base +
    "  relative py-[0.7rem] bg-white -translate-y-[45px] translate-x-[2.5px]",
  cart:
    base +
    " w-full  transition-transform hover:scale-105 duration-200 ease-in-out z-10",
};

type ButtonVariant = keyof typeof styles;

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type: ButtonVariant;
}

function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
