import { useEffect, useState } from "react";

function Navbar() {
    const Navlinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        // { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
];
    const [Isscrolled,setIscrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    useEffect(()=>{
      const handleScroll =()=>{
        if(window.scrollY > 50){
          setIscrolled(true);
        }else{
          setIscrolled(false)
        }
      }

      window.addEventListener('scroll',handleScroll)
      return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    },[])
    

  return (
    <>
    <nav className="fixed top-0 right-0 left-0 z-50  h-20 ">
      <div className={`nav-cl ${Isscrolled && 'bg-card/70 backdrop-blur-xl '}`}>

        <h1>{`<vt>`}</h1>
        <h1 
        onClick={()=>setIsOpen(!isOpen)}
        className={`absolute right-2 md:hidden`}>
        {isOpen ? "<.*.>" : "<..>"}
        </h1>
        
        
        <div className={`${isOpen?'flex nav-items':'hidden'} md:flex gap-8 items-center`}>
            {Navlinks.map((links,index)=>(<h4 onClick={()=>setIsOpen(false)} key={index}><a href={links.href}>{links.name}</a></h4>))}
            <button className="bg-cyan px-4 py-2 rounded-2xl text-sm">let's talk</button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar