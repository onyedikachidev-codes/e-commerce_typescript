import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="relative w-56">
      <input
        type="text"
        placeholder="Search products"
        className="w-full placeholder-gray-400 border-b border-blue-600 focus:outline-none focus:border-gray-600 px-3 py-2"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-700 hover:text-blue-500">
        <CiSearch size={20} />
      </button>
    </div>
  );
}
