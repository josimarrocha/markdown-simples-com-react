'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/button'
import MessageSave from 'components/message-save'

const HeaderMarkdown = ({ createNew, titleName, handleRemove, isSaving, showFiles, isShowFiles, handleChangeInput }) => (
  <header className='header'>
    {isSaving !== null && <MessageSave isSaving={isSaving}/>}
    <input value={titleName} type='text' placeholder='Nome do arquivo' onChange={handleChangeInput} />
    <Button handleClick={showFiles} color='#599CFF'>
      {isShowFiles? 'Esconder arquivos': 'Mostrar Aquivos'}
    </Button>
    <Button handleClick={createNew} color='#6FC72A'>Novo Arquivo</Button>
    <Button handleClick={handleRemove} color='#FD6D6D'>Remover</Button>
  </header>
)

HeaderMarkdown.propTypes = {
  isSaving: PropTypes.bool,
  titleName: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  createNew: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  showFiles: PropTypes.func.isRequired,
  isShowFiles: PropTypes.bool.isRequired
}

export default HeaderMarkdown
