const Container = ({ children }) => {
  return (
    <div className='w-screen h-screen app'>
      <div className='px-8 lg:px-0 pb-48 pt-14 h-full max-w-full lg:max-w-[65vw] mx-auto'>
        {children}
      </div>
    </div>
  )
}

export default Container
