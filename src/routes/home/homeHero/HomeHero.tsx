import Button from "@/components/button/Button";
import "./HomeHero.css";
const HomeHero = () => {
  return (
    <>
      <section className="relative flex justify-center h-[100vh] bg-cover bg-center home-hero-image">
        <div className="absolute inset-0 overlay"></div>
        <div className="relative z-10 flex self-center justify-center h-[80vh]">
          <h2 className="text-6xl md:text-8xl self-start me-4">Elevate</h2>
          <div className="square w-10 md:w-12"></div>
          <div className="self-end ms-4">
            <h2 className="text-6xl md:text-8xl">Your</h2>
            <h2 className="text-6xl md:text-8xl">Online</h2>
            <h2 className="text-6xl md:text-8xl">Presence</h2>
          </div>
        </div>
      </section>
      <section className="relative h-[100vh] bg-cover bg-center home-hero-image">
        <div className="absolute inset-0 mirror-overlay"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-6xl md:text-8xl great-vibes-regular mb-4 text-white">
            Sweets that make you <br /> Feel Happy
          </h1>
          <p className="text-lg md:text-xl mb-8 montserrat-regular text-white">
            With Our Hand Crafted Chocolate
          </p>
          <Button href="/products">PRODUCTS</Button>
        </div>
      </section>
      <section className="relative h-[100vh] bg-cover bg-center home-hero-image">
        <div className="absolute inset-0 overlay"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-6xl md:text-8xl great-vibes-regular mb-4 text-white">
            Sweets that make you <br /> Feel Happy
          </h1>
          <p className="text-lg md:text-xl mb-8 montserrat-regular text-white">
            With Our Hand Crafted Chocolate
          </p>
          <Button href="/products">PRODUCTS</Button>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
