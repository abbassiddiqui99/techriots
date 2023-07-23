import React from 'react'
import HeaderDropdown from '../Dropdown/HeaderDropdown'

const index = () => {
  return (
    <div className='bg-white shadow-md h-20 flex justify-center items-center'>
    <div className='container flex justify-between items-center'>
        <div className=''>Left</div>
        <div className='flex gap-x-8'>
            <div><HeaderDropdown /></div>
            <div>Right</div>
            <div>Right</div>
            <div>Right</div>
            <div>Right</div>
        </div>
    </div>
    </div>
  )
}

export default index