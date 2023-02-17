/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import ReactAudioPlayer from 'react-audio-player';
import { InstagramLogo, WhatsappLogo, Envelope } from "phosphor-react";
import church from '../../public/assets/church.png'

export default function Home() {
  // const [nome, setNome] = useState("")
  // const [cidade, setCidade] = useState("")
  // const [uf, setUf] = useState("")
  // const [mensagem, setMensagem] = useState("")

  //console.log(dbJson)

  return (
    <>
      <Head>
        <title>S&D</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='md:max-w-full md:h-screen'>
        {/**Nav Bar */}
        <nav className="bg-white border-b-2 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed w-[100%]">
          <div className='container flex flex-wrap items-center justify-between mx-auto '>
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              <a href='http://localhost:3000/'>Sarah & Dave</a>
            </span>
            <div className='hidden w-full md:block md:w-auto'>
              <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 
                              md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900
                              dark:border-gray-700'>
                <li>
                  <a
                    href="#HOME"
                    rel="prev"
                    className='block py-2 pl-3 pr-4 text-[#4A533A] font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#9E9F93] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg'>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#NOS"
                    className='block py-2 pl-3 pr-4 text-[#4A533A] font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#9E9F93] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg'>
                    Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#INFORMACOES"
                    className='block py-2 pl-3 pr-4 text-[#4A533A] font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#9E9F93] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg'>
                    Informações
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#LISTAPRESENTES"
                    className='block py-2 pl-3 pr-4 text-[#4A533A] font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#9E9F93] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg'>
                    Depoimentos
                  </a>
                </li> */}
                <li>
                  <a href="#CONTATO"
                    className='block py-2 pl-3 pr-4 text-[#4A533A] font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#9E9F93] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg'>
                    +
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section id="HOME" className="md:max-w-full md:h-screen mx-auto items-center bg-image-central bg-no-repeat bg-cover p-20">

          <div className='flex flex-col text-center mt-36 p-36 text-white drop-shadow-lg'>
            <strong className='text-7xl font-serif border-b-2 pb-2 '>Sarah & Dave</strong>
            <span className='text-2xl font-semibold pt-2'>14 ♥ 02 ♥ 2023</span>
          </div>
        </section>

        <section id='NOS' className=" md:max-w-full md:h-screen mx-auto bg-[#868D6B] p-20">
          <h1>Nossa História</h1>
          <div className='md:flex mt-12 items-start'>
            <img
              src='https://img.freepik.com/fotos-gratis/vista-frontal-do-homem-segurando-a-namorada-nas-costas-com-espaco-de-copia_23-2148714944.jpg?w=740&t=st=1676404686~exp=1676405286~hmac=6ec96a7a76f3e5f66f4b57096ab254eef36a877ddcdac15051e4769832622df9'
              alt="Casal"
              className='float-left rounded w-[300px] mr-4'
            />
            <p className="md:ml-5 md:p-2 text-justify md:text-xl font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </p>

          </div>
          <div className='md:flex mt- items-start'>
            <p className="md:mr-5 p-2 text-justify md:text-xl font-semibold">
              <img
              src='https://img.freepik.com/fotos-gratis/homem-sorridente-de-tiro-completo-segurando-mulher_23-2149690982.jpg?w=740&t=st=1676406550~exp=1676407150~hmac=a6876c546becd13781483155fa16b395214f45d4f36d3e25993542083407bc15'
              alt="Casal"
              className='float-right rounded w-[300px] ml-4 '
            />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            
            
            </p>
            

          </div>
        </section>


        <section id='INFORMACOES' className="md:max-w-full md:h-screen md:mx-auto items-center ">
          <div className='md:flex items-center '>
            <img
              src='https://img.freepik.com/fotos-gratis/homem-sorridente-de-tiro-completo-segurando-mulher_23-2149690982.jpg?w=740&t=st=1676406550~exp=1676407150~hmac=a6876c546becd13781483155fa16b395214f45d4f36d3e25993542083407bc15'
              alt="Casal"
              className='object-container md:h-screen md:w-[442px]'
            />

            <div className='flex flex-col items-center md:ml-60 '>
              <div className='flex flex-col items-center text-center '>
                <Image
                  src={church}
                  alt="Casal"
                  width={100}
                  height={100}
                  className=" p-4 "
                />

                <p className="text-2xl font-semibold">
                  Acompanhe a celebração do nosso casamento
                </p>
                <strong className="text-3xl pb-6 text-[#4A533A]" >AO VIVO!</strong>
                <span className="text-xl" >Dia 18/02/2023</span>
                <span className="text-xl p-2">Ás 19:00</span>
              </div>
              <a
                href='https://www.instagram.com/fi.lacerda/?igshid=YmMyMTA2M2Y%3D'
                target={'_blank'}
                rel="external noreferrer"
              >
                <div className='flex items-center p-2 md:p-4 gap-2 text-white bg-[#4A533A] rounded-lg'>
                  <InstagramLogo
                    size={42}
                    className=''
                  />
                  <div className="flex flex-col items-center border-l-2 p-2 md:p-4">
                    <strong>Será transmitida via instagram</strong>
                    <span>
                      Assista por aqui
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* <section id='LISTAPRESENTES' className="md:max-w-full md:h-screen mx-auto items-center p-20">
          <div className='flex flex-col text-center items-center p-5'>
            <h1 className='font-serif text-[#868D6B] font-bold text-3xl p-4'>
              Depoimentos
            </h1>

            <p className='font-bold p-2'>
            Que Deus abençoe está nova familia            
            </p>
            <span> - Shirley, Brumado-BA</span>
          </div>
          <div className='flex flex-col p-8'>
            <strong className=' mb-2 '>Deixe sua mensagem para nós:</strong>
            <form className='flex flex-col '>
              <input type='text' placeholder='Seu nome' 
                className='rounded-sm border-2 p-2 mb-2 ' 
                onChange={event =>setNome(event.target.value)}
              />
              <input type='text' placeholder='Sua cidade' className='rounded border-2 p-2 mb-2 ' 
                onChange={event =>setNome(event.target.value)}
              />
              <input type='text' placeholder='Seu estado' className='rounded border-2 p-2 mb-2 '
                onChange={event =>setNome(event.target.value)}
              />
              <textarea placeholder='Escreva sua mensagem aqui' className='rounded p-2 border-2 mb-2 ' 
                onChange={event =>setNome(event.target.value)}
              />
              <button type="submit" className='rounded-md border-2 p-2 bg-[#868D6B] text-white font-semibold uppercase' >Enviar</button>
            </form>

          </div>

        </section> */}

        <section id='CONTATO' className="md:max-w-full md:h-screen mx-auto items-center bg-image-central bg-no-repeat bg-cover p-20">
          <div className='bg-local md:bg-fixed items-center ' >
           <p className='text-white text-center font-serif mt-32 text-2xl'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
           </p>

          </div>
        </section>

        <footer className='md:flex gap-4 md:gap-8 p-2 md:p-4 md:mt-auto  items-center text-white text-sm bg-[#868D6B]'>
          <ReactAudioPlayer
            src="y2matemp3.online-192kbps-AyEGVFqb-ed-sheeran-perfect-lyrics.mp3"
            autoPlay
            controls
            className='ml-2 h-5'
            loop
          />
          <div className='flex gap-4 md:ml-auto'>
            <a className="">Desenvolvido por ARQY Tecnologia</a>
            <a className='' href="mailto:saionara.aguiargomes@gmail.com" target={'_blank'} rel="external noreferrer">
              <Envelope size={18} />
            </a>
            <a className='' href='https://wa.me/message/4LSJ4FBY6GDEE1' target={'_blank'} rel="external noreferrer">
              <WhatsappLogo size={18} />
            </a>
          </div>
        </footer>
      </div>


    </>
  )
}
