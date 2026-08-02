// import IPad from "../assets/ipad_air.jpg";
// import IPhone from "../assets/iphone.jpg";

export const Wedges = ({ image }) => {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black group">
      <img src={image} alt="iPad Air" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center pt-12 text-center px-4 bg-black/10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white ">
          iPad Air
        </h2>
        <div className="mt-4 flex gap-4 text-sm">
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Learn more
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  );
};
