import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="relative w-64">
      <input
        type="text"
        placeholder="search"
        className="w-full bg-red  placeholder-black border-b border-gray-800 focus:outline-none focus:border-gray-600 px-3 py-2"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-300 hover:text-white">
        <CiSearch size={20} />
      </button>
    </div>
  );
}
