'use strict'

import React from 'react'
import Button from 'components/button'

const HeaderMarkdown = () => (
  <header className='header'>
    <input type='text'/>
    <Button handleClick={() => null}> Clique</Button>
    <Button handleClick={() => null}> Clique 2</Button>
    <Button handleClick={() => null}> Clique 3</Button>
  </header>
)

export default HeaderMarkdown
