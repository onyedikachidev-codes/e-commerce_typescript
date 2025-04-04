import { ReactNode } from "react";

const base =
  "hidden lg:block py-[0.4rem] px-7 cursor-pointer rounded-md text-base border transition";

const styles = {
  signup: base + " border-blue-800 text-blue-700 bg-white hover:bg-blue-100",
  login: base + " bg-gray-600 hover:bg-gray-800 border-gray-300 text-gray-100",
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
