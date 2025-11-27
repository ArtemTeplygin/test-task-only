import React from 'react'

import { Timeline } from 'features/timeline/ui/Timeline'

import s from './App.module.scss'

export const App = () => {
  return (
    <div className={s.page}>
      <div className={s.pageInner}>
        <main>
          <Timeline />
        </main>
      </div>
    </div>
  )
}

export default App
