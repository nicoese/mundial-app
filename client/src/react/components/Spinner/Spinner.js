import React from 'react'
import spinner from '../img/spin_dreaming.gif'

const Spinner = () => {
  return (
    <div className={'h-[75vh] mt-20'}>
        <img  src={spinner} alt='SPINNER'
              className={'w-[80%]'}
        />
    </div>
  )
}

export default Spinner