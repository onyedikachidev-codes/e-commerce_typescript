import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="relative w-56">
      <input
        type="text"
        placeholder="Search products"
        className="w-full placeholder-blue-400 border-b border-gray-500 focus:outline-none focus:border-gray-600 px-3 py-2 transition-transform focus:scale-101 duration-200 ease-in-out"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-700 hover:text-gray-500">
        <CiSearch size={20} />
      </button>
    </div>
  );
}
