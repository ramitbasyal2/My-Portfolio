import React, { useState } from 'react'
import { project } from '../../assets/project.js'
import { motion } from 'motion/react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const Projects = () => {
  const [count, setCount] = useState(0)
  
  const navigate = useNavigate()

  return   (
    <>
     {count > 0 && <div className='w-full md:px-12 px-6 py-20 lg:py-40 lg:px-24 rounded-tr-[200px] rounded-bl-[200px]'>
      <div className='max-w-7xl mx-auto'>
         <div className='flex flex-col flex-wrap md:flex-row md:items-end justify-between mb-6 gap-8'> 
             <div>
                 <p className='text-blue-600 italic mb-4'> SELECTED WORK</p>
                  <h2 className='text-5xl md:text-7xl max-sm:text-4xl font-bold tracking-tight'>CRAFTED <br /> PROJECTS</h2>
             </div>
             <p className='text-neutral-500 max-w-sm mb-6'> A Selection of my favorite projects where 
              I have explored new technologies.</p>
         </div>
         
       {/*Projects showcase */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-8'>
          {project.map((item,index)=>(
            <motion.div
               key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:mt-32' : ''  } mb-8`}>
                
                <a href={item.link} className='group relative block overflow-hidden rounded-3xl bg-neutral-900 aspect--[4/3] '> 
                  <img src={item.image} alt={item.title} 
                   className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 lg:grayscale group-hover:grayscale-0 '
                  />
                  <div className='absolute lg:inset-0 bg-black/40 lg:opacity-0 lg:group-hover:opacity-100 transiton-opacity 
                  flex items-center justify-center gap-4'>
                    <button onClick={()=> window.open(item.live, '_blank')} className='bg-white text-black px-6 py-2 rounded-full 
                                      font-bold transform translate-y-4 group-hover:translate-y-0 hover:bg-[#d1d1d199] cursor-pointer '>View Project</button>
                                       <button onClick={()=> window.open(item.github, "_blank")} className='bg-white text-black px-6 py-2 rounded-full 
                                      font-bold transform translate-y-4 group-hover:translate-y-0 hover:bg-[#d1d1d199] cursor-pointer'>Github</button>
                  </div>
                  </a>
                  {/* for mobile view */}
                   <div className='lg:hidden mt-2 flex items-center justify-start gap-4 mb-2'>
                     <button onClick={()=> window.open(item.live, "_blank")} className='bg-white  text-black px-5 py-1 rounded-full 
                                      font-bold transform translate-y-4 group-hover:translate-y-0 cursor-pointer'>View Project</button>
                    <button onClick={()=> window.open(item.github, "_blank")} className='bg-white  text-black px-3 py-1 rounded-full 
                                      font-bold transform translate-y-4 group-hover:translate-y-0 cursor-pointer'>Github</button>
                   </div>
                   {/* till here */}

                  <div className='mt-8'>
                      <div className='hidden lg:flex flex-wrap gap-2 mb-4'>
                             {item.tags.map((tag =>(
                                <span key={tag} className='text-[10px
                                uppercase tracking-tight bg-neutral-900 border border-neutral-800 text-neutral-400
                                px-3 py-1 rounded-full font-bold '>
                                    {tag}
                                </span>
                             )))}
                      </div>
                      <h4 className='text-3xl sm:text-2xl max-sm:text-xl font-bold mb-4'>{item.title}</h4>
                      <p className='text-neutral-400 leading-relaxed font-light line-clamp-2'>{item.description}</p>
                  </div>

            </motion.div>
          ))

          }

        </div>
      {/* Showcase of all projects */}
     <div className='flex items-center justify-center'>
         <Link to={'/allproducts'}>
          <p className='border-b-4 border-gray-700 text-gray-400 hover:border-amber-900'> View ALL Projects</p>
         </Link>
     </div>


      </div>
    </div>}
       <p className='w-full h-screen flex items-center justify-center text-2xl text-neutral-500 ' >Projects Will Be Added Soon...</p>
     </>
  )
}

export default Projects