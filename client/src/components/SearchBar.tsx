import { SearchResults } from "./SearchResults";

export default function SearchBar({ onSearch, searchText }) {
  return (
    <div className="m-auto flex columns-3 flex-wrap justify-center space-x-8 p-1">
      <input
        type="search"
        onChange={(e) => onSearch(e.currentTarget.value)}
        placeholder="search..."
        className="rounded border-2 border-solid border-black"
      />

      {searchText && (
        <div className="columns-1 flex-wrap divide-solid divide-black border-2 border-b border-solid border-black bg-white object-right-bottom">
          <SearchResults searchText={searchText} setSearchText={onSearch} />
        </div>
      )}
    </div>
  );
}
