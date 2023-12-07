import { SearchResults } from "./SearchResults";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SearchBar({ onSearch, searchText }) {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="ml-4 flex items-center">
      <div className="relative">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
        <input
          type="search"
          onChange={(e) => onSearch(e.currentTarget.value)}
          placeholder="search..."
          className="w-40 p-4 outline-none"
          onFocus={() => setShowResults(true)}
        />
        {showResults && searchText && (
          <div className="absolute left-0 top-full z-10 mt-1 w-full border border-black bg-white shadow-md">
            <SearchResults searchText={searchText} setSearchText={onSearch} />
          </div>
        )}
      </div>
    </div>
  );
}
