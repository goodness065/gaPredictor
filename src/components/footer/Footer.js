import React from 'react'
import "./style/footer.css"

const Footer = () => {
  return (
    <footer className="footer container">
      <p className='footer-text'>Subscribe to our sports Newsletters</p>
      <form className="footer-form">
      <input type="email" placeholder="Email" />
      <button >subscribe</button>
      </form>
    </footer>
  )
}

export default Footer