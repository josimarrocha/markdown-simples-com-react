'use strict'

import React, { PureComponent } from 'react'
import MarkdownEditor from 'views/markdown-editor'
import marked from 'marked'
import 'normalize.css'
import 'highlight.js/styles/dracula.css'
import './css/style.css'

import ('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if(lang && hljs.highlight(lang, code)){
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      value: '',
      lines: []
    }
    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        lines: e.target.value.split('\n')
      })
    }
    this.getMarkup = () => {
      return {__html: marked(this.state.value)}
    }
  }

  render () {
    return (
      <MarkdownEditor
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
        lines={this.state.lines}
      />
    )
  }
}

export default App
