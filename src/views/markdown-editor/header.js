'use strict'

import React from 'react'
import Button from 'components/button'
import MessageSave from 'components/message-save'

const HeaderMarkdown = ({ createNew, handleRemove, isSaving }) => (
  <header className='header'>
    {isSaving !== null && <MessageSave isSaving={isSaving}/>}
    <input type='text' />
    <Button handleClick={() => null} color='#599CFF'>Mostrar Aquivos</Button>
    <Button handleClick={createNew} color='#6FC72A'>Novo Arquivo</Button>
    <Button handleClick={handleRemove} color='#FD6D6D'>Remover</Button>
  </header>
)

export default HeaderMarkdown
