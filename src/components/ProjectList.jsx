import { projectsData } from '../data/projects'
import { ModalContext } from '../context/ModalContext'
import { useContext, useState } from 'react'
import Modal from './Modal'

const ProjectList = () => {
  const [open, setOpen] = useContext(ModalContext)

  const [img, setImg] = useState('')
  const [name, setName] = useState('')
  const [stack, setStack] = useState('')
  const [about, setAbout] = useState('')
  const [urlDemo, setUrlDemo] = useState('')
  const [urlCode, setUrlCode] = useState('')

  const handlerCloseModal = () => {
    setOpen(false)
  }

  return (
    <>
      <div className='h-4/5 md:max-h-3/5 lg:h-[85%] xl:max-h-4/5 flex flex-wrap justify-center md:justify-center xl:justify-between xl:items-start gap-14 md:gap-14 xl:gap-1 py-3 px-2'>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className='relative h-1/4 w-2/5 md:w-1/3 md:h-1/4 lg:w-[28%] lg:h-2/5 bg-gray-600/90 hover:bg-blue-300/20  rounded-lg flex flex-col justify-between items-center overflow-hidden group card border-solid border-[1px] border-white/30 hover:border-white/80'
          >
            <div className='text-white'>
              <img
                src={project.img}
                alt='quote'
                className='absolute left-[10%] w-5/6 h-5/6 group-hover:scale-[1.8] group-hover:-rotate-[23deg] group-hover:opacity-50 transition-all duration-1000'
              />
            </div>
            <div className='relative w-full h-full lg:h-[65%] bg-zinc-900/80 flex flex-col gap-1 justify-start items-center text-white  group-hover:bg-zinc-900/80 rounded-md  xl:h-2/3 translate-y-[79%] md:translate-y-[79%] lg:translate-y-[75%] xl:translate-y-[70%] group-hover:translate-y-0 transition-all duration-[450ms]'>
              <h1 className='pt-1 xl:pt-3 text-lg md:text-xl lg:text-3xl xl:text-4xl'>
                {project.name}
              </h1>
              <p className='text-sm lg:text-xl xl:text-2xl px-3 lg:px-5'>
                {project.descShort}
              </p>
              <button
                onClick={() => {
                  setOpen(true)
                  setName(project.name)
                  setStack(project.stack)
                  setImg(project.img)
                  setAbout(project.descLong)
                  setUrlDemo(project.urlDemo)
                  setUrlCode(project.urlCode)
                }}
                className='absolute lg:text-xl bottom-2 lg:bottom-4 cta px-2 lg:px-10 xl:px-14  py-1 xl:py-2 rounded-md border-solid border-2 border-white  text-white tracking-widest'
              >
                view project
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={open}
        onClose={handlerCloseModal}
        name={name}
        img={img}
        about={about}
        urlDemo={urlDemo}
        urlCode={urlCode}
        stack={stack}
      />
    </>
  )
}

export default ProjectList
