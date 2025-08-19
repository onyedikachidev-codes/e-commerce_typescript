import { ReactNode } from "react";

const base =
  "block py-[0.4rem] px-7 cursor-pointer rounded-md text-base transition-all shadow-md hover:shadow-lg duration-300";

const styles = {
  signup:
    base +
    " block py-[0.7rem] lg:py-[0.4rem] px-8 lg:px-6 border border-[#00B259] text-[#00B259] bg-white hover:bg-[#EAE8E3] transition-transform hover:scale-105 duration-200 ease-in-out",
  login:
    base +
    " block py-[0.8rem] lg:py-[0.5rem] px-12 lg:px-7 bg-[#00B259] hover:bg-[#009246] text-gray-50 transition-transform hover:scale-105 duration-200 ease-in-out",
  cta:
    base +
    "  relative py-[0.7rem] border border-gray-200 text-gray-200 bg-[#00B259] transition-transform hover:scale-105 duration-200 ease-in-out mt-3 z-10",
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
