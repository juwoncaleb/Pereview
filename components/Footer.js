import React from 'react'
import { Divider, Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <div>
      <div className='footer'>
        <Divider my="8" className='line'/>
        <Flex justify="center">
        <Text mr={6} ml={6}>Features</Text>
          <Text mr={6} ml={6} >About us</Text>
          <Text mr={6} ml={6}>Terms of use</Text>
          <Text mr={6} ml={6}>Privacy Policy</Text>
        </Flex>
        <Text mt="4" mb="4" textAlign="center">&#169; 2023 Pereview All right reserved</Text>
      </div>
    </div>
  )
}
