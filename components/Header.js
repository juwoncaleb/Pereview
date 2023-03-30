import React, { useState } from 'react'
import { motion, stagger } from "framer-motion"


export default function Header() {

  const [ham, setHam] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const toggleHam = () => {
    setHam(!ham);
    setShowMenu(true);
  };

  const toggleMenu = () => {
    setShowMenu(false);
    if (!ham) {
      setHam(true);
    }
  };



  return (
    <div>
      <div className='header'>
        <div className='header_links flex justify-between'>
          <div className='flex'>
            <img className='logo' src='./logo.png' />
            <p className='mt-6 ml-14'>About</p>
            <p className='mt-6 ml-10'>Features</p>
            <p className='mt-6 ml-10'>Blogs</p>
            <p className='mt-6 ml-10'>Pricing</p>
          </div>
          <div className='flex '>
            <p className='mt-6  mr-6'>Login</p>
            <div className='head_btn'>
              <button className='cta_button  flex justify-center'>
                <p className='word'>Get started</p>
                <img className='arrow ml-2 ' src='./arrow.png' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='nav_mob flex justify-between'>
        <img className='logo' src='./logo.png' />
        <motion.nav

        >
          {ham ? (
            <motion.button

              onClick={toggleHam}><img className='ham ' src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/null/external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-filled-tal-revivo.png" />
            </motion.button>
          ) : (
            <motion.button

              onClick={toggleMenu}>
              <img className='ham' src="https://img.icons8.com/ios/50/null/multiply.png" />
            </motion.button>
          )}
          {showMenu && (
            <motion.div className='menu'>
              <motion.p
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 20 }}
                transition={{ delay: 0.1 }}
                className='mt-6'
              >
                About
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 18 }}
                transition={{ delay: 0.2}}
                className='mt-6'
              >
                Features
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 18 }}
                transition={{ delay: 0.3 }}
                className='mt-6'
              >
                Blogs
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 18 }}
                transition={{ delay: 0.4 }}
                className='mt-6'
              >
                Pricing
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 18 }}
                transition={{ delay: 0.5 }}
                className='mt-6'
              >
                Login
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 18 }}
                transition={{ delay: 0.6}}
                className='head_btn mt-6'>
                <button className='cta_button  flex justify-center'>
                  <p className=' word '>Get started</p>
                  <img className='arrow ml-2 ' src='./arrow.png' />
                </button>
              </motion.div>
            </motion.div>

          )}
        </motion.nav>
      </div>
    </div>
  )
}
