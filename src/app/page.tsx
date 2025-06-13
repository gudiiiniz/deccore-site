import Certificates from "@/components/common/certificates";
import HomeGrid from "@/components/common/home-grid";
import HomeParallax from "@/components/common/home-parallax";
import HomeSection1 from "@/components/common/home-section1";
import HomeSection2 from "@/components/common/home-section2";
import HomeSection3 from "@/components/common/home-section3";
import HomeVideos from "@/components/common/home-videos";

export default function Home() {
  return (
    <>
      <div className="relative flex items-center justify-center shadow-2xl">
        <div className="absolute z-30 text-center px-4">
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-shadow text-shadow-lg">
            Fabricação e Reforma de
          </p>
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-shadow text-shadow-lg">
            Máquinas Serigráficas
          </p>
        </div>
        <video
          src="home-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
        ></video>
      </div>

      <Certificates />

      <div className="w-full bg-gray-100 py-10 sm:py-16 md:py-20">
        <HomeGrid />
      </div>

      <HomeSection1 />

      <HomeVideos />

      <HomeSection2 />

      <HomeSection3 />

      <HomeParallax />
    </>
  );
}
