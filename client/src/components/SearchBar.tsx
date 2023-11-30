import { SearchResults } from "./SearchResults";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ onSearch, searchText }) {
  return (
    <div className="align-center m-auto justify-center p-4">
      <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
      <input
        type="search"
        onChange={(e) => onSearch(e.currentTarget.value)}
        placeholder="search..."
        className="w-80 p-4"
      />

      {searchText && (
        <ul>
          <li>
            <div className="absolute z-10 flex w-1/4 flex-wrap divide-solid divide-black border-2 border-b border-solid border-black bg-white object-right-bottom">
              <SearchResults searchText={searchText} setSearchText={onSearch} />
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}
