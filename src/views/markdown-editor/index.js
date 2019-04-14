'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Files from 'views/files'

const MarkdownEditor = ({ refe, getMarkup, ...props}) => (
  <section className='editor'>
    <Files {...props}/>
    <Header {...props}/>
    <div className='code'>
      <textarea ref={refe} name='textarea' />
    </div>
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.propTypes = {
  refe: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor
