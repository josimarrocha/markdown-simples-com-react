'use strict'

import React, { Component } from 'react'
import MarkdownEditor from 'views/markdown-editor'
import marked from 'marked'
import { v4 } from 'uuid'
import 'normalize.css'
import 'highlight.js/styles/dracula.css'
import cm from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown'
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
      mode: 'markdown',
      lineNumbers: true,
      autofocus: true
    }).on('focus', (cm) => {
      this.setState({isShowFiles: false})
      this.handleChangeCodeMirror(cm)
    })
  }
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
      isSaving: null,
      isShowFiles: false
    }

    this.handleChangeCodeMirror = (cm) =>{
      cm.on('change', () => {
        this.setState({
          value: cm.getValue(),
          isSaving: cm.getValue().length > 0 ? true : false
        })
      })
      this.codemirror = cm
    }

    this.handleChangeInput = (e) => {
      this.setState({title: e.target.value, isSaving: true})
    }

    this.refe = (node) => {
      this.referencia = node
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        const files = {
          ...this.state.files,
          [this.state.id]: {
            title: this.state.title || 'teste',
            content: this.state.value
          }
        }

        let mark = JSON.stringify(files)
        localStorage.setItem('markdown', mark)
        this.setState({ isSaving: false, files })
      }
    }
    this.clear = () => {
      this.setState(this.clearState(), () => {
        this.setState({ isSaving: null, isShowFiles: false })
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
      this.setState({ files })
      this.clear()
    }

    this.showFiles = () => {
      this.setState({ isShowFiles: !this.state.isShowFiles })
    }

    this.handleOpenFile = (fileId) => () => {
      const val = this.state.files[fileId].content
      this.codemirror.setValue(val)
      this.setState({
        isSaving: null,
        value: this.state.files[fileId].content,
        title: this.state.files[fileId].title,
        id: fileId
      })
    }
  }

  render() {
    return (
      <MarkdownEditor
        isSaving={this.state.isSaving}
        isShowFiles={this.state.isShowFiles}
        getMarkup={this.getMarkup}
        refe={this.refe}
        createNew={this.createNew}
        handleRemove={this.handleRemove}
        showFiles={this.showFiles}
        files={this.state.files}
        titleName={this.state.title}
        handleOpenFile={this.handleOpenFile}
        handleChangeInput={this.handleChangeInput}
      />
    )
  }
}

export default App

