import Machines from "@/components/common/machines";

export default function DryingOven() {
  return (
    <Machines
      bannerSrc={"/drying-oven/banner.jpg"}
      title={"Estufa de Secagem UV"}
      subtitle={"Linha Semiautomática"}
      model={"2515"}
      modelType={"Semiautomática"}
      productivity={"2000 à 3000 P/H"}
      description={
        "A estufa de secagem é responsável por realizar a secagem de emulsões serigráficas, na superfície de embalagens em vidro, PE e PP."
      }
      imagesSrc={[
        "/drying-oven/photo1.jpg",
        "/drying-oven/photo2.jpg",
        "/drying-oven/photo3.jpg",
        "/drying-oven/photo4.jpg",
      ]}

    />
  );
}