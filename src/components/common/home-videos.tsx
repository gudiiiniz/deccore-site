export default function HomeVideos() {
  return (
    <section className="w-full bg-[#0E0458] flex flex-row items-center justify-center gap-20 py-20">
      <div className="w-1/3">
        <video
          src={"/home-videos/home-video3.mp4"}
          poster="/home-videos/home-thumbnail.png"
          className="rounded-sm border border-amber-50"
          controls
          playsInline
        ></video>
      </div>
      <div className="w-1/3">
        <video
          src={"/home-videos/home-video4.mp4"}
          poster="/home-videos/home-thumbnail.png"
          className="rounded-sm border border-amber-50"
          controls
          playsInline
        ></video>
      </div>
    </section>
  );
}
