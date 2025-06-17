export default function HomeVideos() {
  return (
    <section className="w-full bg-[#0E0458] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 py-10 sm:py-16 lg:py-20 px-4">
      <div className="w-full lg:w-1/3">
        <video
          src={"/home-videos/home-video3.mp4"}
          poster="/home-videos/home-thumbnail-1.png"
          className="w-full h-auto rounded-sm border border-amber-50"
          controls
          playsInline
        ></video>
      </div>
      <div className="w-full lg:w-1/3">
        <video
          src={"/home-videos/home-video4.mp4"}
          poster="/home-videos/home-thumbnail-2.png"
          className="w-full h-auto rounded-sm border border-amber-50"
          controls
          playsInline
        ></video>
      </div>
    </section>
  );
}
