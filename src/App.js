function App() {
  return (
    <div className="bg-slate-800 p-6">
      <div className="bg-white flex flex-col font-sans">
        <div className="container mx-auto px-8">
          <header className="flex flex-col sm:flex-row items-center justify-between py-6 relative">
            <h3 className="text-2xl font-bold text-blue-900">Wudo</h3>
            <nav className="hidden md:flex text-lg">
              <a href="#" className="text-gray-800 hover:text-orange-300 py-3 px-6">
                Home
              </a>
              <a href="#" className="text-gray-800 hover:text-orange-300 py-3 px-6">
                Furniture
              </a>
              <a href="#" className="text-gray-800 hover:text-orange-300 py-3 px-6">
                Product
              </a>
              <a href="#" className="text-gray-800 hover:text-orange-300 py-3 px-6">
                Store
              </a>
              <a
                href="#"
                className="bg-orange-300 hover:bg-orange-400 rounded-full uppercase text-white py-3 px-6"
              >
                Sign Up
              </a>
            </nav>
            <button className="flex md:hidden flex-col absolute top-0 right-0 p-4 mt-5">
              <span className="w-5 h-px mb-1 bg-orange-500"></span>
              <span className="w-5 h-px mb-1 bg-orange-500"></span>
              <span className="w-5 h-px mb-1 bg-orange-500"></span>
            </button>
          </header>
          <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
            <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="text-6xl font-bold leading-none tracking-wide mb-2">
                Exotic minimal
              </h1>
              <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">
                furniture.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-12">
                Choose from a wide range of well-crafted permium quality wooden
                furniture online
              </p>
              <a
                href="#"
                className="bg-orange-300 hover:bg-orange-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full"
              >
                Explore
              </a>
            </div>
            <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
              <img src="/14.jpg" alt="cover" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
