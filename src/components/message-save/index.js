'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import './message.css'

const MessageSaving = ({isSaving}) => (
  <div className='message'>
    <p className='p'>{isSaving ? 'Salvando...': 'Salvo!'}</p>
  </div>
)

MessageSaving.propTypes = {
  isSaving: PropTypes.bool
}

export default MessageSaving
