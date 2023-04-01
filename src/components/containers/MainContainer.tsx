import { WithProps } from '../../types/types'

const MainContainer = ({ children }: WithProps) => {
  return <section className='px-5 py-4 lg:p-0 relative'>{children}</section>
}

export default MainContainer
