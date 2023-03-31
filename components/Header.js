import React, { useState } from 'react'
import { motion, stagger } from "framer-motion"
import { useRef } from "react";
import { Box, Flex, Link, Button } from '@chakra-ui/react';


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

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const handleScrollToDiv1 = () => {
    div1Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToDiv2 = () => {
    div2Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Box className='header'>
        <Flex className='header_links' justify='space-between'>
          <Flex>
            <p className='loogo mt-6'>PEREVIEW</p>
          </Flex>
          <Flex>
            <Link href='#' onClick={handleScrollToDiv1} className='mt-6 ml-10'>
              <p>Features</p>
            </Link>
            <p className='mt-6 ml-14'>About</p>
          </Flex>
          <Flex>
            <p className='mt-6  mr-6'>Login</p>
            <div className='head_btn '>
              <button className='cta_button  flex justify-center'>
                <p className='word'>Get started</p>
                <img className='arrow ml-2 ' src='./arrow.png' />
              </button>
            </div>
          </Flex>
        </Flex>
      </Box>
      <div className='nav_mob flex justify-between'>
        <p className='loogo mt-6'>PEREVIEW</p>
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
                animate={{ opacity: 1, scale: 1, y: 18 }}
                transition={{ delay: 0.2 }}
                className='mt-6'
              >
                Features
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 20 }}
                transition={{ delay: 0.1 }}
                className='mt-6'
              >
                About
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 18 }}
                transition={{ delay: 0.4 }}
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
