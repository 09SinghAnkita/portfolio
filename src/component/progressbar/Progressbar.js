
import React from 'react'
import './progressbar.css'

export default function Progressbar(props) {


//  const [style, setStyle] =React.useState({});


//  setTimeout(()=>{

//     const newStyle = {
//         width:`${props.progress}%`
//     }
//         setStyle(newStyle)

    
//  },6000);



  return (
    <div className="progreess">
 <div className="progreessbar" data-label={`${props.skill}  ${props.progress}%`} style={{ width:`${props.progress}%`}}> </div>
    </div>
   
     
    
  )
}
