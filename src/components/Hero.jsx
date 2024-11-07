import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 
    items-center justify-center text-center max-w-[800px] w-full 
    mx-auto p-4'>

      <div className='flex flex-col gap-4'>
      <p>IT'S TIME TO BE</p>

      <h1 className='uppercase font-semibold text-4xl 
      sm:rext-5xl md:text-6xl'>Alpha<span className='text-orange-400'>Fit</span></h1>

      </div>

      <p className='text-sm md:text-base 
       font-light'>Join AlphaFit and unleash your <span className='text-orange-400 font-medium'>inner alpha</span>. Together, we’ll push limits, set new standards,
         and redefine what 
         <span className='text-orange-400 font-medium'> fitness </span>
          means. It’s time to train <span className='text-orange-400 
          font-medium'>hard</span>, live well, and become 
          <span className='text-orange-400 font-medium'> unstoppable</span>.</p>

      <Button func={()=>{
        window.location.href='#generate';
      }} text={"Let's  Begin"}/>            
    </div>
  )
}
