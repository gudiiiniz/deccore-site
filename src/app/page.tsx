import HomeGrid from "@/components/common/home-grid";
import HomeVideos from "@/components/common/home-videos";

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

      <section className="w-2/3 mx-auto flex flex-row items-center justify-between mt-20 gap-20">
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
      </section>

      <div className="w-full bg-gray-100 py-20">
        <HomeGrid />
      </div>

      <section className="w-2/3 mx-auto flex flex-row items-start justify-between my-20 gap-20">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">Sobre Nós</h2>
          <p className="mt-10 text-justify">
            A Deccore Serigrafia foi fundada no ano de 2000 como empresa de
            representações e revenda de produtos para serigrafia. Em 2014,
            transformou-se em indústria, justamente quando foi detectada, pelo
            seu proprietário, a necessidade de atender alguns clientes que
            precisavam de reforma e manutenção em suas maquinas serigráficas.
            <br />
            <br />
            Com o aumento da demanda, passamos a fabricar e fornecer peças e
            equipamentos para o mercado serigráfico em geral, e logo vimos a
            oportunidade de fabricar máquinas novas. Hoje, além de darmos
            continuidade ao nosso trabalho de assistência técnica e reforma,
            também fabricamos máquinas para diversos segmentos. A Deccore
            Serigrafia possui tecnologia e experiência comprovada no atendimento
            ao mercado serigráfico, trabalhando fortemente em Projetos Especiais
            e de Automação, conforme necessidades e desafios apresentados pelos
            nossos clientes.
            <br />
            <br />
            Nossa linha de fabricação dispõe de Máquinas Automáticas e Semi
            Automáticas, fabricação de Fornos U.V., Flamadores, Alimentadores,
            ferramentais diversos e peças em geral.
            <br />
            <br />
            Nossos colaboradores possuem longa experiência na fabricação de
            máquinas e buscamos, constantemente, atender às necessidades do
            mercado serigráfico, utilizando as mais modernas e avançadas
            tecnologias disponíveis. Estamos capacitados para desenvolver
            projetos de acordo com o perfil e a real necessidade exigida pelo
            segmento serigráficos.
            <br />
            <br />A Deccore Serigrafia é uma empresa nacional que desenvolveu
            alto nível de expertise para produzir e reformar máquinas
            serigráficas de pequeno, médio e grande porte, graças à sua
            metodologia de trabalho que possibilita total controle e
            acompanhamento em todas as etapas do processo construtivo.
          </p>
        </div>
        <div className="w-1/2">
          <div>
            <h2 className="text-2xl font-bold">Impressora 3D já em Operação!</h2>
            <p className="mt-10 text-justify">
              Estamos empolgados em anunciar que a Deccore Serigrafia agora
              conta com uma impressora 3D de última geração, já em operação em
              nossa empresa! Com esta aquisição, estamos prontos para levar
              nossos serviços a um novo patamar de inovação e personalização.
              <br />
              <br /> A nova impressora 3D nos permite criar peças e protótipos
              com alta precisão e detalhamento, atendendo às necessidades
              específicas de cada cliente. Seja para o desenvolvimento de novos
              produtos ou para a personalização de projetos existentes, estamos
              preparados para oferecer soluções únicas e criativas.
              <br />
              <br /> Convidamos você a descobrir como essa tecnologia pode
              beneficiar seu próximo projeto. Entre em contato conosco para
              saber mais sobre como podemos transformar suas ideias em realidade
              com a qualidade e excelência que você já conhece.
            </p>
          </div>
        </div>
      </section>

      <HomeVideos />

    </>
  );
}
