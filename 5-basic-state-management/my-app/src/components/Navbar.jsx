function Navbar({ cartCount }) {
  return (
    <div className="flex items-center justify-between border-b bg-white px-8 py-4">
      <h1 className="text-xl font-bold text-gray-800">
        DevStore
      </h1>

      <div className="text-sm font-medium">
        Cart: {cartCount}
      </div>
    </div>
  )
}

export default Navbar