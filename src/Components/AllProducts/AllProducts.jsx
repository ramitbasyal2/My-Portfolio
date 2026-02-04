import { ArrowLeft } from "lucide-react"
import { allProject } from "../../assets/project"
import { useNavigate } from "react-router-dom"

const AllProducts = ({mode}) => {

    const navigate = useNavigate()

  return (
    <div className={`bg-black p-5 md:p-5 py-20 lg:py-40 lg:p-10  w-full`}>
     <div className="max-w-7xl mx-auto">
            <div className=" flex items-center justify-between ">
            <h1 className="text-4xl font-bold tracking-wide">
                <span className={`border-b-6 border-gray-500 text-white `}>All Pro</span>
                  <span className={`text-white`}>𝒥</span><span className={`border-b-6 border-gray-500
                     ${ mode === 'light-mode' ? 'text-black' : 'text-white' } `}>ects</span> :</h1>
            <div className="bg-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-900 cursor-pointer" onClick={()=> navigate(-1)} ><ArrowLeft/></div>
                </div>
             <div className="grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3 mt-16 max-sm:mt-8">
             {
                allProject.map((project,index)=>(
                    <div key={index} className={`rounded-xl pb-4} `}> 
                        <a className="group relative block overflow-hidden" href={project.link}>
                            <img className="rounded-xl object-cover group-hover:scale-110
                                   transition-transform duration-700 " 
                            src={project.image} alt={project.title} />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 gap-4 "> 
                                  <button onClick={()=> window.open(project.live, "_blank")} className='bg-white text-black px-4 py-2 rounded-full 
                                      font-bold transform translate-y-4 group-hover:translate-y-0 hover:bg-[#d1d1d199] cursor-pointer'>View Project</button>

                                       <button onClick={()=> window.open(project.github, "_blank")} className='bg-white text-black px-4 py-2 rounded-full 
                                      font-bold transform translate-y-4 group-hover:translate-y-0 hover:bg-[#d1d1d199] cursor-pointer'>Github</button>
                            </div>
                        </a>
                           {/* for mobile view */}
                   <div className='lg:hidden mt-2 flex items-center justify-start gap-4 mb-4'>
                     <button onClick={()=> window.open(project.live, "_blank")} className='bg-white  text-black px-5 py-1 rounded-full 
                                      font-bold transform translate-y-4 group-hover:translate-y-0 cursor-pointer'>View Project</button>
                    <button onClick={()=> window.open(project.github, "_blank")} className='bg-white  text-black px-3 py-1 rounded-full 
                                      font-bold transform translate-y-4 group-hover:translate-y-0 cursor-pointer'>Github</button>
                   </div>
                   {/* till here */}

                       <div className="mt-8">
                        <div className="hidden lg:flex gap-4">
                            {
                                project.tags.map((skill,index)=>(
                                    <span key={index} className="px-4 rounded-3xl border border-gray-600 bg-neutral-800">
                                        {skill}
                                    </span>
                                ))
                            }
                        </div>
                        <h4 className="font-black text-2xl mt-2 font-[poppin]">{project.title}</h4>
                        <p className="mt-2 text-neutral-400">{project.description}</p>
                       </div>


                  </div>
                ))
            }
         </div>
     </div>
    </div>
  )
}

export default AllProducts