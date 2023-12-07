import { SearchResults } from "./SearchResults";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function MobileSearchBar({ onSearch, searchText }) {
  return (
    <div className="relative m-auto ml-8 flex w-full items-center sm:hidden md:hidden lg:hidden xl:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faSearch} size="lg" />
          <input
            type="search"
            onChange={(e) => onSearch(e.currentTarget.value)}
            value={searchText}
            placeholder="Search..."
            className="ml-2 w-40 p-2 focus:border-blue-500 focus:outline-none sm:w-60"
          />
        </div>
      </div>

      {searchText && (
        <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-b border border-gray-300 bg-white">
          <SearchResults searchText={searchText} setSearchText={onSearch} />
        </div>
      )}
    </div>
  );
}
