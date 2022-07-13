import { useContext } from 'react'
import ProjectList from '../components/ProjectList'
import { AnimationContext } from '../context/animationContext'

const PortfolioScreen = () => {
  const [
    animation1,
    animation2,
    animation3,
    setAnimation1,
    setAnimation2,
    setAnimation3,
  ] = useContext(AnimationContext)

  return (
    <div className={` ${animation1} self-start mt-2 w-full`}>
      <div className='flex flex-col items-center xl:items-start select-none'>
        <h1 className='text-white text-3xl tracking-wider'>
          <span className='hidden md:inline'>my </span>portfolio
        </h1>
        <h2 className='hidden sm:block text-secondary text-md lg:text-xl tracking-wider word-2'>
          '// These are my favorite projects I've worked on for the past year.
          Have a look around
        </h2>
      </div>
      <ProjectList />
    </div>
  )
}

export default PortfolioScreen
