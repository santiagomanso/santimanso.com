import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Header from '../components/Header'

const HomeScreen = () => {
  const { text } = useTypewriter({
    words: ['Developer />', '/> <Student />'],
    loop: false, // Infinit
    delaySpeed: 2000,
    typeSpeed: 200,
    deleteSpeed: 90,
  })
  return (
    <>
      <Header />
      <aside className='flex justify-between h-full pb-32'>
        <div className='flex flex-col md:justify-start lg:justify-end '>
          <h1 className='text-4xl sm:text-6xl lg:text-6xl'>
            Santiago Manso Castro
          </h1>
          <span className='text-secondary text-3xl md:text-4xl italic tracking-wide mt-5 lg:mt-0'>
            {'<'}Frontend {text}
            <span className='text-white'>
              {''}
              <Cursor cursorStyle={'_'} />
            </span>
          </span>
        </div>
        <div className='hidden md:flex flex-col justify-end gap-2  text-5xl select-none'>
          <i className='opacity-30 hover:opacity-100 text-white hover:text-secondary  fa-brands fa-linkedin-in'></i>
          <i className='opacity-30 hover:opacity-100 text-white hover:text-secondary  fa-brands fa-github'></i>
        </div>
      </aside>
    </>
  )
}

export default HomeScreen
