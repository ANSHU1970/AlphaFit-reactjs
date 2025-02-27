/* eslint-disable react/prop-types */
import  { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/excer'
import Button from './Button'



export default function Generator(props) {
const [showModal,setShowModal]=useState(false)
const{poison,setPoison,muscles,setMuscles,goals,setGoals,updateWorkout}=props



function toggleModal(){
  setShowModal(!showModal)
}

  function Header(props){
    
    const {index,title,description}=props
    return(
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-center gap-2'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
          <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
        </div>
          <p className='text-sm sm:text-base mx-auto'>{description}</p>
      </div>
    )
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
        setMuscles(muscles.filter(val => val !== muscleGroup))
        return
    }

    if (muscles.length > 2) {
        return
    }

    if (poison !== 'individual') {
        setMuscles([muscleGroup])
        setShowModal(false)
        return
    }

    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
        setShowModal(false)
    }

}


  return (
    <SectionWrapper id={'generate'} header={"generate your workout"}
    title={['Unleash','Your','Inner','Strength']}>

      <Header index={'01'} title={'Pick your poison'} 
      description={'Select the workout you enjoy.'} />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
      {Object.keys(WORKOUTS).map((type,typeIndex)=>{
        return (
          
          <button onClick={()=>{
            setMuscles([])
            setPoison(type)}} 
          className={'bg-slate-950 rounded-lg border py-3 duration-200 hover:border-orange-600 '+(type === poison? 'border-orange-600' : 'border-orange-400')} 
          key={typeIndex}>
            <p className='capitalize'>{type.replaceAll('_'," ")}</p>
          </button>
        )
      })}
      </div>

      <Header index={'02'} title={'Lock on target'} 
      description={'Select the muscles.'} />
      <div className='bg-slate-950  py-3 border 
      border-solid border-orange-400 rounded-lg
      flex flex-col'>
        <button onClick={()=>{toggleModal()}} className='relative flex items-center
        justify-center p-3'>
          <p className='capitalize'>{muscles.length==0?'Select muscles groups':muscles.join(' ')}</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-sort-down"></i>
        </button>
          {showModal && (
            <div className='flex flex-col px-3 pb-3'>
              {(poison==='individual'? WORKOUTS[poison]:Object.keys(WORKOUTS[poison])).map((muscleGroup,muscleGroupIndex)=>{
                return(
                <button onClick={()=>{updateMuscles(muscleGroup)}}
                key={muscleGroupIndex}
                 className={'hover:text-orange-300 ' + (muscles.includes(muscleGroup)?'text-orange-400':'')}>
                    <p className='uppercase'>{muscleGroup.replaceAll('_'," ")}</p>
                </button>
                )
              }
            )}
            </div>
          )}
      </div>


      <Header index={'03'} title={'Become the Beast'} 
      description={'Select your ultimate objective.'} />
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
      {Object.keys(SCHEMES).map((scheme,schemeIndex)=>{
        return (
          
          <button onClick={()=>{setGoals(scheme)}} 
          className={'bg-slate-950 rounded-lg border py-3 duration-200 hover:border-orange-600 '+(scheme === goals? 'border-orange-600' : 'border-orange-400')} 
          key={schemeIndex}>
            <p className='capitalize'>{scheme.replaceAll('_'," ")}</p>
          </button>
        )
      })}
      </div>
      <Button func={updateWorkout} text={'Formulate'}/>
    </SectionWrapper>
    
  )
}
