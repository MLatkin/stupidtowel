import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import MainPage from '../pages/main'
import ThemePage from '../pages/theme'
import AboutPage from '../pages/about'
import Header from '../molecules/header'


export default function App() {
  return (
    <BrowserRouter>
      <Route component={Header} />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/:theme" component={ThemePage} />
      </Switch>
    </BrowserRouter>
  )
}
