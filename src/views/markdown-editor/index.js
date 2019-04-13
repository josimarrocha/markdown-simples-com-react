'use strict'

import React from 'react'
import Header from './header'

const MarkdownEditor = ({ refe, createNew, getMarkup, handleRemove, isSaving }) => (
  <section className='editor'>
    <Header createNew={createNew} handleRemove={handleRemove} isSaving={isSaving}/>
    <div className='code'>
      <textarea ref={refe} name='textarea' />
    </div>
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

export default MarkdownEditor
