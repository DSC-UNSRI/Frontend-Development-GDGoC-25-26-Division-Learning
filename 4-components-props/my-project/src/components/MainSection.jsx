function MainSection({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Product List</h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainSection;
