import React from 'react'

export default function Footer() {
  return (
    <div>

      <div className='footer '>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 justify-between footerItem '>
          <div>
            <p className='text-2xl mb-4 md:mt-0 mt-14'>About us</p>

          </div>
          <div>
            <p className='text-2xl mb-4 md:mt-0 mt-14'>Features</p>

          </div>
          <div>
            <p className='text-2xl mb-4 md:mt-0 mt-14'>Privacy Policy </p>

          </div>
          <div>
            <p className='text-2xl mb-4 md:mt-0 mt-14'>Term of Use </p>

          </div>
        </div>
        <hr className='mb-8 mt-8 newLine ' />
        <p className='copy mb-6'>Copyright Pereview 2023</p>
      </div>
    </div>
  )
}
