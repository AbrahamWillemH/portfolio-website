import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "UNISRI's Lembaga Sertifikasi Profesi",
      description: "The UNISRI Lembaga Sertifikasi Profesi (LSP) website is a platform designed to manage and streamline the certification process for professional training and qualifications. Built with a user-friendly interface, the website allows individuals to register for certification exams, track their progress, and access their certification results. Administrators can easily manage registered candidates, exam schedules, and certification statuses.",
      background: "bg-unisri.jpg",
      image: "lsp.png",
      link: "https://lsp-unisri.com/"
    },
    {
      title: "UNISRI's Lembaga Inovasi dan Kewirausahaan",
      description: "Developed a user-friendly website for UNISRI's Lembaga Inovasi dan Kewirausahaan (LIK), streamlining the registration and management of innovation and entrepreneurship programs. The platform offers seamless navigation for users to explore available opportunities, register for events, and track their progress, fostering growth and innovation within the community.",
      background: "bg-unisri.jpg",
      image: "lik.png",
      link: "https://lik-unisri.com/"
    },
    {
      title: "ERP Website",
      description: "Laravel-based website. Streamlines customer order management while seamlessly integrating inventory tracking, purchase orders, and team calendars. It ensures real-time inventory updates, automates purchase orders after payments, and keeps the team on schedule with a dynamic calendar. <br> Designed for efficiency, it replaces spreadsheets with a centralized system, improving workflow and reducing errors.",
      background: "bg-enzo.jpg",
      image: "enzo-3.png",
      link: "https://github.com/AbrahamWillemH/enzo-group-erp"
    },
    {
      title: "Health Tracker",
      description: "MERN Stack-based website. A web application I built to help users monitor their calorie intake and outtake, track exercises, and receive personalized food and workout recommendations for a healthier lifestyle. <br>This project showcases my ability to work with data processing, UI/UX design, and backend logic to deliver a seamless experience for users who want to take control of their health.",
      background: "bg-rpl.png",
      image: "rpl.png",
      link: "https://github.com/AbrahamWillemH/project-rpl-2"
    },
    {
      title: "Portal Prestasi",
      description: "Laravel-based web application. designed to help users discover, track, and register for events and scholarships in one centralized platform. With this project, I aimed to create a seamless experience for students and professionals looking for opportunities.<br>Users can browse available events and scholarships, filter them based on categories or eligibility criteria, and register directly through the website. Administrators can also manage event listings, approve registrations, and send notifications to participants.",
      background: "bg-laravel.png",
      image: "portalprestasi.png",
      link: "https://github.com/AbrahamWillemH/PortalPrestasi"
    },
    {
      title: "Little Game Project",
      description: "Tower Defense Game (built using Greenfoot) is a strategic survival game where players must defend their base from waves of enemies by strategically placing towers. Each tower has unique abilities, and players can upgrade defenses, manage resources, and adapt strategies to counter increasingly difficult enemy waves. <br>The game features real-time action, dynamic enemy AI, and engaging mechanics that challenge the player’s decision-making and reaction speed.",
      background: "bg-greenfoot.png",
      image: "greenfoot.png",
      link: "https://www.greenfoot.org/scenarios/32214"
    },
    {
      title: "Turing Machine Simulator",
      description: "A project built with Flask, Javascript, and TailwindCSS. Turing Machine Simulator is a web-based application that simulates a multitape Turing machine to solve mathematical expressions, specifically (m+n)^a/b. <br>This project showcases my expertise in algorithm design and automata theory, implementing a step-by-step simulation of how a Turing machine processes arithmetic operations. Users can input values for m,n,a and b, and the simulator will execute transitions based on predefined states and rules, displaying the computation in real time.",
      background: "bg-tba.png",
      image: "tba.png",
      link: "https://project-tba-uas.vercel.app/"
    },
    {
      title: "Payroll Management System",
      description: "Microsoft Access-based application designed to streamline employee salary processing, ensuring accurate attendance tracking, overtime calculations, and payroll management. <br>This system efficiently manages employee records, calculates salaries, deductions, and generates payslips, reducing manual effort and minimizing errors. <br>It integrates essential HR functions such as attendance logging, leave management, and overtime tracking, making it a comprehensive payroll solution.",
      background: "bg-access.png",
      image: "payrollmanagement.png",
    },
    {
      title: "Dataset Analysis",
      description: "This project involves a comprehensive dataset analysis of bike rentals, focusing on uncovering trends and patterns in bike-sharing usage. I utilized tools like Python, Pandas, Matplotlib, and Seaborn to explore how various factors such as seasonality, weather conditions, holidays, and the time of day influence rental demand. <br>The analysis delved into seasonal trends, revealing that bike rentals tend to peak during the summer months and decrease in winter.",
      background: "bg-bikesharing.png",
      image: "bikesharing.png",
      link: "https://github.com/AbrahamWillemH/dicoding-project-bike-rental"
    },
    {
      title: "Bangkit Capstone Project",
      description: "Catbot is my capstone project from the Bangkit 2024 program, where I had the opportunity to integrate three distinct study paths: Machine Learning, Cloud Computing, and Mobile Development. <br>The app is designed to help users identify potential sicknesses in their pets, specifically cats, by leveraging the power of object detection and AI-driven chatbots. The project involves cloud computing technologies to host the model and manage the backend, ensuring scalability and reliability. For the mobile development aspect, we created a user-friendly mobile app using Flutter, enabling seamless interaction across multiple platforms.",
      background: "bg-catbot.png",
      image: "catbot.png",
      link: "https://github.com/AbrahamWillemH/capstone-catbot"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.section transition={{duration: 1}} initial={{opacity:0, y:50}} whileInView={{opacity: 1, y:0}} id="projects" className="min-h-screen py-24 text-white bg-slate-200">
      <div className="flex justify-center text-center mb-4">
        <h2 className="font-semibold text-5xl underline text-black">My Projects</h2>
      </div>
      <motion.div className="flex flex-col-reverse lg:flex-row lg:space-x-10 lg:justify-center lg:items-center lg:py-20 lg:rounded-4xl lg:mx-15"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${projects[currentIndex]?.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      key={currentIndex}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>

        <div className="flex flex-col text-center items-center lg:items-end p-10 lg:w-2/4 lg:text-right">
          <h2 className="font-semibold text-2xl">{projects[currentIndex].title}</h2>
          <p className="mt-5" dangerouslySetInnerHTML={{ __html: projects[currentIndex].description }}></p>
          <a href={projects[currentIndex].link} target="_blank" className="rounded-full border border-white hover:border-none hover:underline hover:bg-black  active:border-none active:underline active:bg-black text-center mt-10 w-1/2 p-4 transform duration-300 hover:scale-110 active:scale-110 ease-in-out lg:ml-auto">
            View More
          </a>
        </div>

        <div className="flex flex-col items-center">
          <motion.div
            key={currentIndex}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="w-85 mt-10 lg:w-120 rounded-full"
            />
          </motion.div>

          <div className="flex mt-4 space-x-2">
            {projects.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-700"}`}
              ></span>
            ))}
          </div>

          <div className="flex flex-row space-x-20 lg:space-x-30 mt-10">
            <button onClick={prevProject} className="border rounded-full p-4 w-16 h-16 flex items-center justify-center hover:text-white hover:bg-black active:text-white active:bg-black duration-300 ease-in-out cursor-pointer">
              &lt;
            </button>
            <button onClick={nextProject} className="border rounded-full p-4 w-16 h-16 flex items-center justify-center hover:text-white hover:bg-black active:text-white active:bg-black duration-300 ease-in-out cursor-pointer">
              &gt;
            </button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
