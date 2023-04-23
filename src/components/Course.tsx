import React from 'react'
import {CourseProps} from './propstypes'

function Course(props:CourseProps) {
  return ( <li className='list'><div>{props.course.name}</div><div>{'------->'}</div> <div>{props.course.price} TL</div></li>) 
}

export default Course