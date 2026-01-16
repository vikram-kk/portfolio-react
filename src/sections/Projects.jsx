import React from 'react'
import ProjectCard from '../components/ProjectCard'
const projects = [
  {
    img: "../public/images/pawapp1.jpeg",
    title: "PawApp",
    description:
      "A social impact platform that helps rescue injured and abandoned animals by connecting users with nearby NGOs, veterinarians, and animal welfare organizations in emergencies.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Maps API"]
  }
];

function Projects() {
  return (
    <section id='projects' className='h-auto'>
        <h5 className='intro-heading mt-4'>03 Projects</h5>
        <h1 className='heading-title'>Featured <span className='text-cyan'>Projects</span></h1>
        <p className='text-gray-400 text-sm px-20 py-10 text-center'>A selection of projects that showcase my skills and passion for building great products</p>
        
        {projects.map((item,index)=><ProjectCard key={index} i={index} item={item}/>)}
    </section>
  )
}

export default Projects