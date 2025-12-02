import React from 'react'
import SectionWraper from './SectionWraper'
import ExerciseCard from './ExerciseCard'

function Workout(props) {
  const {workout} = props
  return (
      <SectionWraper id={'workout'} header={"Welcome to"} title={['the', 'DANGER', 'zone']} >
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => {
                  return(
                    <ExerciseCard i = {i} exercise = {exercise} key={i} />
                  )
                })}
            </div>
</SectionWraper>
  )
}

export default Workout