import { WithProps } from '../../types/types'

const AppContainer = ({ children }: WithProps) => {
  return (
    <div className='h-screen bg-gradient-to-bl from-neutral-800 to-zinc-800 flex justify-center items-center '>
      <main className='flex flex-col  h-full max-w-7xl w-full lg:py-8'>
        {children}
      </main>
    </div>
  )
}

export default AppContainer
