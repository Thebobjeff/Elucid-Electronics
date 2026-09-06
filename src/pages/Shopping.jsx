import { Cycle } from "../components/index.jsx";
import { ProductCard } from "../components/index.jsx";
import IPhone17 from "../assets/iphone_17.jpg";
import IPhone17e from "../assets/iphone_17e.jpg";
import IPhone17pro from "../assets/iphone_17pro.jpg";
import IPhoneair from "../assets/iphone_air.jpg";

export const Shopping = () => {
  return (
    <section>
      <section className="flex items-center">
        <h1>Explore the lineup.</h1>
      </section>
      <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center">
        <Cycle images={[IPhone17pro, IPhone17, IPhone17e, IPhoneair]} />

        <ProductCard
          productImage={
            "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
          }
        />
      </section>
    </section>
  );
};
