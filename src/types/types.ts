import { ReactNode } from 'react'

export type NoProps = {}
export type WithProps = React.PropsWithChildren<{}>

export type LanguageContextValueObj = {
  text: object
  language: string
  flag: string
  name: string
  changeLanguage: fnStrStrStrToVoid
}

export type fnStrStrStrToVoid = (
  arg1: string,
  arg2: string,
  arg3: string,
) => void
