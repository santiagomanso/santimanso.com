import { WithProps } from '../../types/types'

const AppContainer = ({ children }: WithProps) => {
  return (
    <div className='h-screen bg-gradient-to-br dark:bg-gradient-to-bl transition-colors ease-in-out duration-500 from-white to-gray-900 dark:from-neutral-800  dark:to-zinc-800 flex justify-center items-center overflow-y-auto overflow-x-hidden'>
      <main className='flex flex-col h-full max-w-[85rem] lg:justify-center w-full lg:py-5 relative appContainer'>
        {children}
      </main>
    </div>
  )
}

export default AppContainer
