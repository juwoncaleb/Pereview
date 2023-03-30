import React from 'react'

export default function Footer() {
  return (
    <div>

      <div className='footer '>
        <hr className='mb-8 mt-8 newLine ' />

        <div className='flex justify-around footerItem'>
          <p className='mr-1 ml-1'>About us</p>
          <p className='mr-1 ml-1'>Features</p>
          <p className='mr-1 ml-1'>Terms of use</p>
          <p className='mr-1 ml-1'>Privacy Policy</p>

        </div>
       
        <p className=' mt-4 mb-4 right'>&#169; 2023 Pereview All right reserved</p>
      </div>
    </div>
  )
}
