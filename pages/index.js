import Head from 'next/head'
import {HiMoon} from 'react-icons/hi'
import Image from "next/image";
import { AiFillLinkedin, AiFillBehanceSquare } from "react-icons/ai";
import codingImg from '../public/codingImg.svg'
import rIcon from '../public/react-icon.svg'
import NxIcon from '../public/Nextjs-logo.svg'
// import wflow from "../public/Webflow.svg";
import fig from "../public/figma.svg";
import tail from "../public/tailwind.svg";
import http from "../public/html.svg"
import bbl from "../public/bubble.png"
import notflix from "../public/Notflix.png"
import currencycon from "../public/currencyConv.png"
import restcount from "../public/restcountries.png"
import weath from "../public/Weather.png"
import {useState} from 'react'









export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Presh-Portfolio</title>
        <meta name="description" content="This is my react portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen ">
          <nav className="py-10 flex justify-between">
            <h1 className="text-xl font-medium ">
              Presh
              <span className="text-teal-700 dark:text-teal-300">Lele</span>
            </h1>
            <ul className="flex items-center">
              <li>
                <HiMoon
                  className="cursor-pointer lg:text-3xl text-xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1krvFjIhnk6yUiDNltk-BJrKrh5dNHZNP/view?usp=sharing"
                  className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h3 className="text-2xl text-gray-700 dark:text-slate-300">
              Hi I&apos;m
            </h3>
            <h1 className="text-5xl py-2 font-medium text-teal-700 md:text-6xl dark:text-teal-300">
              Emmanuel Mensah
            </h1>
            <h3 className="text-2xl py-4 text-gray-700 md:text-3xl dark:text-slate-200">
              A Front Developer & UI/UX Designer
            </h3>
            <p className=" py-2 leading-7 text-gray-700 text-lg md:text-xl max-w-xl mx-auto dark:text-slate-300">
              with experience in building Web Applications/products using
              ReactJs. Sometimes I&apos;m a Webflow/Bubble Developer
            </p>
            <div className="flex justify-center text-4xl gap-5 py-3 text-gray-600">
              <a
                href="https://www.behance.net/emmanuemensah2"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <AiFillBehanceSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-mensah-141b42191/"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-3xl text-center text-gray-700 dark:text-slate-200">
              What I do?
            </h3>
            <Image alt="/" src={codingImg} width="300" height="300" />
            <div className="">
              {/* <h3>Front End Development</h3> */}
              <p className="text-lg">
                I build aesthetic websites and provide frontend solutions while
                optimizing for great user experience. I also create web and
                mobile interfaces and have had the opportunity to usen
                lowcode/no-code tools to create simple function apps that have
                to meet a tight business requirement. I&apos;m constantly
                learning modern frameworks to improve my skillset
              </p>
              <div className="lg:flex  justify-center gap-6 py-6  mx-auto text-center flex-wrap flex ">
                <div>
                  <Image src={rIcon} width={50} height={50} alt="" />
                  <h5>ReactJs</h5>
                </div>
                <div>
                  <Image src={NxIcon} width={50} height={50} alt="" />
                  <h5>NextJs</h5>
                </div>
                <div>
                  <Image src={fig} width={50} height={50} alt="" />
                  <h5>Figma</h5>
                </div>
                <div>
                  <Image src={tail} width={50} height={50} alt="" />
                  <h5>TailwindCSS</h5>
                </div>
                <div>
                  <Image src={bbl} width={50} height={50} alt="" />
                  <h5>Bubble</h5>
                </div>
                <div>
                  <Image src={http} width={50} height={50} alt="" />
                  <h5>HTML5</h5>
                </div>
                {/* <div>
                  <Image src={wflow} width={50} height={50} alt="" />
                  <h5>Webflow</h5>
                </div> */}
              </div>
            </div>
          </div>

          <h3 className="text-3xl py-3 text-center ">Projects</h3>
          <div className="text-center flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="p-6 rounded-lg overflow-hidden shadow bg-slate-200/100">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://movie-database1-git-master-preshlele.vercel.app/"
                className="cursor-pointer "
              >
                <h1 className="text-2xl font-semibold text-gray-800">
                  NotFlix
                </h1>
                <h3 className="text-md my-3 text-gray-700">
                  Notflix is a moviehub that displays information of current
                  movies to user
                </h3>
                <div>
                  <Image
                    src={notflix}
                    width={500}
                    height={300}
                    alt="Notnetflix is a moviehub"
                  />
                </div>
              </a>
            </div>
            <div className="p-6 rounded-lg overflow-hidden shadow bg-slate-200/100">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://restcountries4u.netlify.app/"
                className="cursor-pointer "
              >
                <h1 className="text-2xl font-semibold text-gray-800">
                  RestCountries
                </h1>
                <h3 className="text-md my-3 text-gray-700">
                  This is a website that displays information of various
                  countries in the world.
                </h3>
                <div>
                  <Image
                    src={restcount}
                    width={500}
                    height={300}
                    alt="Notnetflix is a moviehub"
                  />
                </div>
              </a>
            </div>
            <div className="p-6 rounded-lg overflow-hidden shadow bg-slate-200/100">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://weather-app-v1-three.vercel.app/"
                className="cursor-pointer "
              >
                <h1 className="text-2xl font-semibold text-gray-800">
                  Weather App
                </h1>
                <h3 className="text-md my-3 text-gray-700">
                  Gives weather information based on your location
                </h3>
                <div>
                  <Image
                    src={weath}
                    width={500}
                    height={300}
                    alt="Notnetflix is a moviehub"
                  />
                </div>
              </a>
            </div>

            <div className="p-6 rounded-lg overflow-hidden shadow bg-slate-200/100">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://next-login-form.vercel.app/"
                className="cursor-pointer "
              >
                <h1 className="text-2xl font-semibold text-gray-800">
                  Currency Converter Login
                </h1>
                <h3 className="text-md my-3 text-gray-700">
                  Login interface for a currency converter. Buttons do not work.
                </h3>
                <div>
                  <Image
                    src={currencycon}
                    width={500}
                    height={300}
                    alt="Notnetflix is a moviehub"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
