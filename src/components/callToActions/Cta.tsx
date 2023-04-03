import React, { useContext } from 'react'
import { AnimationContext } from '../../context/animationContext'

type Props = {}

const Cta = (props: Props) => {
  const { animationSwipe } = useContext(AnimationContext)
  return (
    <button
      className={`${animationSwipe} text-xl lg:text-3xl bg-purple-500/80 text-gray-200 tracking-wide group-hover:-translate-y-2 transition-all ease-in-out duration-300 px-8 py-2 rounded-md select-none`}
    >
      my work
    </button>
  )
}

export default Cta
