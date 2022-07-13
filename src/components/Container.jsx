import Nav from './Nav'
import ProjectList from './ProjectList'

const Container = ({ children }) => {
  return (
    <div className='w-screen h-screen app'>
      <div
        className='h-full max-w-full lg:max-w-[65vw] mx-auto text-white 
      grid grid-cols-1 content-start'
      >
        <div className='lg:pt-12'>
          <Nav />
        </div>
        <div className=''>
          <div className=' flex h-full items-start lg:items-end overflow-hidden'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container
