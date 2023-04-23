import React from 'react'
import {HomeProps} from './propstypes'


function Home(props:HomeProps) {
  return (
    <div>
      <p>{props.name} nun kurs sayısı : {props.coursenumber}</p>
      <p>{props.admininfo.name} nun kurs sayısı : {props.admininfo.coursenumber}</p>
      </div>
  )
}

export default Home