import { useContext } from 'react'
import MainContainer from '../components/containers/MainContainer'
import { LanguageContext } from '../context/LanguageContext'

const santi = require('../assets/santi.png')
type Props = {}

const About = (props: Props) => {
  const { text } = useContext(LanguageContext)
  return (
    <MainContainer gap='gap-4' padding='pt-5 lg:py-10'>
      <div className='flex items-center justify-center bg-secondary rounded-full overflow-hidden border-2 border-secondary bg-gradient-to-br from-slate-800 to-neutral-600'>
        <img
          src={santi}
          alt='santiago manso'
          className='rounded object-contain  object-bottom w-[300px] h-[300px]'
        />
      </div>
      <div>
        <h2 className='text-center text-3xl font-medium text-slate-700 dark:text-gray-200'>
          {text.aboutMe}
        </h2>
        <p className='text-slate-600 dark:text-secondary text-center px-20 tracking-widest text-xl'>
          {text.aboutMeText}
        </p>
      </div>
      {/* <TagCloud /> */}
    </MainContainer>
  )
}

export default About
