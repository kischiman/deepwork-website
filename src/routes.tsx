import { RouteProps } from 'react-router-dom'
import { RoutePaths } from './routePaths'
import { Home } from './pages/Home'
import { Article } from './pages/Article'
import { Articles } from './pages/Articles'
import { AboutUs } from './pages/AboutUs'
import { Contact } from './pages/Contact'
import { CaseStudies } from './pages/CaseStudies'
import { CaseStudy } from './pages/CaseStudy'

export const Routes: RouteProps[] = [
  {
    path: RoutePaths.article,
    component: Article,
  },
  {
    path: RoutePaths.articles,
    component: Articles,
  },
  {
    path: RoutePaths.caseStudy,
    component: CaseStudy,
  },
  {
    path: RoutePaths.caseStudies,
    component: CaseStudies,
  },
  {
    path: RoutePaths.contact,
    component: Contact,
  },
  {
    path: RoutePaths.aboutUs,
    component: AboutUs,
  },
  {
    path: RoutePaths.home,
    children: Home,
    exact: true,
  },
]
