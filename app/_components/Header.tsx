import Navigation from "@/app/_components/Navigation";

function Header() {
  return (
    <header className="py-5 fixed left-0 top-0 w-full backdrop-blur-lg z-40 shadow-md">
      <Navigation />
    </header>
  );
}

export default Header;
