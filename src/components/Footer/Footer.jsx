import React from 'react'
import "./Footer.css"
import insta from "./insta.png"
import git from "./github.png"
import gmail from "./gmail.png"

export default function Footer() {
  return (
    <div className='footer'>
        <h3>Contato</h3>
        <img src={insta} alt="a" className="ftImg"/>
        <img src={git} alt="a" className="ftImg"/>
        <img src={gmail} alt="a"className="ftImg"/>
    </div>
  )
}
