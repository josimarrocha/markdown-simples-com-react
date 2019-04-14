'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import ListFiles from 'components/lista-files'
import 'components/lista-files/lista-files.css'
const Files = ({isShowFiles, ...props}) => (
  <div className='files'
      style={{
        transform: `${isShowFiles ? 'translateX(0%)': 'translateX(-100%)'}`
      }}>
    <h4 className='title-files'>Arquivos salvos</h4>
    <ListFiles {...props}/>
  </div>
)

Files.propTypes = {
  isShowFiles: PropTypes.bool
}

export default Files
