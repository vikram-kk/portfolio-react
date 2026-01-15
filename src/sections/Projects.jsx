import React from 'react'
import ProjectCard from '../components/ProjectCard'
const projects = [
  {
    img: "../public/images/pawapp1.jpeg",
    title: "PawApp",
    description:
      "A social impact platform that helps rescue injured and abandoned animals by connecting users with nearby NGOs, veterinarians, and animal welfare organizations in emergencies.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Maps API"]
  },
  {
    img: "../public/images/pawapp1.jpeg",
    title: "Kanban Todo Board",
    description:
      "A task management application with drag-and-drop functionality that helps users organize tasks into columns like Todo, In Progress, and Done.",
    tech: ["React", "Drag & Drop API", "Tailwind CSS", "Local Storage"]
  },
  {
    img: "../public/images/pawapp1.jpeg",
    title: "Todo Application",
    description:
      "A simple and efficient todo app that allows users to add, edit, delete, and mark tasks as completed with a clean and responsive UI.",
    tech: ["React", "JavaScript", "CSS", "Local Storage"]
  },
  {
    img: "../public/images/pawapp1.jpeg",
    title: "Developer Portfolio",
    description:
      "A modern and responsive personal portfolio website showcasing projects, skills, and contact information with smooth animations.",
    tech: ["React", "GSAP", "Tailwind CSS"]
  }
];

function Projects() {
  return (
    <section className='h-auto'>
        <h5 className='intro-heading mt-4'>03 Projects</h5>
        <h1 className='heading-title'>Featured <span className='text-cyan'>Projects</span></h1>
        <p className='text-gray-400 text-sm px-20 py-10 text-center'>A selection of projects that showcase my skills and passion for building great products</p>
        
        {projects.map((item,index)=><ProjectCard key={index} i={index} item={item}/>)}
    </section>
  )
}

export default Projects