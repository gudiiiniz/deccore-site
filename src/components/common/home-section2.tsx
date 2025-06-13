import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function HomeSection2() {
  const { t } = useTranslation();

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center my-10 gap-10 lg:gap-20">
      <div className="w-full lg:w-1/2">
        <h2 className="text-xl sm:text-2xl font-bold">{t("home.section2.title")}</h2>
        <h4 className="font-semibold mt-2 text-base sm:text-lg">
          {t("home.section2.subtitle")}
        </h4>
        <p className="mt-6 text-justify text-sm sm:text-base">
          {t("home.section2.text1")}
          <br />
          <br />
          {t("home.section2.text2")}
          <br />
          <br />
          {t("home.section2.text3")}
          <br />
          <br />
          {t("home.section2.text4")}
          <br />
          <br />
          {t("home.section2.text5")}
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src={"/section2/home-7.jpg"}
          alt="home-7"
          width={800}
          height={600}
          className="w-full h-auto rounded-sm"
        />
      </div>
    </section>
  );
}
