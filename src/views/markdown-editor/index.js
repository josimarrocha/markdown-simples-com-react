'use strict'

import React from 'react'
import Header from './header'

const MarkdownEditor = () => (
  <section className='editor'>
    <Header />
    <textarea name='textarea'/>
    <article className='view'/>
  </section>
)

export default MarkdownEditor
