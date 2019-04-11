'use strict'

import React from 'react'
import Header from './header'

const MarkdownEditor = ({handleChange, getMarkup, lines}) => (
  <section className='editor'>
    <Header />
    <span className='numbers'>
      {lines.map((number, index) => (
        <div><span className='number' key={index}>{index + 1}</span></div>
      ))}
    </span>
    <textarea name='textarea' onChange={handleChange}/>
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

export default MarkdownEditor
