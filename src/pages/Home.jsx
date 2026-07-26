export const Home = () => {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black">
          iPhone 15 Pro
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-600">
          Titanium. So strong. So light. So Pro.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
            Learn More
          </button>

          <button className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
            Buy
          </button>
        </div>
      </div>
    </section>
  );
};
