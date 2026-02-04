import React, { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'



const Navbar = ( {mode, setMode} ) => {

  const navigate = useNavigate()

    const change = ()=>{
      if(mode === 'dark-mode'){
        setMode('light-mode')
      }else{
        setMode("dark-mode")
      }

      
    }
    
    
    const [menu, setMenu] = useState("Home")
    const [state, setState] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    
  function handleSubmit(e){
    e.preventDefault()
  }

  return (
    <> 
    <div className='w-full fixed z-999 md:px-12 px-6 py-5 lg:px-20'>
       <div className='flex items-center justify-between max-w-7xl mx-auto '>
         <div className="logo text-[19px] md:text-[22px] md:font-bold">
            <p className='font-[cursive] text-2xl bg-linear-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent'>RA<span>MI</span>T BA<span>SY</span>AL</p>
        </div>

       <ul 
  className={`
    fixed top-0 right-0 h-screen w-52 overflow-y-scroll
    flex flex-col gap-4 lg:px-6 border border-neutral-700
    bg-neutral-900 p-2 text-neutral-400

    transition-all duration-500 ease-in-out
    ${isMenuOpen
      ? 'translate-x-0 opacity-100 pointer-events-auto'
      : 'translate-x-full opacity-0 pointer-events-none'}

    lg:relative lg:translate-x-0 lg:opacity-100 lg:rounded-[50px]
    lg:flex lg:flex-row lg:h-auto lg:w-auto lg:pointer-events-auto
  `}
>
     {  <div onClick={()=> setIsMenuOpen(false)} 
           className=
           {`lg:hidden cursor-pointer  mb-4 
             transition-all duration-300 ease-in-out
             ${isMenuOpen
                 ? 'opacity-100 rotate-0 scale-100'
                 : 'opacity-0 rotate-90 scale-75 pointer-events-none'}`} > <X size={32} /> </div> }
        <li className='hover:text-neutral-100 cursor-pointer ml-6 text-[19px]' onClick={()=> {setMenu("Home"); navigate('/') }}> Home {menu === "Home" ?  <span className='block h-1 w-[90%] bg-pink-900'></span> : <></> } </li>
        <li className='hover:text-neutral-100 cursor-pointer ml-6 text-[19px]' onClick={()=> {setMenu("Projects"); navigate('/projects') }}>Projects {menu === "Projects" ? <span className='block h-1 w-[90%] bg-pink-900'></span> : <></> }</li>
        <li className='hover:text-neutral-100 cursor-pointer ml-6 text-[19px]' onClick={()=> {setMenu("Skills"); navigate('/skills')}}>Skills {menu === "Skills" ? <span className='block h-1 w-[90%] bg-pink-900'></span>: <></> }</li>
        <li className='hover:text-neutral-100 cursor-pointer ml-6 mr-6 text-[19px]' onClick={()=> {setMenu("Contact"); navigate('/services')}} >Services {menu === "Contact" ? <span className='block h-1 w-[90%] bg-pink-900'></span> : <></> }</li>
        <button className='lg:hidden max-sm:hidden  md:px-6 md:py-3 px-4 py-2 mt-4 bg-white text-[16px] font-medium text-black rounded-[50px] hover:bg-[#d1d1d1a5] cursor-pointer' onClick={()=> setState(true)}>Hire Me</button>          
       </ul>

       <div className='flex items-center gap-3'>      
             <div className='cursor-pointer' onClick={change  } > {mode ===  "dark-mode" ? <Moon size={28}/> : <Sun size={28} /> } </div> 
            <button className='hidden lg:flex md:px-6 md:py-3 px-4 py-2  border border-neutral-700 bg-white text-[16px] font-medium text-black rounded-[50px] hover:bg-[#d1d1d1a5] cursor-pointer' onClick={()=> setState(true)}>Hire Me</button>         
            <div onClick={()=> setIsMenuOpen(true)}
             className='lg:hidden cursor-pointer transition-transform duration-100 hover:scale-110 '> <Menu/> </div>
       </div>
          </div>
    </div>

    {/* hire me contact box */}
     
  { state && 
  <div className=' w-full min-h-screen z-999 bg-black/80 flex flex-col items-center justify-center fixed'>
   <div className='max-w-7xl mx-auto '>
      <div className='flex'>
         <h1 className='absolute left-25 sm:left-5 top-10 text-4xl sm:text-2xl font-bold font-mono'>Hire Me</h1>
         <div onClick={()=> setState(false)}
         className={`absolute right-25 sm:right-5 top-10 cursor-pointer hover:text-gray-500  ${mode === 'light-mode' ? 'text-white' : 'text-white'} `}> <X size={36}/> </div>
     </div>
           <div>
              <form onSubmit={handleSubmit} className="md:w-xl sm:w-96 bg-neutral-900 p-8 rounded-2xl border border-gray-600">
                <div className="flex flex-col">
                    <label className="text-xs text-gray-400">FULL NAME</label>
                <input type="text" placeholder="Enter your name" required
                  className="border border-neutral-700 placeholder:text-gray-500 p-3 mt-2 mb-4 rounded-md" />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs text-gray-400">EMAIL</label>
                <input type="email" placeholder="Enter your name" required
                className="border border-neutral-700 placeholder:text-gray-500 p-3 mt-2 mb-4 rounded-md" />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs text-gray-400">MESSAGE</label>
                  <textarea placeholder="write message.." required
                  className="resize-none mt-2 placeholder:text-gray-500 border border-gray-500 rounded-md p-3"
                  rows={5} cols={10}></textarea>
                </div>
  
                <div className="mt-6 w-full bg-white cursor-pointer mb-2 hover:bg-[#d1d1d1aa] text-black text-center p-4 border-0 outline-0 rounded-md text-xl font-bold">
                  <button type="submit" className="cursor-pointer">Let's Connect</button>
                  
                </div>
              
          
              </form> 
              
        </div>
   </div>
        </div>
}
    </>
    
  )
}

export default Navbar