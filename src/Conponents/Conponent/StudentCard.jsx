import React from 'react'
import  Profile from '../Assets/Group.svg';

function StudentCard() {
  return (
    <div className='container'>
      {Array(1).fill().map((_, index) => (
        <div key={index} className='student-card'>
          <img src={Profile} alt="" className='img'/>
          <h2 className='student-name'>Alexander Lopex</h2>
          <div className='bulk-action'>
            <button className='present'>P</button>
            <button className='absent'>A</button>
            <button className='left'>L</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StudentCard;
