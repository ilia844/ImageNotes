import React from 'react'
import { connect } from 'react-redux'

import { UploadArea, Button } from '../../components'

import { addNewImage } from '../../redux/actions/notesAction'

import './header.scss'

const Header = ({ addNewImage }) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__container">
          <div className="header__upload">
            <UploadArea loadNewImage={addNewImage} />
          </div>

          <div className="header__panel">
            <div className="header__panel-search">
              <input type="search" />
            </div>

            <div className="header__panel-menu">
              <Button className="menu-btn">Sign In</Button>
              <Button className="menu-btn">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return {
    addNewImage: (image) => dispatch(addNewImage(image)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
