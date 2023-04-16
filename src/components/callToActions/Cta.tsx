import React, { useContext } from 'react'
import { AnimationContext } from '../../context/animationContext'
import { useNavigate } from 'react-router-dom'
import { LanguageContext } from '../../context/LanguageContext'
import { diccionary } from '../../data/diccionary'

type Props = {}

const Cta = (props: Props) => {
  const { text } = useContext(LanguageContext)
  const navigate = useNavigate()
  const { animationSwipe } = useContext(AnimationContext)
  return (
    <button
      onClick={() => navigate('/portfolio')}
      className={`${animationSwipe} text-xl lg:text-3xl bg-purple-600 text-gray-200 tracking-wide group-hover:-translate-y-2 transition-all ease-in-out duration-300 px-8 py-2 rounded-md select-none`}
    >
      {text.myWork}
    </button>
  )
}

export default Cta
