function ProjectCard({ item, i }) {
  const isEven = i % 2 === 0;

  return (
    <div className={`w-full flex flex-col items-center py-12 
      md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} 
      md:justify-center md:gap-12 px-6`}>
      
      <div className='w-full max-w-[520px] overflow-hidden rounded-xl gradient-up flex-shrink-0 shadow-2xl'>
        <img 
          src="/images/pawapp1.jpeg" 
          alt={item.title} 
          className='w-full h-auto object-cover hover:scale-105 transition-transform duration-500' 
        />
      </div>

      <div className={`flex flex-col mt-8 md:mt-0 max-w-[500px] m-2
        ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
        
        <h4 className='text-sm font-mono text-cyan-400'>Feature Project</h4>
        <h1 className='text-3xl font-bold text-white mb-4'>{item.title}</h1>
        
        <div className={`relative z-10 bg-[#112240] p-6 rounded-xl border border-gray-300/10 shadow-xl
          ${isEven ? 'md:-mr-12' : 'md:-ml-12'}`}>
          <p className='text-sm text-gray-400 leading-relaxed'>
            {item.description}
          </p>
        </div>


        <div className={`mt-6 flex flex-wrap gap-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
          {item.tech.map((skill) => (
            <span key={skill} className="text-gray-300 text-xs font-mono bg-gray-700/20 py-1 px-3 rounded-full border border-gray-300/10">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard