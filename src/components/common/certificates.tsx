import { useTranslation } from "react-i18next";

export default function Certificates() {
  const { t } = useTranslation();

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between mt-10 gap-10 mb-20">
      <div className="w-full lg:w-1/2">
        <img src={"iso.webp"} alt="iso" className="mx-auto" />
        <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-10 text-center lg:text-left">
          {t("home.certificates.title")}
        </h2>
        <p className="mt-4 text-justify text-sm sm:text-base">
          {t("home.certificates.text1")}
          <br />
          <br />
          {t("home.certificates.text2")}
          <br />
          <br />
          <b>{t("home.certificates.text3")}</b>
          <br />
          <b>{t("home.certificates.text4")}</b>
          {t("home.certificates.text5")}
          <br />
          <b>{t("home.certificates.text6")}</b>
          {t("home.certificates.text7")} <br />
          <b>{t("home.certificates.text8")}</b>{t("home.certificates.text9")}
          <br />
          <br />{t("home.certificates.text10")}
        </p>
      </div>
      <div className="w-full lg:w-1/2 shadow-2xl">
        <img
          src={"home-certificate.png"}
          alt="home-certificate"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
