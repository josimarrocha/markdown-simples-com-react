'use strict'

import React from 'react'
import './message.css'

const MessageSaving = ({isSaving}) => (
  <div className='message'>
    <p className='p'>{isSaving ? 'Salvando...': 'Salvo!'}</p>
  </div>
)

export default MessageSaving
