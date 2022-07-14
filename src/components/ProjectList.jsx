import { projectsData } from '../data/projects'
import { ModalContext } from '../context/ModalContext'
import { useContext, useState } from 'react'
import Modal from './Modal'
import { AnimationContext } from '../context/animationContext'

const ProjectList = () => {
  const [
    animation1,
    animation2,
    animation3,
    setAnimation1,
    setAnimation2,
    setAnimation3,
  ] = useContext(AnimationContext)

  const [open, setOpen] = useContext(ModalContext)

  const [img, setImg] = useState('')
  const [name, setName] = useState('')
  const [stack, setStack] = useState('')
  const [about, setAbout] = useState('')
  const [urlDemo, setUrlDemo] = useState('')
  const [urlCode, setUrlCode] = useState('')
  const [screenshot, setScreenshot] = useState('')
  const [video, setVideo] = useState('')

  const handlerCloseModal = () => {
    setAnimation3('animate__animated animate__slideOutRight')
    setTimeout(() => {
      setAnimation3('animate__animated animate__slideInRight')
    }, 900)
    setTimeout(() => {
      setOpen(false)
    }, 750)
  }

  return (
    <>
      <div className='mt-2 relative flex flex-wrap justify-between gap-x-20 gap-y-10 select-none'>
        {projectsData.map((project) => (
          <div
            onClick={() => {
              setOpen(true)
              setName(project.name)
              setStack(project.stack)
              setImg(project.img)
              setAbout(project.descLong)
              setUrlDemo(project.urlDemo)
              setUrlCode(project.urlCode)
              setScreenshot('feature is currently beeing developed')
              setVideo('video feature is currently beeing developed')
            }}
            key={project.id}
            className='relative overflow-hidden group card border-solid border-[3px] border-secondary/40 hover:border-white/60  h-60 w-60 bg-lime-500/70 hover:bg-black/20 rounded-md cursor-pointer'
          >
            <div className='text-white'>
              <img
                src={project.img}
                alt='quote'
                className='absolute left-[10%] w-5/6 h-5/6 group-hover:scale-[1.8] group-hover:-rotate-[23deg] group-hover:opacity-50 transition-all duration-1000'
              />
            </div>
            <div
              className='relative h-full bg-zinc-900/80 translate-y-[76%] group-hover:-translate-y-[0%] flex flex-col gap-1 justify-start items-center text-white
              group-hover:bg-zinc-900/80 rounded-md   transition-all duration-[450ms]'
            >
              <h1 className='pt-2 xl:pt-3 text-xl md:text-xl lg:text-3xl xl:text-3xl'>
                {project.name}
              </h1>
              <p className='text-sm lg:text-xl xl:text-xl px-3 lg:px-5 tracking-wider'>
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
                  setScreenshot('feature is currently beeing developed')
                  setVideo('video feature is currently beeing developed')
                }}
                className='absolute lg:text-xl bottom-2 lg:bottom-4 cta px-2 lg:px-10  py-1 xl:py-2 rounded-md border-solid border-2 border-white  text-white tracking-wider'
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
        screenshots={screenshot}
        video={video}
      />
    </>
  )
}

export default ProjectList
