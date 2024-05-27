export type TPortfolioCard = {
  name: string
  description: string
  image?: string
  link?: string
  tools?: string[]
}

export type TExperience = {
  dateStart: string
  dateEnd: string
  company: string
  role: string
  description: string[]
}

export type TCertificate = {
  title: string
  date: string
  description: string[]
}

export type TProject = {
  name: string
  description: string[]
  link?: string
}

export type TSkillset = {
  name: string
  skills: string[]
}
