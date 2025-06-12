import Machines from "@/components/common/machines";

export default function Flamer() {
  return (
    <Machines
      bannerSrc={"/flamer/banner.webp"}
      title={`Flamador com Bomba d’Água`}
      subtitle={"Linha Manual"}
      model={"450CBA"}
      modelType={"Manual"}
      productivity={"2000 P/H"}
      description={
        "Flamador de embalagens, utilizado para fazer o tratamento de superfície em embalagens de PE e PP por meio de chamas."
      }
      imagesSrc={[
        "/flamer/photo1.jpg",
        "/flamer/photo2.jpg",
        "/flamer/photo3.jpg",
        "/flamer/photo4.jpg",
      ]} 
    />
  );
}
