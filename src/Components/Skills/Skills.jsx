import React from 'react'
import { skillLists } from '../../assets/project'
import { motion } from 'motion/react'


const Skills = () => {
  return (
    <div className='w-full py-20 md:py-30 md:px-12 px-6'>
       <div className='max-w-7xl mx-auto '>
         <div className='mb-16 text-center'>
              <p className='text-blue-500 italic tracking-wider '>TECHNICAL TOOKITT</p>
             <h1 className='text-4xl max-sm:text-2xl mt-2 font-bold uppercase '>Mastery & Tools</h1>
        </div>
      
      {/* skills showcase */}
     <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-x-6 gap-y-4'>
       {skillLists.map((skill,index)=>(
        <motion.div
        key={index}
         initial={{opacity:0, y:50,}}
         whileInView={{opacity:1,y:0}}
        transition={{duration:0.8, delay: index*0.1}} 
          viewport={{ once: true }} 
        className=''>
               <div className=' group flex flex-col items-center justify-center hover:bg-zinc-800 hover:text-white rounded-xl 
                            transfrom translate hover:-translate-1 duration-700  border border-neutral-700 p-6'>
                  <p className=' grayscale group-hover:grayscale-0 text-3xl'>{skill.icon}</p>
                  <p className='font-bold mt-2 mb-2'>{skill.name}</p>
                   <div className='w-full h-1 relative bg-neutral-700 mt-4'>
                      <motion.span
                       initial={{width:0}}
                       whileInView={{width: `${skill.level}%`}}
                       transition={{duration:1,delay:index*0.2}}
                      className='absolute h-1 bg-blue-700 ' style={{width: `${skill.level}%`}}></motion.span>
                   </div>
                   <p className='mt-4 text-xs text-neutral-500 group-hover:text-white'>{skill.category}</p>
                  
                </div>    
        </motion.div>
       ))

       }
     </div>
       </div>
    </div>
  )
}

export default Skills