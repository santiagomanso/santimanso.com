export interface ProjectI {
  id: number
  img: string
  name: string
  stack: string[]
  descShort: string
  descLong: string
  urlDemo: string
  urlCode: string
  screenShots: string[]
  video?: string
}

export type Projects = ProjectI[]
