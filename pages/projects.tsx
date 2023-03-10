import { AiFillGithub } from 'react-icons/ai';
import Projects from '../projects/projects.json';


function card(){
    return(
        <div data-aos="fade-left" id='id' className='px-1 flex justify-start gap-12 h-96 overflow-auto p-8  '>
            {
                Projects.map( project=>{
                    return(
                        <div id='card'  className='font-semibold max-w-xl mx-2 p-2 border-2 dark:border-none  bg-opacity-90 bg-white text-center shadow-xl  dark:bg-white dark:bg-opacity-10 dark:shadow-[2px_2px_10px_rgba(225,225,225,0.25)] ' key={project.id}>
                            <h1 className='text-xl  font-bold py-2   my-1.5 dark:text-teal-400'>{project.title}</h1>
                            <p className='dark:text-white my-2'>{project.content}</p>
                            <p className='text-teal-500 my-2'>{project.tools}</p>
                            
                            <a target="_blank" rel="noreferrer" className='dark:text-white flex justify-center p-5' href={project.link}>
                            <AiFillGithub className=' icons hover:text-teal-500 text-4xl ' />
                                </a>    
                        </div>
                    )
                })
            }
        </div>
    );
}

export default card;