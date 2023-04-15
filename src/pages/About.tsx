import TagCloud from '../components/TagCloud'
import MainContainer from '../components/containers/MainContainer'

const santi = require('../assets/santi.png')
type Props = {}

const About = (props: Props) => {
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
          About me
        </h2>
        <p className='text-slate-600 dark:text-secondary text-center px-20 tracking-widest text-xl'>
          I'm a full stack developer based in Berlin, I attended a full time
          (800+ hours) bootcamp (web development with Typescript+NextJs). At the
          academy I was happy to be around other people who were venturing into
          the world of coding. I have been developing applications with React,
          JavaScript, TypeScript and different CSS frameworks for more than 2
          years. Being Tailwind Css the one I like the most.
        </p>
      </div>
      {/* <TagCloud /> */}
    </MainContainer>
  )
}

export default About
