import Machines from "@/components/common/machines";

export default function UV() {
  return (
    <Machines
      bannerSrc={"/uv/banner.jpg"}
      title={"Máquina Serigráfica Automática com Secagem UV (01 Cor)"}
      subtitle={"Linha Automática"}
      model={"DECC M.S.C.U.V 1C"}
      modelType={"Automática"}
      productivity={"2500 à 3300 P/H"}
      description={
        "Frascos cilíndricos ou cônicos com diâmetro máximo 90mm, e altura máxima até 270 mm. Descritivo: A máquina serigráfica é responsável por realizar a impressão permeográfica (texto ou figura) em superfícies de diversos tipos de embalagens de vidro, PE e PP."
      }
      imagesSrc={[
        "/uv/photo1.jpg",
        "/uv/photo2.jpg",
        "/uv/photo3.jpg",
        "/uv/photo4.jpg",
      ]}
    />
  );
}
