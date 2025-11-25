import React from 'react'

import s from './App.module.scss'
import { Timeline } from '../common/components/Timeline'

export const App = () => {
  return (
    <div className={s.page}>
      <div className={s.pageInner}>
        <header>
          <h1 className={`${s.heading} uik-typography-h1`}>
            Исторические
            <br /> даты
          </h1>
        </header>

        <main className={s.pageContent}>
          <Timeline />
        </main>
      </div>
    </div>
  )
}

export default App
