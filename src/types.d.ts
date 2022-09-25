import { JSX } from 'react'

export interface Props {
  children: JSX.Element | JSX.Element[]
}

export interface ProjectI {
  id: number | string
  title: string
  subtitle: string
  description: string
  imageUrl: string
  repository: string
  deploy: string
  tech: string[]
}

declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.gif'
