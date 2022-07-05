import ProjectList from '../components/ProjectList'

const PortfolioScreen = () => {
  return (
    <div className='h-screen md:w-5/6 select-none overflow-hidden'>
      <div className='flex flex-col items-center xl:items-start py-1 md:py-2 px-5 md:px-14 xl:px-2'>
        <h1 className='text-white text-5xl md:pt-5 xl:pt-10'>
          <span className='hidden md:inline'>my </span>portfolio
        </h1>
        <h2 className='hidden sm:block text-secondary text-md lg:text-3xl'>
          '// These are my favorite projects I've worked on for the past year.
          Have a look around
        </h2>
      </div>
      <ProjectList />
    </div>
  )
}

export default PortfolioScreen
