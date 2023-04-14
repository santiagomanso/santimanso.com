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
          I am a fullstack developer based in berlin, i attended a full-time
          (800+ hours) bootcamp (web developing with Typescript+NextJs). In the
          academy i was happy about beeing surrounded with other people that was
          venturing in the coding world i've been developing apps with react,
          javascript, typescript and different css frameworks since 2+ years.
          Beeing Tailwind Css the one i like the most.
        </p>
      </div>
      {/* <TagCloud /> */}
    </MainContainer>
  )
}

export default About
