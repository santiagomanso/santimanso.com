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
    </>
  )
}

export default HomeScreen
