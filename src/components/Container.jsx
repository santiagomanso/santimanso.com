const Container = ({ children }) => {
  return (
    <div className='w-screen h-screen app'>
      <div className='px-8 lg:px-0 py-12 h-full max-w-full lg:max-w-[75vw] mx-auto bg-primary/20'>
        <nav className='hidden lg:inline text-white text-2xl tracking-wider'>
          <ul className='flex justify-between'>
            <li className=''>home</li>
            <div className=' flex gap-20'>
              <li className=''>portfolio</li>
              <li className=''>about</li>
              <li className=''>skills</li>
            </div>
          </ul>
        </nav>
        {children}
      </div>
    </div>
  )
}

export default Container
