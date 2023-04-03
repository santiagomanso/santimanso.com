import santi from '../assets/santi.png'
type Props = {}

const About = (props: Props) => {
  return (
    <div>
      <div className='flex items-center justify-center '>
        <img
          src={santi}
          alt='santiago manso'
          className='rounded-full object-top'
        />
      </div>
      <h2 className='text-center text-2xl'>About me</h2>
      <p className='text-secondary text-center px-20 tracking-wider'>
        I am a fullstack developer based in berlin, i attended a full-time (800+
        hours) bootcamp (web developing with Typescript+NextJs). In the academy
        i was happy about beeing surrounded with other people that was venturing
        in the coding world i've been developing apps with react, javascript,
        typescript and different css frameworks since 2+ years. Beeing Tailwind
        Css the one i like the most.
      </p>
    </div>
  )
}

export default About
