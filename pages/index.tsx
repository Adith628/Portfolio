import Head from 'next/head';
import {BsFillMoonStarsFill} from "react-icons/bs";
import{
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import AOS from "aos";

import pic from "../public/adith.png";
import card from "./projects";
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";

export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration:1500,
      easing:'ease-out'
    })
  })
  const[darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark":""}>
      <Head>
        <title >Adithyan T</title>

		

        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main data-aos="fade-in" className="font-mono mt-0 pt-0 bg-gradient-to-b from-white to-teal-500 px-10 overflow-visible pb-36 dark:bg-gradient-to-b dark:from-black dark:via-teal-900 dark:to-black ">
        <section className=" min-h-screen pb-5">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className=' font-extrabold opacity-80 font-anton text-2xl dark:text-white'>
              ADiTH</h1>
            <ul className="flex items-center " >
              <li className='dark:text-teal-300'>
                <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)}
                 className="cursor-pointer" /> 
              </li>
              <li >
                <a href="https://drive.google.com/file/d/1ht1tZJi7fmGOGXBIfIiqyLnmp_n08ngU/view?usp=sharing" 
                className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' 
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 '>
              
            <p className='text-4xl  text-gray-700 dark:text-white dark:drop-shadow-[0px_0px_6px_rgba(225,225,225,0.2)]'> 
             Hi,<span className='font-extrabold text-4xl font-mono'>I</span>&apos;m</p>
              
            <h2 id='name' className='Adith text-8xl font-extrabold py-2 drop-shadow-[2px_2px_3px_rgba(0,0,0,0.2)] font-sans text-teal-600 dark:drop-shadow-[0px_0px_3.5px_rgba(225,225,225,0.35)]'>
            
              ADITHYAN T
              </h2>
            <h2 id='h3' className='text-2xl py-2 dark:text-gray-100 dark:drop-shadow-[0px_0px_6px_rgba(225,225,225,0.35)]'>
              Front End Developer</h2>
            <p className='font-mono text-lg py-5 leading-8 text-gray-800 dark:text-white'>
              Engineering Student from College of Engineering Trivandrum.
              A passionate Frontend developer who always looks forward
              for new opportunities to collaborate and do projects... 
            </p>
          </div>
          <div className='hover:cursor-pointer text-3xl flex justify-center gap-16 text-gray-700 dark:text-white'>  
            <a href="https://twitter.com/Adithya07560528">
              <AiFillTwitterCircle className='icons hover:text-teal-500'/>
            </a>
            <a href="https://www.linkedin.com/in/adithyan-t-ba37b9220/">
              <AiFillLinkedin className='icons hover:text-teal-500'/>
            </a>
            <a href="https://www.instagram.com/a_d_i_t_h_6_2_8/">
              <AiFillInstagram className='icons hover:text-teal-500'/>
            </a>
          </div>
		   <div data-aos='zoom-out' data-aos-delay="100" data-aos-duration="1500" id='img' className='circle shadow-2xl relative mx-auto bg-gradient-to-b from-teal-500  to-teal-200 rounded-full w-80 h-80 mt-10'>
			   <Image  className=' drop-shadow-2xl' src={pic} layout="fill" objectFit='contain' alt={'image'} />
		   </div>
      </section>
      <section className='flex justify-center flex-wrap gap-12  my-10 '>
        <section className='flex-col justify-center self-center max-w-2xl  my-4 mb-10'>
          <h4 className='text-4xl  font-bold my-4 dark:text-teal-400'>About Me</h4>
            <p className=' text-xl  text-start  dark:text-white '>
              &nbsp;&nbsp; &nbsp;&nbsp; Hi there! I&apos;m a curious and passionate <span className='text-teal-700 dark:text-teal-300'>front-end react developer</span>  with a love for crafting visually stunning and user-friendly websites.
                My goal is to turn complex concepts into simple and intuitive experiences for users.
              I strive to stay up-to-date with the latest web development technologies and techniques to deliver top-notch results. Let&apos;s create something amazing together.
            </p>
        </section>
        <div className='w-1 bg-slate-600 dark:bg-teal-300 h-96 rounded-lg self-center' ></div>
        <section className=' flex justify-center m-8 '>
            <div className='skill flex-col dark:border-none bg-white text-center  dark:bg-white dark:bg-opacity-10 dark:shadow-[0px_0px_8px_rgba(225,225,225,0.5)] gap-5 p-5 border-2 rounded-2xl'>
              <h5 className='text-4xl font-semibold dark:text-teal-400 '>My Skills</h5>
              <li>
                <h3 className='dark:text-white' >React</h3>
                <span id="bar"><span className='react'></span></span>
              </li>
              <li>
                <h3 className='dark:text-white'>html</h3>
                <span id="bar" className=''><span className='html '></span></span>
              </li>
              <li>
                <h3 className='dark:text-white'>Css</h3>
                <span id="bar" ><span className='css'></span></span>
              </li>
              <li>
                <h3 className='dark:text-white'>Javascript</h3>
                <span id="bar"><span className='javascript'></span></span>
              </li>
              <li>
                <h3 className='dark:text-white' >Java</h3>
                <span id="bar"><span className='java'></span></span>
              </li>

            </div>
        </section>
      </section>
      <section>

        <div>
          <h1 className='text-5xl font-bold text-center p-4 mt-5 text-gray-900 dark:text-white '>
            PROJECTS</h1>
          <div id='hello' className='flex-row  overflow-visible '>
            {card()}
          </div>
        </div>
        <div className='z-500'>
            <p className='text-2xl font-semibold font-400 py-1 dark:text-white'>Services I offer</p>
            <p className='text-md leading-8 text-gray-800 dark:text-gray-400'>I am intrested in doing collaborate projects and 
              Do provide Services based on Front end development</p>
        </div>
      </section>
      <section className='mt-8 '>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
    </section>
    </main>
  </div>
  )
} 
