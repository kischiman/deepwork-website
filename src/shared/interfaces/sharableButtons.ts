import { ReactNode } from 'react'
import { RoutePaths } from '../../routePaths'

export interface SharableButtons {
  title: string
  link?: string | RoutePaths
  icon?: string | ReactNode
  type?: 'text' | 'outlined' | 'contained'
  onClick?: (() => void) | null
}
