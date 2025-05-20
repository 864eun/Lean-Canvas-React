import { FaSearch } from 'react-icons/fa';

function SearchBar({ searchtext, setSearchText }) {
  return (
    <>
      <input
        type="text"
        placeholder="검색"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="검색"
        value={searchtext}
        onChange={e => setSearchText(e.target.value)}
      />
      <FaSearch className="absolute left-3 top-3 text-gray-400" />
    </>
  );
}

export default SearchBar;
