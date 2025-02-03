import {motion} from 'framer-motion'

export default function Experiences() {
  return (
    <section id="experiences" className="flex flex-col min-h-screen items-center justify-center py-24 bg-slate-200">
      <motion.div transition={{duration: 1}} initial={{opacity:0, y:50}} whileInView={{opacity: 1, y:0}} className='flex flex-col text-center px-5 w-3/4'>
        <div>
          <h2 className="text-5xl font-semibold underline">Experiences</h2>
          <p className="mt-6">Below are my experiences during my journey in Machine Learning, <br></br>Software / Web Application, and other IT Roles.</p>
          <div className="grid gap-10 mt-10 md:grid-cols-3 md:p-5 md:mt-10 md:place-content-between md:gap-8">
            <div className="flex flex-col items-center text-center border-2 hover:bg-slate-300 transition duration-300 ease-in-out hover:scale-108 border-black px-4 py-8 rounded-3xl flex-grow">
              <img src="bangkit.png" alt="website gif" className="w-30 rounded-lg"/>
              <p className="mt-6 font-semibold">Bangkit Machine Learning Cohort</p>
              <p className="my-6">Developed expertise in Python, data analysis, and supervised learning while collaborating on real-world projects. Improved problem-solving, adaptability, and teamwork through industry-led sessions and mentorship.</p>
              <a href="bangkitcohort.png" className="mt-auto transition duration-300 ease-in-out hover:scale-110 hover:underline active:scale-110 active:underline bg-black text-white px-6 py-2 rounded-full">Learn More</a>
            </div>
            <div className="flex flex-col items-center text-center border-2 hover:bg-slate-300 transition duration-300 ease-in-out hover:scale-108 border-black px-4 py-8 rounded-3xl flex-grow">
              <img src="teaching.png" alt="website gif" className="w-24 rounded-lg"/>
              <p className="mt-6 font-semibold">Teaching Assistant</p>
              <p className="my-6">Assisted students in understanding fundamental programming concepts <span className="font-semibold">(in my 3rd semester)</span>, including syntax, logic, and problem-solving.<br></br> Guided them in implementing efficient data structures and algorithms <span className="font-semibold">(in my 4th Semester)</span> to optimize performance.<br></br> Helped apply object-oriented programming <span className="font-semibold">(in my 5th Semester)</span> principles to develop scalable and maintainable software.</p>
              <a href="https://github.com/AbrahamWillemH/Praktikum-SDA-2024" className="mt-auto transition duration-300 ease-in-out hover:scale-110 hover:underline active:scale-110 active:underline bg-black text-white px-6 py-2 rounded-full">Learn More</a>
            </div>
            <div className="flex flex-col items-center text-center border-2 hover:bg-slate-300 transition duration-300 ease-in-out hover:scale-108 border-black px-4 py-8 rounded-3xl flex-grow">
              <img src="laravel.png" alt="website gif" className="w-24 rounded-lg"/>
              <p className="mt-6 font-semibold">Web Developer</p>
              <p className="my-6">Developed dynamic, user-friendly web applications using Laravel for Enzo Group, implementing robust backend functionality. <br></br>For UNISRI, designed and maintained custom WordPress websites, optimizing user experience and performance.</p>
              <a href="https://github.com/AbrahamWillemH/enzo-group-erp" className="mt-auto transition duration-300 ease-in-out hover:scale-110 hover:underline active:scale-110 active:underline bg-black text-white px-6 py-2 rounded-full">Learn More</a>
            </div>
          </div>
          <div className="grid gap-10 mt-10 md:grid-cols-2 md:p-5 md:mt-10 md:place-content-between md:gap-8">
            <div className="flex flex-col items-center text-center border-2 hover:bg-slate-300 transition duration-300 ease-in-out hover:scale-108 border-black px-4 py-8 rounded-3xl flex-grow">
              <img src="himaster.png" alt="website gif" className="w-24 rounded-lg"/>
              <p className="mt-6 font-semibold">HIMASTER's Head of Division</p>
              <p className="my-6">Led a team as the Head of Division in the second period, driving key initiatives and ensuring smooth operations. Served as Vice Head of Division in the first period, supporting leadership and coordinating activities to achieve division goals.</p>
              <a href="https://www.instagram.com/p/C68kYbISRwZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className="mt-auto transition duration-300 ease-in-out hover:scale-110 hover:underline active:scale-110 active:underline bg-black text-white px-6 py-2 rounded-full">Learn More</a>
            </div>
            <div className="flex flex-col items-center text-center border-2 hover:bg-slate-300 transition duration-300 ease-in-out hover:scale-108 border-black px-4 py-8 rounded-3xl flex-grow">
              <img src="osis.png" alt="website gif" className="w-24 rounded-lg"/>
              <p className="mt-6 font-semibold">Head of Arts Division, OSIS SMAN 1 Surakarta</p>
              <p className="my-6">Led the Arts Division in organizing and executing creative projects, events, and performances, fostering a vibrant cultural atmosphere within the school community.</p>
              <a href="https://www.instagram.com/p/CJlSUYHh7Ew/" className="mt-auto transition duration-300 ease-in-out hover:scale-110 hover:underline active:scale-110 active:underline bg-black text-white px-6 py-2 rounded-full">Learn More</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
