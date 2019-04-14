'use strict'

import React from 'react'
import PropTypes from 'prop-types'
const ListFiles = ({files, handleOpenFile}) => (
  <ul className='lista'>
    {files && Object.keys(files).map((fileid, index) => (
        <li key={index} onClick={handleOpenFile(fileid)}>
          {files[fileid].title}
        </li>
     ))}
   </ul>
)

ListFiles.propTypes = {
  files: PropTypes.object.isRequired,
  handleOpenFile: PropTypes.func.isRequired
}

export default ListFiles
