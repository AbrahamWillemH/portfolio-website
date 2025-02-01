import {motion} from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col text-center px-5 w-3/4">
        <h2 className="text-5xl font-semibold underline">Contact me!</h2>
        <p className="mt-6">I'm always open to new opportunities and collaborations. Let's get in touch!</p>
      </div>
      <div className="flex flex-col items-center">
        <motion.img transition={{duration: 1}} initial={{opacity:0, y:-50}} whileInView={{opacity: 1, y:0}} src="aku2.jpg" alt="" className="w-50 rounded-full mt-12 border" />
        <p className="font-medium text-2xl mt-4">Abraham Willem Hersubagyo</p>
        <p className="text-center">Undergraduate IT Student in Universitas Sebelas Maret</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 p-5 mt-10 place-content-center gap-12 lg:gap-20">
        <motion.a transition={{duration: 0.7, ease: 'easeInOut'}} initial={{opacity:0, x:-50}} whileInView={{opacity: 1, x:0}} href="https://mail.google.com/mail/?view=cm&fs=1&to=abraham120604@gmail.com" target="_blank" className="flex flex-col w-30 h-30 border lg:w-40 lg:h-40 items-center text-center transition duration-300 ease-in-out hover:scale-108 active:scale-108 border-black py-8 rounded-full flex-grow hover:underline hover:border-2 active:underline active:border-2">
          <img src="email.gif" alt="website gif" className="w-8 h-8 lg:w-12 lg:h-12"/>
          <p className="mt-4 font-medium">Email</p>
        </motion.a>
        <motion.a transition={{duration: 1, ease: 'easeInOut'}} initial={{opacity:0, x:50}} whileInView={{opacity: 1, x:0}} href="https://wa.me/6285800738654" target="_blank" className="flex flex-col w-30 h-30 border lg:w-40 lg:h-40 items-center text-center transition duration-300 ease-in-out hover:scale-108 active:scale-108 border-black py-8 rounded-full flex-grow hover:underline hover:border-2 active:underline active:border-2">
          <img src="whatsapp.gif" alt="website gif" className="w-8 h-8 lg:w-12 lg:h-12"/>
          <p className="mt-4 font-medium">Whatsapp</p>
        </motion.a>
        <motion.a transition={{duration: 0.7, ease: 'easeInOut'}} initial={{opacity:0, x:-50}} whileInView={{opacity: 1, x:0}} href="https://www.linkedin.com/in/abraham-hersubagyo-a49377303/" target="blank" className="flex flex-col w-30 h-30 border lg:w-40 lg:h-40 items-center text-center transition duration-300 ease-in-out hover:scale-108 active:scale-108 border-black py-8 rounded-full flex-grow hover:underline hover:border-2 active:underline active:border-2">
          <img src="linkedin.gif" alt="website gif" className="w-8 h-8 lg:w-12 lg:h-12"/>
          <p className="mt-4 font-medium">LinkedIn</p>
        </motion.a>
        <motion.a transition={{duration: 1, ease: 'easeInOut'}} initial={{opacity:0, x:50}} whileInView={{opacity: 1, x:0}} href="https://github.com/AbrahamWillemH" target="_blank" className="flex flex-col w-30 h-30 border lg:w-40 lg:h-40 items-center text-center transition duration-300 ease-in-out hover:scale-108 active:scale-108 border-black py-8 rounded-full flex-grow hover:underline hover:border-2 active:underline active:border-2">
          <img src="github.gif" alt="website gif" className="w-8 h-8 lg:w-12 lg:h-12"/>
          <p className="mt-4 font-medium">GitHub</p>
        </motion.a>
      </div>
    </section>
  );
}
