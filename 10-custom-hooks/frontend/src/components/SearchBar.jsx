export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search student..."
      onChange={(e) => onSearch(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
}
