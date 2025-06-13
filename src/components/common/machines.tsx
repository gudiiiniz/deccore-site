import Image from "next/image";

interface Props {
  bannerSrc: string;
  title: string;
  subtitle: string;
  model: string;
  modelType: string;
  productivity: string;
  description: string;
  imagesSrc: string[];
}

export default function Machines({
  bannerSrc,
  title,
  subtitle,
  model,
  modelType,
  productivity,
  description,
  imagesSrc,
}: Props) {
  return (
    <>
      <div className="w-full h-[300px] sm:h-[600px] relative">
        <Image src={bannerSrc} alt={bannerSrc} fill className="object-cover" />
      </div>

      <section className="w-full px-4 max-w-6xl mx-auto pt-20 pb-20 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-[#0E0458] text-2xl text-center font-semibold">
            {title}
          </h2>
          <p className="pt-1 text-xl font-semibold text-center">{subtitle}</p>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full text-sm min-w-[300px]">
              <thead>
                <tr className="bg-blue-500 text-white text-left">
                  <th className="px-4 py-2 font-semibold text-center">Modelo</th>
                  <th className="px-4 py-2 font-semibold text-center">Tipo</th>
                  <th className="px-4 py-2 font-semibold text-center">Produtividade</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2 font-bold text-black bg-gray-100 text-center">
                    {model}
                  </td>
                  <td className="px-4 py-2 text-center">{modelType}</td>
                  <td className="px-4 py-2 text-center">{productivity}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="w-full pt-10 text-center text-gray-600 text-sm">{description}</p>
        </div>
      </section>

      <section
        className="w-full px-4 pt-20 pb-20"
        style={{
          boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.1)",
        }}
      >
        <h2 className="text-[#0E0458] text-2xl text-center font-semibold">
          Portifólio do Equipamento
        </h2>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 justify-items-center">
          {imagesSrc.map((i, idx) => (
            <Image
              key={idx}
              src={i}
              alt={i}
              width={1000}
              height={1000}
              className="rounded-sm w-72 h-72 cursor-pointer hover:scale-105 transition-transform duration-300 object-cover"
            />
          ))}
        </div>
      </section>
    </>
  );
}
