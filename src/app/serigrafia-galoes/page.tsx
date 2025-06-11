import Machines from "@/components/common/machines";

export default function ScreenPrintingGallons() {
  return (
    <Machines
      bannerSrc={"/gallons/banner.jpg"}
      title={"Máquina Serigráfica para gravação em galão de 20 litros"}
      subtitle={"Linha Semiautomática"}
      model={"XXXX"}
      modelType={"Semiautomática"}
      productivity={"500 à 700 P/H"}
      description={
        "Equipamento para gravação de galões de 20 Litros. A embalagem pode ser gravada em duas etapas, sendo uma imagem frontal e a outra do verso."
      }
      imagesSrc={[
        "/gallons/photo1.jpg",
        "/gallons/photo1.jpg",
        "/gallons/photo1.jpg",
        "/gallons/photo1.jpg",
      ]}

    />
  );
}