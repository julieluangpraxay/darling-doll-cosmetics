import { SearchResults } from "./SearchResults";

export default function SearchBar({ onSearch, searchText }) {
  return (
    <div className=" m-auto  w-3/4 p-1">
      <input
        type="search"
        onChange={(e) => onSearch(e.currentTarget.value)}
        placeholder="search..."
        className="mr-10 w-80 rounded border-2 border-solid border-black p-1"
      />

      {searchText && (
        <div className="absolute z-10 flex-wrap divide-solid divide-black border-2 border-b border-solid border-black bg-white object-right-bottom ">
          <SearchResults searchText={searchText} setSearchText={onSearch} />
        </div>
      )}
    </div>
  );
}
