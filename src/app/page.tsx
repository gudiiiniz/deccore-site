import HomeGrid from "@/components/common/home-grid";

export default function Home() {
  return (
    <>
      <div className="relative flex items-center justify-center shadow-2xl">
        <div className="absolute z-50 text-center">
          <p className="text-white text-4xl font-bold text-shadow text-shadow-lg">
            Fabricação e Reforma de
          </p>
          <p className="text-white text-4xl font-bold text-shadow text-shadow-lg">
            Máquinas Serigráficas
          </p>
        </div>
        <video
          src="home-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[700px] object-fill"
        ></video>
      </div>

      <div className="w-2/3 mx-auto flex flex-row items-center justify-between mt-20 gap-20">
        <div className="w-1/2">
          <img src={"iso.webp"} alt="iso" />
          <h2 className="text-2xl font-bold mt-10">
            Reconhecidos com a Certificação ISO 9001 🏆
          </h2>
          <p className="mt-2 text-justify">
            É com enorme orgulho que anunciamos um marco histórico para a
            Deccore Serigrafia e para o setor de máquinas serigráficas no
            Brasil. Somos a primeira empresa do segmento a conquistar a
            certificação ISO 9001, um reconhecimento internacional que valida
            nosso compromisso com a qualidade, eficiência e satisfação dos
            nossos clientes.
            <br />
            <br />A ISO 9001 é um padrão globalmente reconhecido que certifica
            empresas com processos de gestão de qualidade robustos e bem
            estruturados. Essa conquista reflete nosso empenho em oferecer
            máquinas serigráficas de alta performance, com foco na inovação e na
            melhoria contínua.
            <br />
            <br />
            <b>O que isso significa para você?</b>
            <br />
            <br />
            <b>Mais confiança</b>✅<br /> Produtos com qualidade consistente.
            <br />
            <br />
            <b>Excelência garantida</b>✅<br /> Alinhados às melhores práticas
            internacionais.
            <br />
            <br />
            <b>Compromisso com o futuro</b>✅<br /> Soluções que atendem às suas
            necessidades hoje e sempre.
            <br />
            <br />
            <br />A conquista da ISO 9001 é resultado da dedicação da nossa
            equipe e da confiança de nossos clientes. Obrigado por fazer parte
            dessa história!
          </p>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img
            src={"home-certificate.png"}
            alt="home-certificate"
            className="h-full object-fill"
          />
        </div>
      </div>

      <div className="w-full bg-gray-100 pt-20">
        <HomeGrid />
      </div>

    </>
  );
}
