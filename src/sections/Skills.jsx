const skills = [
  { name: 'HTML5', category: 'Frontend', level: 95 },
  { name: 'CSS3', category: 'Frontend', level: 90 },
  { name: 'JavaScript', category: 'Frontend', level: 92 },
  { name: 'TypeScript', category: 'Frontend', level: 88 },
  { name: 'React', category: 'Frontend', level: 93 },
  { name: 'Next.js', category: 'Frontend', level: 85 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 95 },
  { name: 'Node.js', category: 'Backend', level: 88 },
  { name: 'Express', category: 'Backend', level: 85 },
  { name: 'MongoDB', category: 'Backend', level: 82 },
  { name: 'PostgreSQL', category: 'Backend', level: 80 },
  { name: 'Git', category: 'Tools', level: 90 },
  { name: 'Docker', category: 'Tools', level: 75 },
  { name: 'AWS', category: 'Tools', level: 70 },
  { name: 'Figma', category: 'Design', level: 78 },
];

function Skills() {

  return (
    <section id="skills" className='w-full min-h-screen'>
        <h5 className='intro-heading mt-4'>0.2 My Skills</h5>
        <h1 className='heading-title'>Turning Ideas Into <span className='text-cyan'>Reality</span></h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-10 gap-6 md:gap-6 lg:gap-8 mt-8 md:px-30'>
          {skills.map((items,index)=>(
          <div key={index} className='skill-card glass-card hver-fix border-gray-200/10 hover:border-cyan-200 p-4 rounded-4xl w-full'>
            <div className='relative'>
            <svg className="w-16 h-16 mx-auto transform -rotate-90">
              <circle
              r={28}
              cx={32}
              cy={32}
              stroke="gray"
              strokeWidth="4"
              fill="none"
              className="text-border"
              />
              <circle
              cx="32"
              cy="32"
              r="28"
              stroke="cyan"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${items.level * 1.76} 176`}
              className=" transition-all duration-700 group-hover:drop-shadow-[0_0_8px_hsl(186_100%_50%)]"
              />
              </svg>
              <p className='absolute  inset-0 flex items-center justify-center text-sm font-semibold '>{items.level}%</p>

            </div> 
              <h2 className='text-center font-bold text-white'>{items.name}</h2>
              <p className='text-sm text-center text-gray-400'>{items.category}</p>
          </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['GraphQL', 'Redux', 'Jest', 'Cypress', 'Prisma', 'Redis', 'Linux', 'CI/CD'].map((skill) => (
              <span key={skill} className="text-gray-400 text-sm md:text-lg bg-gray-700/20 p-2 rounded-2xl px-4 mb-4 font-mono border border-gray-300/30">
                {skill}
              </span>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Skills
