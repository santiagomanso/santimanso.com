const Container = ({ children }) => {
  return (
    <div className='app w-screen h-screen flex flex-col justify-center'>
      <div className='w-full lg:w-[70%] my-0 mx-auto'>{children}</div>
    </div>
  )
}

export default Container
