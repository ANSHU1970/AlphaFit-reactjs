import React from 'react'

export default function Button(props) {
    const {text,func}=props
    
  return (
    <button className='px-8 mx-auto py-4 rounded-md border-[2px]
     bg-slate-950 duration-200 border-orange-400 
     border-solid blueShadow'
     onClick={func}>
        <p>{text}</p>
        </button>
  )
}
