import React from 'react'
import { Routes } from './routes'
import styles from './App.module.css'
import { Route, Switch, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { RoutePaths } from './routePaths'

function App() {
  const location = useLocation()

  const wrapperClass = () => {
    switch (location.pathname) {
      case RoutePaths.home:
        return styles.home
      case RoutePaths.caseStudies:
        return styles.caseStudies
      case RoutePaths.articles:
        return styles.articles
      case RoutePaths.contact:
        return styles.contact
      case RoutePaths.aboutUs:
        return styles.aboutUs
    }

    if (location.pathname.includes('/case-studies/')) {
      return styles.caseStudyDetails
    }
    if (location.pathname.includes('/articles/')) {
      return styles.articleDetails
    }
  }

  return (
    <div className={wrapperClass()}>
      <Header />
      <Switch>
        {Routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default App
