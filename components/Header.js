import React, { useState } from 'react'
import { motion, stagger } from "framer-motion"
import { useRef } from "react";
import { Box, Flex, Link, Button, Text, Image } from '@chakra-ui/react';


export default function Header(props) {

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

  const handleMenuItemClick = (sectionId) => {
    props.onMenuItemClick(sectionId);
  };

  return (
    <div className='headd'>
      <Box className='header'>
        <Flex className='header_links' justify='space-between'>
          <Flex>
            <Text className='loogo' mt={6}>PEREVIEW</Text>
          </Flex>
          <Flex>
            <p onClick={() => handleMenuItemClick("div1")} className='mt-6 ml-14'>Features</p>
            <p onClick={() => handleMenuItemClick("div2")} className='mt-6 ml-14'>About</p>
          </Flex>
          <Flex>
            <Text mt={6} mr={6} >Login</Text>
            <Flex className='cta'>
              <Flex className='head_btn '>
                <button className='cta_button  flex justify-center'>
                  <p className='word'>Get started</p>
                  <Image ml={2} className='arrow ml-2 ' src='./arrow.png' />
                </button>
              </Flex>
            </Flex>
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
                onClick={() => handleMenuItemClick("div1")} >
                Features
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 20 }}
                transition={{ delay: 0.1 }}
                className='mt-6'
                onClick={() => handleMenuItemClick("div2")}
              >
                About
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 18 }}
                transition={{ delay: 0.4 }}
                className='head_btn mt-6'>
                <Flex className='cta'>
                  <Flex className='head_btn '>
                    <button className='cta_button  flex justify-center'>
                      <p className='word'>Get started</p>
                      <Image ml={2} className='arrow ' src='./arrow.png' />
                    </button>
                  </Flex>
                </Flex>
              </motion.div>
            </motion.div>

          )}
        </motion.nav>
      </div>
    </div>
  )
}
