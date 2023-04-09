//one footer but showed from the <Navbar /> inside of responsive menu.. and also on <App />
interface FooterPropsI {
  displayOnPc?: boolean
  displayOnPhones?: boolean
}

const Footer = ({ displayOnPc, displayOnPhones }: FooterPropsI) => {
  return (
    <footer
      className={`fixed w-full bottom-5 left-0 text-secondary  items-center justify-center
      ${displayOnPc ? 'hidden lg:flex' : ''}
      ${displayOnPhones ? 'flex lg:hidden' : ''}`}
    >
      <a
        href='https://github.com/santiagomanso'
        target='_blank'
        rel='noreferrer'
        className='text-3xl'
      >
        @Santiagomanso
      </a>
    </footer>
  )
}

export default Footer
