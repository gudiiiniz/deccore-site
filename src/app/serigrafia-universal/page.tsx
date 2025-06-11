import Machines from "@/components/common/machines";

export default function UniversalScreenPrinter() {
  return (
    <Machines
      bannerSrc={"/universal-screen-printer/banner.webp"}
      title={"Máquina Serigráfica Universal"}
      subtitle={"Linha Semiautomática"}
      model={"MSU"}
      modelType={"Semiautomática"}
      productivity={"700 à 1000 P/H"}
      description={
        "Máquina Serigráfica. Semiautomática. Equipamento para gravação de objetos, oval, plano, cilíndrico e cônico."
      }
      imagesSrc={[
        "/universal-screen-printer/banner.webp",
        "/universal-screen-printer/banner.webp",
        "/universal-screen-printer/banner.webp",
        "/universal-screen-printer/banner.webp",
      ]}
    />
  );
}
