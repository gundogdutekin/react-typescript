import React,{useContext} from 'react'
import { ThemeContext } from './ThemeContext';


function ContextExam() {
    const {primary,danger} = useContext(ThemeContext);
  return (
    <h1 style={{backgroundColor:danger.main,color:danger.text,fontSize:danger.fontsize,padding:danger.padding}}>ContextExam</h1>
  )
}

export default ContextExam