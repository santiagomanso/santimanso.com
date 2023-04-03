import { WithProps } from '../../types/types'

const AppContainer = ({ children }: WithProps) => {
  return (
    <div className='h-screen bg-gradient-to-bl from-neutral-800 to-zinc-800 flex justify-center items-center overflow-y-auto overflow-x-hidden'>
      <main className='flex flex-col h-full max-w-[85rem] lg:justify-center w-full lg:py-5'>
        {children}
      </main>
    </div>
  )
}

export default AppContainer
