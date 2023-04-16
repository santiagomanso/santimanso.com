export interface ContextLanguageData {
  text: string
  language: string
  name: string
  flag: string
  changeLanguage: (language: string, name: string, flag: string) => void
}

export interface Country {
  id: number
  name: {
    [index: string]: string
    en: string
    es: string
    de: string
  }
  flag: string
  language: 'en' | 'de' | 'es'
}

export interface Dictionary {
  [index: string]: object
}
