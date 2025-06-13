import { useTranslation } from "react-i18next";

export default function HomeSection1() {
  const { t } = useTranslation();

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between my-10 gap-10 lg:gap-20">
      <div className="w-full lg:w-1/2">
        <h2 className="text-xl sm:text-2xl font-bold">
          {t("home.section1.title1")}
        </h2>
        <p className="mt-6 sm:mt-10 text-justify text-sm sm:text-base">
          {t("home.section1.text1")}
          <br />
          <br />
          {t("home.section1.text2")}
          <br />
          <br />
          {t("home.section1.text3")}
          <br />
          <br />
          {t("home.section1.text4")}
          <br />
          <br />
          {t("home.section1.text5")}
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-xl sm:text-2xl font-bold">
          {t("home.section1.title2")}
        </h2>
        <p className="mt-6 sm:mt-10 text-justify text-sm sm:text-base">
          {t("home.section1.text6")}
          <br />
          <br />
          {t("home.section1.text7")}
          <br />
          <br />
          {t("home.section1.text8")}
        </p>
        <video
          className="mt-10 sm:mt-16 rounded-sm w-full h-auto"
          src="/section1/home-video2.mp4"
          playsInline
          controls
          loop
        ></video>
      </div>
    </section>
  );
}
