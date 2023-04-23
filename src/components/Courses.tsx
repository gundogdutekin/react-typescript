import React from 'react'
import Course from './Course'
import {CoursesProps} from './propstypes'


function Courses(props: CoursesProps) {
  return (
    <div>
        <div>
          <ul className='course-list'>

      {props.courses.map((course, index) => {
            
              return (<Course key={index} course={course} /> )   
        })}
            </ul>
        </div>
    </div>
        
  )
}

export default Courses