"use client";
import Machines from "@/components/common/machines";
import { useTranslation } from "react-i18next";

export default function UniversalScreenPrinter() {
  const { t } = useTranslation();
  return (
    <Machines
      bannerSrc={"/universal-screen-printer/banner.webp"}
      title={t("universal.title")}
      subtitle={t("universal.subtitle")}
      model={"MSU"}
      modelType={t("machines.type-semiautomatic")}
      productivity={"700 à 1000 P/H"}
      description={t("universal.desc")}
      imagesSrc={[
        "/universal-screen-printer/photo1.jpg",
        "/universal-screen-printer/photo2.jpg",
        "/universal-screen-printer/photo3.jpg",
        "/universal-screen-printer/photo4.jpg",
      ]}
    />
  );
}
