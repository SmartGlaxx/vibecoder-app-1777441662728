export default function Portfolio() {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="h-40 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Project Alpha</h2>
          <p className="text-gray-600">A sleek portfolio site for a creative agency.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="h-40 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Project Beta</h2>
          <p className="text-gray-600">An e-commerce platform for handmade goods.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="h-40 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Project Gamma</h2>
          <p className="text-gray-600">A mobile app for fitness tracking.</p>
        </div>
      </div>
    </section>
  );
}