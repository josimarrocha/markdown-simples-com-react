'use strict'

import React, { PureComponent } from 'react'
import MarkdownEditor from 'views/markdown-editor'
import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()

  }

  render () {
    return (
      <MarkdownEditor />
    )
  }
}

export default App
