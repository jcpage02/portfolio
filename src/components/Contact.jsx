import React, { Component } from 'react'
import './Contact.scss'

export default class Contact extends Component {
  state = {

  }
  render() {
    const {toggleContactSlide} = this.props.appState
    const contactSlide = toggleContactSlide ? 'contact-slide' : 'contact'
    return (
      <div className={contactSlide} onClick={() => this.props.toggleContactSlide()}>
        <h5>CONTACT</h5>        
      </div>
    )
  }
}
