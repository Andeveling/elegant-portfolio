import { JSX } from 'react'

export interface Props {
  children: JSX.Element | JSX.Element[]
}

export interface SkillsI {
  id: number | string
  title: string
}

export interface ProjectI {
  id: number | string
  title: string
  subtitle: string
  description: string
  imageUrl: string
  imagesUrl: string[]
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
