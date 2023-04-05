type Props = {}

const FloatingIcons = (props: Props) => {
  return (
    <div className='hidden lg:flex flex-col items-center pr-[0.20rem] '>
      <a
        href='https://www.linkedin.com/in/santimanso/'
        target='_blank'
        rel='noreferrer'
        className=' flex items-baseline opacity-30 hover:opacity-100 gap-1 text-2xl group'
      >
        <label className='cursor-pointer scale-0 group-hover:scale-100 transition-all duration-[400ms] translate-x-14 group-hover:-translate-x-2 '>
          linked
        </label>
        <i className='cursor-pointer  text-white group-hover:text-[#0A66C2]  fa-brands fa-linkedin-in text-3xl group-hover:-rotate-[20deg] group-hover:scale-[1.5] transition-all ease-in duration-300 '></i>
      </a>
      <a
        href='https://github.com/santiagomanso'
        target='_blank'
        rel='noreferrer'
        className='flex items-center opacity-30 hover:opacity-100 gap-1 text-2xl group'
      >
        <label className='cursor-pointer scale-0 group-hover:scale-100 transition-all duration-[400ms] translate-x-14 group-hover:-translate-x-2 '>
          github
        </label>
        <i className='cursor-pointer text-white group-hover:text-[#fafafa]  fa-brands fa-github text-3xl group-hover:-rotate-[20deg] group-hover:scale-[1.5] transition-all ease-in duration-300'></i>
      </a>
    </div>
  )
}

export default FloatingIcons
