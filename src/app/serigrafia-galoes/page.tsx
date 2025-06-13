"use client";
import Machines from "@/components/common/machines";
import { useTranslation } from "react-i18next";

export default function ScreenPrintingGallons() {
  const { t } = useTranslation();
  return (
    <Machines
      bannerSrc={"/gallons/banner.jpg"}
      title={
        <p>
          {t("gallons.title")} <br />
          {t("gallons.title2")}
        </p>
      }
      subtitle={t("gallons.subtitle")}
      model={"XXXX"}
      modelType={t("machines.type-semiautomatic")}
      productivity={"500 à 700 P/H"}
      description={t("gallons.desc")}
      imagesSrc={["/gallons/photo1.jpg"]}
    />
  );
}
