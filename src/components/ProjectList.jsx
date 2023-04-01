import { projectsData } from '../data/projects'
import { ModalContext } from '../context/ModalContext'
import { useContext, useState } from 'react'
import Modal from './Modal'
import { AnimationContext } from '../context/animationContext'
import { NavContext } from '../context/NavContext'

const ProjectList = () => {
  const [
    animation1,
    animation2,
    animation3,
    setAnimation1,
    setAnimation2,
    setAnimation3,
  ] = useContext(AnimationContext)

  const [openModal, setOpenModal] = useContext(ModalContext)
  const [openNav, showNav, setOpenNav, setShowNav] = useContext(NavContext)

  const [img, setImg] = useState('')
  const [name, setName] = useState('')
  const [stack, setStack] = useState('')
  const [about, setAbout] = useState('')
  const [urlDemo, setUrlDemo] = useState('')
  const [urlCode, setUrlCode] = useState('')
  const [screenshots, setScreenshots] = useState('')
  const [video, setVideo] = useState('')

  const handlerCloseModal = () => {
    setAnimation3('animate__animated animate__slideOutRight')
    setTimeout(() => {
      setAnimation3('animate__animated animate__slideInRight')
    }, 900)
    setTimeout(() => {
      setOpenModal(false)
      setShowNav(true) //hide navigation bar from smartphones
    }, 750)
  }

  return (
    <>
      <div className='mt-2 relative flex flex-wrap justify-center gap-x-5 lg:gap-x-10 gap-y-6 lg:justify-between  select-none'>
        {projectsData.map((project) => (
          <div
            onClick={() => {
              setShowNav(false)
              setOpenModal(true)
              setName(project.name)
              setStack(project.stack)
              setImg(project.img)
              setAbout(project.descLong)
              setUrlDemo(project.urlDemo)
              setUrlCode(project.urlCode)
              setScreenshots(project.screenShots)
              setVideo('video feature is currently beeing developed')
            }}
            key={project.id}
            className='relative overflow-hidden group card border-solid border-[3px] border-secondary/40 hover:border-white/60  h-48 w-40 lg:h-60 lg:w-60  bg-slate-400/50 hover:bg-black/20 rounded-md cursor-pointer'
          >
            <div className='text-white'>
              <img
                src={project.img}
                alt='quote'
                className='absolute bg-orange-400 left-[10%] w-5/6 h-5/6 group-hover:scale-[1.8] group-hover:-rotate-[23deg] group-hover:opacity-50 transition-all duration-1000'
              />
            </div>
            <div
              className='relative h-full bg-zinc-900/80  translate-y-[77%] lg:translate-y-[76%] group-hover:-translate-y-[0%] flex flex-col gap-1 justify-start items-center text-white
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
                  setShowNav(false)
                  setOpenModal(true)
                  setName(project.name)
                  setStack(project.stack)
                  setImg(project.img)
                  setAbout(project.descLong)
                  setUrlDemo(project.urlDemo)
                  setUrlCode(project.urlCode)
                  setScreenshots(project.screenShots)
                  setVideo('video feature is currently beeing developed')
                }}
                className='bg-secondary text-variant1 hover:text-white cta2 font-semibold absolute lg:text-xl bottom-2 lg:bottom-4 px-2 lg:px-10  py-1 xl:py-2 rounded-md border-solid border-2 border-white   tracking-wider'
              >
                view project
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={openModal}
        onClose={handlerCloseModal}
        name={name}
        img={img}
        about={about}
        urlDemo={urlDemo}
        urlCode={urlCode}
        stack={stack}
        screenshots={screenshots}
        video={video}
      />
    </>
  )
}

export default ProjectList
