'use strict'

import React from 'react'
import Button from 'components/button'

const HeaderMarkdown = () => (
  <header className='header'>
    <input type='text'/>
    <Button handleClick={() => null} color='#599CFF'>Mostrar Aquivos</Button>
    <Button handleClick={() => null} color='#6FC72A'>Novo Arquivo</Button>
    <Button handleClick={() => null} color='#FD6D6D'>Remover</Button>
  </header>
)

export default HeaderMarkdown
