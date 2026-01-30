import React from 'react'
import { project } from '../../assets/project.js'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='w-full md:px-12 px-6 py-20 lg:px-24 rounded-tr-[200px] rounded-bl-[200px]'>
      <div className='max-w-7xl mx-auto'>
         <div className='flex flex-col flex-wrap md:flex-row md:items-end justify-between mb-20 gap-8'> 
             <div>
                 <p className='text-blue-600 italic mb-6'> SELECTED WORK</p>
                  <h2 className='text-5xl md:text-7xl max-sm:text-4xl max-sm:mb-0 font-bold tracking-tight'>CRAFTED <br /> PROJECTS</h2>
             </div>
             <p className='text-neutral-500 max-w-sm mb-2'> A curated selection of my favorite projects where 
              I explored new technologies and pushed UI boundaries</p>
         </div>
         
       {/*Projects showcase */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 '>
          {project.map((item,index)=>(
            <motion.div
               key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
                <a href={item.link} className='group relative block overflow-hidden rounded-3xl bg-neutral-900 aspect--[4/3] '> 
                  <img src={item.image} alt={item.title} 
                   className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 '
                  />
                  <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transiton-opacity 
                  flex items-center justify-center'>
                    <span className='bg-white text-black px-8 py-3 rounded-full 
                                      font-bold transform translate-y-4 group-hover:translate-y-0'>View Project</span>
                  </div>
                  </a>

                  <div className='mt-8'>
                      <div className='flex flex-wrap gap-2 mb-4'>
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
     <div className='absolute left-[50%] mt-6 text-neutral-400 border-b hover:text-neutral-300'>
         <Link to={'/allproducts'}>
           View ALL Projects
         </Link>
     </div>


      </div>
    </div>
     
  )
}

export default Projects