export default function Contact() {
  return (
    <section id="contact" className="py-24 flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col text-center px-5 w-3/4">
        <h2 className="text-5xl font-semibold underline">Contact me!</h2>
        <p className="mt-6">I'm always open to new opportunities and collaborations. Let's get in touch!</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="aku2.jpg" alt="" className="w-50 rounded-full mt-12 border" />
        <p className="font-medium text-2xl mt-4">Abraham Willem Hersubagyo</p>
        <p>Undergraduate IT Student in Universitas Sebelas Maret</p>
      </div>
      <div className="grid grid-cols-4 p-5 mt-10 place-content-center gap-20">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abraham120604@gmail.com" target="_blank" className="flex flex-col border w-40 h-40 items-center text-center transition duration-300 ease-in-out hover:scale-108 border-black py-8 rounded-full flex-grow hover:underline hover:border-2">
          <img src="email.gif" alt="website gif"/>
          <p className="mt-4 font-medium">Email</p>
        </a>
        <a href="https://wa.me/6285800738654" target="_blank" className="flex flex-col border w-40 h-40 items-center text-center transition duration-300 ease-in-out hover:scale-108 border-black py-8 rounded-full flex-grow hover:underline hover:border-2">
          <img src="whatsapp.gif" alt="website gif"/>
          <p className="mt-4 font-medium">Whatsapp</p>
        </a>
        <a href="https://www.linkedin.com/in/abraham-hersubagyo-a49377303/" target="blank" className="flex flex-col border w-40 h-40 items-center text-center transition duration-300 ease-in-out hover:scale-108 border-black py-8 rounded-full flex-grow hover:underline hover:border-2">
          <img src="linkedin.gif" alt="website gif"/>
          <p className="mt-4 font-medium">LinkedIn</p>
        </a>
        <a href="https://github.com/AbrahamWillemH" target="_blank" className="flex flex-col border w-40 h-40 items-center text-center transition duration-300 ease-in-out hover:scale-108 border-black py-8 rounded-full flex-grow hover:underline hover:border-2">
          <img src="github.gif" alt="website gif"/>
          <p className="mt-4 font-medium">GitHub</p>
        </a>
      </div>
    </section>
  );
}
