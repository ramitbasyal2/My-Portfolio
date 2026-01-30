import { ArrowLeft } from "lucide-react"
import { allProject } from "../../assets/project"
import { useNavigate } from "react-router-dom"

const AllProducts = () => {

    const navigate = useNavigate()

  return (
    <div className='p-5 md:p-5 lg:p-10  w-full bg-black'>
     <div className="max-w-7xl mx-auto">
            <div className=" flex items-center justify-between ">
            <h1 className="text-4xl font-bold tracking-wide">
                <span className="border-b-6 border-gray-500">All Pro</span>𝒥<span className="border-b-6 border-gray-500">ects</span> :</h1>
            <div className="bg-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-900 cursor-pointer" onClick={()=> navigate('/')} ><ArrowLeft/></div>
                </div>
             <div className="grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-3">
             {
                allProject.map((project,index)=>(
                    <div key={index} className={`rounded-xl pb-4 ${project.id <= 3 ? 'mt-20' : ''} `}> 
                        <a className="group relative block overflow-hidden" href={project.link}>
                            <img className="rounded-xl object-cover group-hover:scale-110
                                   transition-transform duration-700 " 
                            src={project.image} alt={project.title} />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="bg-white text-black  px-4 py-2 rounded-[50px] font-bold
                                 hover:bg-[#d1d1d1d8] duration-300 transform translate-y-4 group-hover:translate-y-0  transition-transform ">View Project</span>
                            </div>
                        </a>

                       <div className="mt-4">
                        <div className="flex gap-4">
                            {
                                project.tags.map((skill,index)=>(
                                    <span className="px-4 rounded-3xl border border-gray-600 bg-neutral-800">
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