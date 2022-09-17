import React from 'react'
import "./container.css"
import CharCard from '../Cards/CharCard';

export default function container() {
  return (
   <div className='all'>
         <h1>Characters</h1>
    <div className='container'>
      <CharCard/>
      <CharCard/>
      <CharCard/>
      <CharCard/>
      <CharCard/>
      <CharCard/>
      <CharCard/>
      <CharCard/>
      <CharCard/>
    </div>
   </div>
  );
}
