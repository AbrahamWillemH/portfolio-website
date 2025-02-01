import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "ERP Website",
      description: "Laravel-based website. Streamlines customer order management while seamlessly integrating inventory tracking, purchase orders, and team calendars. It ensures real-time inventory updates, automates purchase orders after payments, and keeps the team on schedule with a dynamic calendar. <br> Designed for efficiency, it replaces spreadsheets with a centralized system, improving workflow and reducing errors.",
      image: "/public/enzo.png",
    },
    {
      title: "Health Tracker",
      description: "MERN Stack-based website. A web application I built to help users monitor their calorie intake and outtake, track exercises, and receive personalized food and workout recommendations for a healthier lifestyle. <br>This project showcases my ability to work with data processing, UI/UX design, and backend logic to deliver a seamless experience for users who want to take control of their health.",
      image: "/public/rpl.png",
    },
    {
      title: "Portal Prestasi",
      description: "Laravel-based web application. designed to help users discover, track, and register for events and scholarships in one centralized platform. With this project, I aimed to create a seamless experience for students and professionals looking for opportunities.<br>Users can browse available events and scholarships, filter them based on categories or eligibility criteria, and register directly through the website. Administrators can also manage event listings, approve registrations, and send notifications to participants.",
      image: "/public/portalprestasi.png",
    },
    {
      title: "UNISRI's Lembaga Sertifikasi Profesi",
      description: "The UNISRI Lembaga Sertifikasi Profesi (LSP) website is a platform designed to manage and streamline the certification process for professional training and qualifications. Built with a user-friendly interface, the website allows individuals to register for certification exams, track their progress, and access their certification results. Administrators can easily manage registered candidates, exam schedules, and certification statuses.",
      image: "/public/lsp.png",
    },
    {
      title: "Little Game Project",
      description: "Tower Defense Game (built using Greenfoot) is a strategic survival game where players must defend their base from waves of enemies by strategically placing towers. Each tower has unique abilities, and players can upgrade defenses, manage resources, and adapt strategies to counter increasingly difficult enemy waves. <br>The game features real-time action, dynamic enemy AI, and engaging mechanics that challenge the player’s decision-making and reaction speed.",
      image: "/public/greenfoot.png",
    },
    {
      title: "Turing Machine Simulator",
      description: "A project built with Flask, Javascript, and TailwindCSS. Turing Machine Simulator is a web-based application that simulates a multitape Turing machine to solve mathematical expressions, specifically (m+n)^a/b. <br>This project showcases my expertise in algorithm design and automata theory, implementing a step-by-step simulation of how a Turing machine processes arithmetic operations. Users can input values for m,n,a and b, and the simulator will execute transitions based on predefined states and rules, displaying the computation in real time.",
      image: "/public/tba.png",
    },
    {
      title: "Payroll Management System",
      description: "Microsoft Access-based application designed to streamline employee salary processing, ensuring accurate attendance tracking, overtime calculations, and payroll management. <br>This system efficiently manages employee records, calculates salaries, deductions, and generates payslips, reducing manual effort and minimizing errors. <br>It integrates essential HR functions such as attendance logging, leave management, and overtime tracking, making it a comprehensive payroll solution.",
      image: "/public/payrollmanagement.png",
    },
    {
      title: "Dataset Analysis",
      description: "This project involves a comprehensive dataset analysis of bike rentals, focusing on uncovering trends and patterns in bike-sharing usage. I utilized tools like Python, Pandas, Matplotlib, and Seaborn to explore how various factors such as seasonality, weather conditions, holidays, and the time of day influence rental demand. <br>The analysis delved into seasonal trends, revealing that bike rentals tend to peak during the summer months and decrease in winter. Additionally, I compared rental patterns on weekends and weekdays, discovering that weekends—specifically Saturdays and Sundays—see a significant increase in rentals. Hourly demand was also examined, identifying that the highest rental rates typically occur during morning and evening rush hours.",
      image: "/public/bikesharing.png",
    },
    {
      title: "Bangkit Capstone Project",
      description: "Catbot is my capstone project from the Bangkit 2024 program, where I had the opportunity to integrate three distinct study paths: Machine Learning, Cloud Computing, and Mobile Development. <br>The app is designed to help users identify potential sicknesses in their pets, specifically cats, by leveraging the power of object detection and AI-driven chatbots. The project involves cloud computing technologies to host the model and manage the backend, ensuring scalability and reliability. For the mobile development aspect, we created a user-friendly mobile app using Flutter, enabling seamless interaction across multiple platforms.",
      image: "/public/catbot.png",
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
    <section id="projects" className="min-h-screen p-14 pb-24 bg-slate-100">
      <div className="flex justify-center text-center mb-30">
        <h2 className="font-semibold text-5xl underline">My Projects</h2>
      </div>
      <div className="flex flex-row space-x-10 justify-center items-center">

        <motion.div
          className="flex flex-col w-1/4 text-right"
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-semibold text-2xl">{projects[currentIndex].title}</h2>
          <p className="mt-5" dangerouslySetInnerHTML={{ __html: projects[currentIndex].description }}></p>
          <a href="#" className="rounded-full bg-black text-white text-center mt-10 w-1/2 p-4 transform duration-300 hover:scale-110 ease-in-out ml-auto">
            View More
          </a>
        </motion.div>

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
              className="w-120 h-70 rounded-full"
            />
          </motion.div>

          <div className="flex mt-4 space-x-2">
            {projects.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-400"}`}
              ></span>
            ))}
          </div>

          <div className="flex flex-row space-x-5 mt-10">
            <button onClick={prevProject} className="border rounded-full p-4 w-16 h-16 flex items-center justify-center hover:text-white hover:bg-black duration-300 ease-in-out cursor-pointer">
              &lt;
            </button>
            <button onClick={nextProject} className="border rounded-full p-4 w-16 h-16 flex items-center justify-center hover:text-white hover:bg-black duration-300 ease-in-out cursor-pointer">
              &gt;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
