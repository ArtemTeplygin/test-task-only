import React from 'react'

import { Timeline } from 'features/timeline/ui/Timeline'

import s from './App.module.scss'

export const App = () => {
  return (
    <div className={s.page}>
      <div className={s.pageInner}>
        <header className={s.header}>
          <h1 className={`${s.heading} uik-typography-h1`}>
            Исторические
            <br /> даты
          </h1>
        </header>

        <main>
          <Timeline />
        </main>
      </div>
    </div>
  )
}

export default App
