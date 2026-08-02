import Hero from "../assets/hero.jpeg";
import { Wedges } from "../components/index.jsx";
import IPad from "../assets/ipad_air.jpg";
import IPhone from "../assets/iphone.jpg";

export const Home = () => {
  return (
    <section>
      <section className="w-full min-h-screen bg-black flex items-center justify-center">
        <div className="relative overflow-hidden bg-black group">
          <img src={Hero} alt="Hero" className="w-full h-full object-cover" />
          <div className="text-center px-6">
            <h1 className="text-5xl md:text-7xl font-semibold  text-white">
              iPhone 15 Pro
            </h1>
            <div className="mt-8 flex justify-center gap-4">
              <button className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                Learn More
              </button>
              <button className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                Buy
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen bg-white items-center justify-center grid grid-cols-2 gap-2">
        <Wedges image={IPad} />
        <Wedges image={IPhone} />
        <Wedges image={IPad} />
        <Wedges image={IPad} />
      </section>
    </section>
  );
};
