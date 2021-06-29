import React from 'react'
import { createPortal } from 'react-dom'

import './modal.scss'

const modalRoot = document.getElementById('root')

const Modal = ({ children }) => {
  return createPortal(<div className="modal">{children}</div>, modalRoot)
}

export default Modal
