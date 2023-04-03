import { projectsData } from '../data/projects'
import { ModalContext } from '../context/ModalContext'
import { useContext, useState } from 'react'
import Modal from './Modal'

const ProjectList = () => {
  // const {} = useContext(AnimationContext)

  const [openModal, setOpenModal] = useContext(ModalContext)

  const [img, setImg] = useState('')
  const [name, setName] = useState('')
  const [stack, setStack] = useState('')
  const [about, setAbout] = useState('')
  const [urlDemo, setUrlDemo] = useState('')
  const [urlCode, setUrlCode] = useState('')
  const [screenshots, setScreenshots] = useState('')
  const [video, setVideo] = useState('')

  const handlerCloseModal = () => {
    setTimeout(() => {}, 900)
    setTimeout(() => {
      setOpenModal(false)
      // setShowNav(true) //hide navigation bar from smartphones
    }, 750)
  }

  return (
    <>
      <div className='relative grid grid-cols-1 lg:grid-cols-3 w-full gap-10 select-none h-full lg:p-10'>
        {projectsData.map((project) => (
          <article
            // onClick={() => {
            //   // setShowNav(false)
            //   setOpenModal(true)
            //   setName(project.name)
            //   setStack(project.stack)
            //   setImg(project.img)
            //   setAbout(project.descLong)
            //   setUrlDemo(project.urlDemo)
            //   setUrlCode(project.urlCode)
            //   setScreenshots(project.screenShots)
            //   setVideo('video feature is currently beeing developed')
            // }}
            key={project.id}
            className='relative overflow-hidden group card border-solid border-[3px] border-secondary/40 hover:border-white/60 h-[250px] lg:h-auto lg:w-auto bg-gradient-to-br from-neutral-900 to-neutral-400 hover:bg-black/20 rounded-md cursor-pointer lg:cursor-default'
          >
            <div className='text-white'>
              <img
                src={project.img}
                alt='quote'
                className='absolute left-[10%] w-5/6 h-5/6 group-hover:scale-[1.8] group-hover:-rotate-[23deg] group-hover:opacity-50 transition-all duration-1000'
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
                  // setShowNav(false)
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
          </article>
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
