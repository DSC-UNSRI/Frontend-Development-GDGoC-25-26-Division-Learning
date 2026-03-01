function Card({ name = "Product", price = "0", isAvailable = true }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          {name || "Product A"}
        </h2>
        <p className="text-sm text-gray-500">Price: {price || "0"}</p>
      </div>

      {/* Status */}
      <span
        className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${isAvailable ? "text-green-500" : "text-red-500"}`}
      >
        {isAvailable ? "Available" : "Not Available"}
      </span>

      {/* Action Button */}
      {isAvailable && (
        <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Buy Now
        </button>
      )}
    </div>
  );
}

export default Card;
