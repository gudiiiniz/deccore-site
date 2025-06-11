export default function HomeParallax() {
  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[650px] overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
        style={{
          backgroundImage: "url('/home/home-parallax.jpg')",
        }}
      ></div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 px-4">
        <img
          src="/home/home-ink.png"
          alt="home-ink.png"
          className="w-full max-w-[90vw] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
        />
      </div>
    </section>
  );
}
