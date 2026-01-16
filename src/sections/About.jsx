import { CodeXml,Palette,Rocket } from 'lucide-react';
const pros = [
  {
    icon: CodeXml,
    heading: "Clean Code",
    description: "Writing maintainable, scalable code is my priority."
  },
  {
    icon: Palette,
    heading: "Design-Focused",
    description: "Pixel-perfect implementations with attention to detail."
  },
  {
    icon: Rocket,
    heading: "Performance",
    description: "Optimized solutions for the best user experience."
  }
];
const numexp = [

  {
  naming:"experince",
  number:"3+",
  description:"Years Experience"
  },
  {
  naming:"Projects",
  number:"50+",
  description:"Projects Completed"
  },
    {
  naming:"clients",
  number:"30+",
  description:"Happy Clients"
  }
]


function About() {
  return (
    <section id='about'>
    <div className="w-full h-auto">
    <h6 className="intro-heading">01. about me</h6>
    <h1 className="heading-title">turning ideas into <span className="text-cyan"> reality</span></h1>    
    <div className="grid md:grid-cols-2 place-items-center">
      <div className="w-3/4 tracking-wide text-center pt-6 text-sm text-gray-200/50 md:text-xl md:pl-4 md:ml-20  md:pt-16  md:text-left">
        <p>I'm a passionate Full-Stack Developer with over 5 years of experience building modern web applications.
           I specialize in creating seamless user experiences using cutting-edge technologies.
        </p>
        <br />
        <p>
          My journey started with a curiosity for how websites work, which evolved into a deep passion for crafting digital solutions
           that make a difference. I believe in writing clean, efficient code and never stop learning.
        </p>
        <br />
        <br />
        <p>
          When I'm not coding, you'll find me exploring new technologies,
           contributing to open-source projects, or sharing knowledge through technical writing.
        </p><br />
        <div className="grid grid-cols-3 pt-6 border-t border-gray-200/30">
          {numexp.map(exp =>(
            <div key={exp.naming} className="text-sm">
            <h1 className="text-3xl font-bold text-cyan">{exp.number}</h1>
            {exp.description}
          </div> 
          ))}
        </div>
      </div>
    
    <div className='flex flex-col justify-center items-center w-full  gap-4  mt-8 md:mt-24'>
      {pros.map(point =>{const Icon = point.icon;
      return (
      <div key={point.heading} className='flex items-center gap-4 bg-cyan/2 pb-4 w-3/4 p-6  rounded-2xl border about-buttons border-cyan/10 md:pr-18'>
        <h1 className='border border-cyan w-14 h-14 rounded-xl bg-cyan/10 text-center p-4' >
        <Icon size={20}/>  
        </h1>
        <div className='text-gray-300/50 '>
          <h1 className='text-2xl text-white mb-2 font-bold'>{point.heading}</h1>
          <p>{point.description}</p>
        </div>
      </div>
      )})}
    </div>
 
      
    </div>
    </div>
    </section>
  )
}

export default About