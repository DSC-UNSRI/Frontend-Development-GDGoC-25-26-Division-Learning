function Card({ name, price, isAvailable }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">Price: {price}</p>
      </div>

      {/* Status */}
      <span
        className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
          isAvailable
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {isAvailable ? "Available" : "Out of Stock"}
      </span>

      {/* Button  */}
      {isAvailable && (
        <button className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
          Buy Product
        </button>
      )}
    </div>
  );
}

export default Card;
