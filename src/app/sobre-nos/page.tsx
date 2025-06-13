"use client";
import { useTranslation } from "react-i18next";

export default function AboutUs() {

  const { t } = useTranslation();
  
  return (
    <>
      <div className="py-10 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl text-[#0E0458] font-semibold">{t("about-us.title")}</h2>
        <p className="pt-5 text-justify text-sm sm:text-base">
          {t("about-us.text1")}
          <br />
          <br />
          {t("about-us.text2")}<br />
          <br />
          {t("about-us.text3")} <br />
          <br />
          {t("about-us.text4")} <br />
          <br />{t("about-us.text5")}
          <br />
          <br /> {t("about-us.text6")}
          <br />
          <br /> {t("about-us.text7")} <br />
          <br />
          {t("about-us.text8")}
        </p>
      </div>
      <div className="pt-10 pb-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl text-[#0E0458] font-semibold mb-8 text-center">
          {t("about-us.title2")}
        </h2>
        <div className="w-full h-[400px] sm:h-[600px] mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.7674488698435!2d-46.48899332397985!3d-23.46885145820135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce603019951649%3A0x3230c951c21ebb98!2sR.%20Jo%C3%A3o%20Alfredo%2C%20478%20-%20Cumbica%2C%20Guarulhos%20-%20SP%2C%2007224-120!5e0!3m2!1spt-BR!2sbr!4v1749675424556!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>
    </>
  );
}
