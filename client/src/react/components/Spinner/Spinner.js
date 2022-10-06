import React from 'react'
import spinner from '../img/spin_dreaming.gif'

const Spinner = () => {
  return (
    <div className={'h-[40vh] ml-[23%] mt-10 mb-40 '}>
        <img  src={spinner} alt='SPINNER'
              className={'w-[60%]'}
        />
    </div>
  )
}

export default Spinner