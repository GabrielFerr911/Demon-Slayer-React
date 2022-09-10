import React from 'react'
import "./CharCard.css"
import image from "./tanjiroFace.jpg"

export default function CharCard() {
  return (
    <div className='card'>
        <img src={image} alt="" />
        <h2>Tanjiro figure</h2>
        <p>Preço: R$50,00</p>
        <p>Altura: 16cm</p>
        <a href="#" className='compre'>Compre aqui</a>
    </div>
  )
}
