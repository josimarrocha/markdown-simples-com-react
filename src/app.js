'use strict'

import React, { Component } from 'react'
import MarkdownEditor from 'views/markdown-editor'
import marked from 'marked'
import {v4} from 'uuid'
import 'normalize.css'
import 'highlight.js/styles/dracula.css'
import cm from 'codemirror'
import 'codemirror/lib/codemirror.css'
import './css/style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.highlight(lang, code)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor() {
    super()

    this.clearState = () => ({
      value: '',
      title: '',
      id: v4()
    })

    this.state = {
      ...this.clearState(),
      files: {},
      isSaving: null
    }

    this.refe = (node) => {
      this.referencia = node
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      if(this.state.isSaving){
        const files = {
          ...this.state.files,
          [this.state.id]: {
            title: this.state.title || 'Sem titulo',
            content: this.state.value
          }
        }

        let mark = JSON.stringify(files)
        localStorage.setItem('markdown', mark)
        this.setState({
          isSaving: false,
          files
        })
      }
    }
    this.clear = () => {
      this.setState(this.clearState(), () => {
        this.setState({isSaving: null})
      })
      this.codemirror.focus()
      this.codemirror.setValue('')
    }

    this.createNew = () => {
      this.clear()
    }
    this.handleRemove = () => {
      const { [this.state.id]: id, ...files } = this.state.files

      localStorage.setItem('markdown', JSON.stringify(files))
      this.setState({ files})
      this.clear()
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }
  componentDidUpdate() {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 500)
  }
  componentDidMount() {
    const files = JSON.parse(localStorage.getItem('markdown'))
    this.setState({ files })

    cm.fromTextArea(this.referencia, {
      mode: 'textile',
      lineNumbers: true,
      autofocus: true
    }).on('change', (cm) => {
      this.setState({
        value: cm.getValue(),
        isSaving: cm.getValue().length > 0 ? true : false
      })
      this.codemirror = cm
    })
  }

  render() {
    return (
      <MarkdownEditor
        isSaving={this.state.isSaving}
        getMarkup={this.getMarkup}
        refe={this.refe}
        createNew={this.createNew}
        handleRemove={this.handleRemove}
      />
    )
  }
}

export default App

