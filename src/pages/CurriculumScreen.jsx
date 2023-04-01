import { useContext } from 'react'
import santi from '../assets/santi.png'
import { AnimationContext } from '../context/animationContext'

const CurriculumScreen = () => {
  const [animation1] = useContext(AnimationContext)

  return (
    <div className={` ${animation1} flex w-full h-[70vh] mt-10 lg:mt-5 `}>
      <div className='bg-blue-500/30 w-[40%] rounded-xl px-5 overflow-auto'>
        <img
          src={santi}
          alt='santi'
          className='w-48 h-48 mx-14 mt-4 border-2 border-solid border-white object-cover object-top'
        />
        <h1 className='text-white mt-10 text-2xl border-b-2 border-white border-solid tracking-wider'>
          contact
        </h1>
        <ul>
          <li className='font-console'>
            icon - <span className='font-console'>+491744538564</span>
          </li>
          <li className='font-console'>
            icon - <span className='font-console'>mansi.manito@gmail.com</span>
          </li>
          <li className='font-console'>
            icon - <span className='font-console'>Berlin, Germany</span>
          </li>
          <li className='font-console'>
            icon - <span className='font-console'>Spanish</span>
          </li>
          <li className='font-console'>
            icon - <span className='font-console'>linkedIn</span>
          </li>
          <li className='font-console'>
            icon - <span className='font-console'>github</span>
          </li>
        </ul>
        <h1 className='text-white mt-10 text-2xl border-b-2 border-white border-solid tracking-wider'>
          Area of Expertise
        </h1>
        <ul className='text-sm'>
          <li className='font-console'>English-Proficient</li>
          <li className='font-console'>Spanish-Native</li>
          <li className='font-console'>German-A2</li>
          <li className='font-console'>Portuguese-Conversation</li>
          <li className='font-console'>Microsoft Office</li>
          <li className='font-console'>JavaScript</li>
          <li className='font-console'>HTML</li>
          <li className='font-console'>CSS</li>
          <li className='font-console'>jQuery</li>
          <li className='font-console'>Git</li>
          <li className='font-console'>GitHub</li>
          <li className='font-console'>Bootstrap</li>
          <li className='font-console'>React</li>
          <li className='font-console'>Redux</li>
          <li className='font-console'>Node.js</li>
          <li className='font-console'>MongoDB</li>
          <li className='font-console'>Software testing and training</li>
          <li className='font-console'>Proficient Troubleshooter</li>
          <li className='font-console'>Web-based and Mobile Applications</li>
          <li className='font-console'>Responsive Design & Mobile-First</li>
          <li className='font-console'>Websites</li>
          <li className='font-console'>Documentation Management</li>
          <li className='font-console'>Web Development</li>
          <li className='font-console'>UI/UX</li>
          <li className='font-console'>Agile Framework</li>
          <li className='font-console'>Conflict resolution</li>
          <li className='font-console'>Team Player</li>
          <li className='font-console'>Multi-tasking</li>
          <li className='font-console'>Organizational skills</li>
          <li className='font-console'>Problem solving</li>
          <li className='font-console'>Strong Communication</li>
          <li className='font-console'>Decision making</li>
        </ul>

        <h2 className='text-white mt-10 text-2xl border-b-2 border-white border-solid tracking-wider'>
          Education
        </h2>
        <ul className='flex flex-col gap-3'>
          <li className=''>
            <div className='flex flex-col'>
              <span className='font-console font-bold'>
                - Berlin Code Academy
              </span>
              <p className='font-console pl-5'>Frontend developer</p>
              <p className='font-console pl-5'>Mar, 2022 - present</p>
            </div>
          </li>
          <li className=''>
            <div className='flex flex-col'>
              <span className='font-console font-bold'>
                - National University of the Northwest
              </span>
              <p className='font-console pl-5'>
                Bachelor's in information systems
              </p>
              <p className='font-console pl-5'>Feb, 2016 - Nov 2020</p>
            </div>
          </li>
        </ul>
      </div>
      <div className='bg-slate-100 w-[60%] rounded-xl px-5  overflow-auto'>
        <h1 className='text-blue-900 text-3xl tracking-wider flex justify-center mt-2'>
          Santiago Manso Castro
        </h1>
        <h2 className='text-2xl text-blue-900'>profile summary</h2>
        <div className='border-solid border-sky-800 border-b-2' />
        <p className='text-black font-console text-sm'>
          Knowledgeable and Passionate Front-End Web Developer with experience
          using JavaScript, HTML, and CSS to build all aspects of the user
          experience and user interface for client-facing landing pages. Skilled
          in designing, developing and testing multiple web-based applications
          incorporating a range of technologies. Aspiring to combine broad
          knowledge with strong technical skills to excel as a Front-End
          Developer. Highly adept at both independent and collaborative
          projects, with an emphasis on landing page and website development.
          Passion for responsive website design and a firm believer in the
          mobile-first approach. Implement new responsive website approaches
          which increase mobile traffic by at least 20%. Eager to tackle more
          complex problems and continue to find ways to maximize user
          efficiency.
        </p>
        <h2 className='text-2xl text-blue-900 mt-6'>work experience</h2>
        <div className='border-solid border-sky-800 border-b-2' />
        <div className='flex justify-between'>
          <h2 className='text-black text-lg'>Flink, Berlin Germany</h2>
          <span className='text-gray-400 font-console'>oct 2021 - present</span>
        </div>
        <span className='text-black text-sm'>Shift Leader</span>
        <ul className='text-black'>
          <li className=' font-console text-sm pl-3'>
            Lead a team of 25 people and increased performance on time by 15%.
          </li>
          <li className=' font-console text-sm pl-3'>
            Evaluate employee skills and knowledge regularly, training and
            mentoring
          </li>
          <li className=' font-console text-sm pl-3'>
            individuals with lagging skills. Handled an average of 450 orders
            daily.
          </li>
          <li className=' font-console text-sm pl-3'>
            Supervise inventory associates by providing direction and
            instruction
          </li>
          <li className=' font-console text-sm pl-3'>
            for stocking shelves, rotating stock, and receiving deliveries using
            Zebra. Keep documentation and records accurate and up-to-date with
          </li>
          <li className=' font-console text-sm pl-3'>
            latest data to prevent errors in processing or delivery
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CurriculumScreen
