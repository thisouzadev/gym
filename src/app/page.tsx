import Image from "next/image";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

export default function Home() {
  return (
    <main>
      <section className="flex justify-center items-center relative w-full h-[800px]">
        <Image
          className="object-cover"
          quality={100}
          priority={true}
          fill={true}
          alt=""
          src={"/Rectangle.png"}
        />
        <div className="absolute text-center text-[#FCFCFC]">
          <h1 className="font-bold text-7xl">COMECE SUA</h1>
          <h1 className="font-bold text-7xl">
            JORNADA <strong className="text-[#55C5E9]">HOJE</strong>
          </h1>
          <p className="text-base font-medium mt-4	">
            FlexZone é uma academia no centro de São Paulo. Venha se juntar a
            nós e comece a se aproximar do corpo dos seus sonhos.
          </p>
          <button className="bg-[#55C5E9] text-black font-medium text-base px-11 py-3 rounded-md mt-4 hover:cursor-pointer">
            Saiba Mais
          </button>
        </div>
        <section className="absolute mt-[700px] w-full h-[100px] bg-[rgba(0,0,0,0.3)]">
          <div className="flex justify-evenly">
            <Image
              className="object-contain"
              quality={100}
              priority={true}
              height={24}
              width={144}
              alt=""
              src={"/6292330cad752419f8ecfe74.png"}
            />
            <Image
              className=""
              quality={100}
              priority={true}
              height={24}
              width={144}
              alt=""
              src={"/rogue-og-removebg-preview.png"}
            />
            <Image
              className="object-contain"
              quality={100}
              priority={true}
              height={24}
              width={144}
              alt=""
              src={"/f26b3f87d75a110e1542ad10e45888a54de5878d.png"}
            />
          </div>
        </section>
      </section>
      <section className="flex justify-center mt-36">
        <div className="flex flex-col text-[#FCFCFC] gap-2">
          <h1 className="font-medium text-xl text-[#55C5E9]">Descubra mais</h1>
          <h1 className="font-medium text-5xl">Sobre Nós</h1>
          <p className="font-normal text-base h-[336px] w-[544px]">
            Somos uma academia focada na comunidade, localizada no coração do
            centro da cidade. Nossa equipe se dedica a ajudar pessoas de todos
            os níveis de condicionamento físico a atingir seus objetivos e levar
            uma vida mais saudável e ativa. Na FlexZone, acreditamos no poder do
            exercício para transformar o corpo e a mente. É por isso que
            oferecemos uma ampla gama de equipamentos e aulas para atender a
            todas as necessidades e preferências de condicionamento físico. De
            levantamento de peso a cardio e ioga, temos algo para todos. Nossa
            equipe de instrutores certificados está aqui para apoiá-lo e
            motivá-lo a cada passo do caminho. Esteja você apenas começando sua
            jornada de condicionamento físico ou procurando levar seu
            treinamento para o próximo nível, temos o conhecimento e a
            experiência para ajudá-lo a ter sucesso.
          </p>
          <button className="bg-[#55C5E9] text-black font-medium text-base px-11 py-3 rounded-md mt-4 hover:cursor-pointer">
            Saiba Mais
          </button>
        </div>
        <div className="flex ml-24">
          <Image
            quality={100}
            priority={true}
            width={485}
            height={515}
            alt=""
            src={"/Rectangle 1.svg"}
          />
        </div>
      </section>
      <section className="flex justify-center text-[#FCFCFC] uppercase">
        <div className="flex justify-center items-center content-center flex-col mt-36">
          <h1 className="font-medium text-xl text-[#55C5E9]">
            estamos bem preparados para todos
          </h1>
          <h2 className="font-medium text-6xl">Por que escolher-nos?</h2>
        </div>
      </section>
      <section className="flex justify-center uppercase">
        <div className="flex flex-wrap justify-center">
          <div>
            <div className="flex">
              <Image width={64} height={64} src="/muscleBlue.png" alt="" />
              <h1 className="font-medium text-4xl w-[500px] text-[#FCFCFC]">
                verdadeira atmosfera de academia
              </h1>
            </div>
            <p className="font-normal ml-16 mb-16 text-base max-h-32 max-w-md text-[#fcfcfc9c]">
              Seja você um iniciante ou um atleta experiente, você se sentirá em
              casa em nosso ambiente inclusivo e acolhedor. Acreditamos que uma
              atmosfera de verdadeira academia é aquela que promove o
              crescimento e o desenvolvimento pessoal, e trabalhamos arduamente
              para criar esse tipo de cultura todos os dias.
            </p>
          </div>
          <div>
            <div className="flex">
              <Image width={64} height={64} src="/muscleBlue.png" alt="" />
              <h1 className="font-medium text-4xl w-[500px] text-[#FCFCFC]">
                todos os tipos de equipamentos
              </h1>
            </div>
            <p className="font-normal text-base ml-16 max-h-32 max-w-md text-[#fcfcfc9c]">
              Nossa academia está completamente equipada com os mais recentes e
              melhores equipamentos fitness. Desde máquinas de cardio até pesos
              livres, temos tudo o que você precisa para alcançar seus objetivos
              fitness. Se você prefere levantar, correr ou fazer algum
              treinamento intervalado de alta intensidade, encontrará o
              equipamento perfeito para seus treinos.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div>
            <div className="flex">
              <Image width={64} height={64} src="/muscleBlue.png" alt="" />
              <h1 className="font-medium text-4xl  text-[#FCFCFC]">
                instrutores experientes
              </h1>
            </div>
            <p className="font-normal text-base ml-16 mb-16 max-h-32 max-w-md text-[#fcfcfc9c]">
              Nossos instrutores são realmente incríveis! Com anos de
              experiência e uma paixão pelo fitness, eles estão dedicados a
              ajudar nossos membros a alcançarem seus objetivos. Se você quer
              perder peso, ganhar músculos ou simplesmente melhorar sua saúde e
              bem-estar em geral, nossos instrutores estão aqui para ajudar.
            </p>
          </div>
          <div>
            <div className="flex">
              <Image width={64} height={64} src="/muscleBlue.png" alt="" />
              <h1 className="font-medium text-4xl w-[600px] text-[#FCFCFC]">
                Nossa academia possui um ambiente acolhedor e profissional
              </h1>
            </div>
            <p className="font-normal text-base ml-16 max-h-32 max-w-md text-[#fcfcfc9c]">
              Nossa academia se orgulha de ser um lar longe de casa para muitos
              atletas profissionais. Nós entendemos as exigências de
              treinamentos intensos e competições, e nos esforçamos para
              fornecer as melhores instalações e suporte possível para ajudar
              nossos membros atletas a atingir seu máximo potencial.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center text-[#FCFCFC]">
        <div className="flex justify-center items-center content-center flex-col mt-36 mb-12">
          <h1 className="font-medium text-xl text-[#55C5E9]">
            PRIMEIRO TREINO GRÁTIS
          </h1>
          <h2 className="font-medium text-6xl">PLANOS</h2>
        </div>
      </section>
      <section className="flex justify-center text-[#FCFCFC]">
        <div className="flex justify-center items-center gap-8 ">
          <div className="flex flex-col justify-center items-center content-center text-center bg-[#FFFFFF1A] rounded-lg h-[526px] w-[352px]">
            <h1 className="m-8 font-medium text-3xl">BÁSICO</h1>
            <h2 className="m-8 font-semibold text-5xl ">
              R$20
              <strong className="font-normal text-base text-[#FCFCFCCC]">
                /mes
              </strong>
            </h2>
            <ul className="list-disc marker:text-2xl ml-10 p-0 list-image-[url(/aa.svg)]">
              <li className="mb-4">
                <p>Acesso a todos os equipamentos da Academia</p>
              </li>
              <li className="mb-4">
                <p>Tempo de treinamento ilimitado</p>
              </li>
              <li className="mb-4">
                <p>1 entrada gratuita para um amigo a cada mês</p>
              </li>
              <li className="mb-4">
                <p>Descontos em aulas fitness em grupo</p>
              </li>
            </ul>
            <button className="flex justify-center rounded-lg border border-white px-20 py-2 ">
              Comprar Online
            </button>
          </div>
          <div className="flex flex-col justify-center items-center content-center text-center bg-[#26ADD9] rounded-lg h-[590px] w-[352px]">
            <h1 className="m-4 font-semibold text-3xl">PLUS</h1>
            <h2 className="mb-8 font-semibold text-5xl ">
              R$20
              <strong className="font-normal text-base text-[#FCFCFCCC]">
                /mes
              </strong>
            </h2>
            <ul className="list-disc marker:text-2xl ml-10 p-0 list-image-[url(/bb.svg)]">
              <li className="mb-4">
                <p>Todos os benefícios do BÁSICO</p>
              </li>
              <li className="mb-4">
                <p>Programas de treinamento especializados</p>
              </li>
              <li className="mb-4">
                <p>Dua sessões de treinamento pessoal gratuitas por mês</p>
              </li>
              <li className="mb-4">
                <p>Pré-encomendas em nossa loja online</p>
              </li>
              <li className="mb-4">
                <p>Descontos em aulas fitness em grupo</p>
              </li>
              <li className="mb-4">
                <p>Desconto em nosso nutricionista</p>
              </li>
              <li className="mb-4">
                <p>Acesso aos nossos eventos exclusivos</p>
              </li>
            </ul>
            <button className="flex justify-center bg-white rounded-lg border text-base font-semibold text-black px-20 py-2 ">
              Comprar Online
            </button>
          </div>
          <div className="flex flex-col justify-center items-center content-center text-center bg-[#FFFFFF1A] rounded-lg h-[526px] w-[352px]">
            <h1 className="m-8 font-medium text-3xl">VIP</h1>
            <h2 className="m-8 font-semibold text-5xl ">
              R$20
              <strong className="font-normal text-base text-[#FCFCFCCC]">
                /mes
              </strong>
            </h2>
            <ul className="list-disc marker:text-2xl ml-10 p-0 list-image-[url(/aa.svg)]">
              <li className="mb-4">
                <p>Todos os benefícios do PLUS</p>
              </li>
              <li className="mb-4">
                <p>Sessões ilimitadas de treinamento exclusivo</p>
              </li>
              <li className="mb-4">
                <p>Descontos VIP em todos os serviços e produtos</p>
              </li>
              <li className=" mb-14">
                <p>Acesso a todos os eventos exclusivos</p>
              </li>
            </ul>
            <button className="flex justify-center rounded-lg border border-white px-20 py-2 ">
              Comprar Online
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
