import React from 'react'
import { Container, Card } from 'react-bootstrap'

export default function LeagueItem() {
  return (
    <div className='league-item d-flex'>
        <div className='league-info__img'>
            <img src='/images/logo-league-item.png'/>
        </div>
        <div className='league-info__des'>
            <h4>Ngoai hang anh</h4>
            <p>Dau vong tron || Bond da san 11 || Minh Le Quang</p>
            <p>Hoat dong</p>
        </div>
    </div>
  )
}
