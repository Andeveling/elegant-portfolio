import { JSX } from 'react'

export interface Props {
  children: JSX.Element | JSX.Element[]
}

export interface SkillsI {
  id: number | string
  title: string
}
export interface ImagesCollectionI {
  id: number | string
  title: string
  url: string
}
export interface ProjectI {
  id: number | string
  title: string
  subtitle: string
  description: string
  imageUrl: string
  imagesUrl: ImagesCollectionI[]
  repository: string
  deploy: string
  role: string
  tech: string[]
  contribution: string
}

declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.gif'
