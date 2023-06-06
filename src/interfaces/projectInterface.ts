export interface ProjectI {
  id: number
  img: string
  name: string
  stack: string[]
  descShort: string
  descLong: {
    [index: string]: string
    en: string
    es: string
    de: string
  }
  urlDemo: string
  urlCode: string
  screenShots: string[]
  challenges?: string[]
  video?: string
}

export type Projects = ProjectI[]
