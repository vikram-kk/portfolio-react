import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
const name = "Vikram Thakur";
const role = "Full Stack Developer";
const onelinedetail = "I craft exceptional digital experiences that blend ";

function Hero() {
  return (
    <>
    <div className='hero'>
      
    <div className='mt-20 pointer-events-auto'>
       <div className='flex flex-col items-center gap-10  md:gap-6'>
          {/* Fixed Badge: Removed <center> and fixed width */}
          <div className='flex-center bg-gray-400/5 gap-2 glass-card px-4 py-1.5 rounded-full'>
            <div className='online-an  rounded-full w-2 h-2 animate-pulse'></div>
            <h2 className='font-mono text-xs uppercase tracking-wider text-white'>
              Available for work
            </h2>
          </div>
          <h1 className='main-head'>Hi, i'm <span className='span-head glow'>{name}</span></h1>
          <h2 className='text-center text-gr-head text-xl md:text-3xl'>{role}</h2>
          <p className='text-center text-gr-head text-sm md:text-xl'>{onelinedetail}<span className='text-cyan glow-s'>beautiful design</span> with <br /><span className='glow-s text-cyan'>robust functionality.</span></p>
        </div>
        <div className=' flex justify-center flex-col gap-3 items-center mt-14 mb-10 md:flex-row md:mb-8'>
          <a className='bg-cyan p-2 px-6 w-1/2 text-center text-black md:w-auto md:text-lg rounded-lg capitalize hero-buttons' href="">view projects</a>
          
          <a className='p-2 text-lg px-6 bg-transparent w-1/2 text-center md:w-auto rounded-lg z-20 hero-buttons capitalize border border-cyan/25' href="">contact me</a>
        </div>
        <div className="flex justify-center gap-6 animate-fade-in p-2" style={{ animationDelay: '0.5s' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card hover:border-primary/50 transition-all duration-300 group"
          >
            <Github size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card hover:border-primary/50 transition-all duration-300 group"
          >
            <Linkedin size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:hello@johndoe.dev"
            className="p-3 glass-card hover:border-primary/50 transition-all duration-300 group"
          >
            <Mail size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
        <div className='flex-center mt-4 '>
          <ArrowDown className='text-gray-600 down-arrow' size={30}/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Hero