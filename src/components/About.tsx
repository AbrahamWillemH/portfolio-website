import { motion } from "framer-motion";

export default function About() {
    return (
      <motion.section transition={{duration: 1}} initial={{opacity:0, y:50}} whileInView={{opacity: 1, y:0}} id="about" className="flex flex-col min-h-170 items-center justify-center">
        <div className="flex flex-col text-center px-5 w-3/4">
          <h2 className="text-5xl mt-20 md:text-6xl font-semibold">Abraham Willem Hersubagyo</h2>
          <p className="mt-6">a passionate undergraduate IT student with experience in building web applications and other IT roles.</p>
          <div className="grid grid-cols-2 gap-10 my-10 md:grid-cols-7 md:p-5 md:mt-10 place-content-between">
            <div className="flex flex-col items-center text-center">
              <img src="website.gif" alt="website gif" className="w-10"/>
              <p className="mt-6 font-semibold">Full Stack Web Developer</p>
              <p className="mt-2">I'm experienced in Building dynamic, scalable web applications.</p>
            </div>
            <div className=" justify-center items-center hidden md:flex">
              <div className="w-0.5 h-full bg-black"></div>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="ml.gif" alt="website gif" className="w-10"/>
              <p className="mt-6 font-semibold">Machine Learning Developer</p>
              <p className="mt-2">Implementing AI solutions for real-world problems.</p>
            </div>
            <div className="justify-center items-center hidden md:flex">
              <div className="w-0.5 h-full bg-black"></div>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="data.gif" alt="website gif" className="w-10"/>
              <p className="mt-6 font-semibold">Data Scientist</p>
              <p className="mt-6 font-semibold"></p>
              <p className="mt-2">Analyzing data to drive insights and decision-making.</p>
            </div>
            <div className="justify-center items-center hidden md:flex">
              <div className="w-0.5 h-full bg-black"></div>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="computer.gif" alt="website gif" className="w-10"/>
              <p className="mt-6 font-semibold">Other IT Roles</p>
              <p className="mt-6 font-semibold"></p>
              <p className="mt-2">Diverse expertise in software development and automation.</p>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }
