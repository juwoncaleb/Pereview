import React from 'react'
import { Divider, Flex, Text } from "@chakra-ui/react";

export default function Footer(props) {
  const handleMenuItemClick = (sectionId) => {
    props.onMenuItemClick(sectionId);
  };

  return (
    <div>
      <div className='footer'>
        <Divider my="8" className='line'/>
        <Flex justify="center">
        <Text onClick={() => handleMenuItemClick("div1")}  mr={6} ml={6}>Features</Text>
          <Text onClick={() => handleMenuItemClick("div2")} mr={6} ml={6} >About us</Text>
          <Text mr={6} ml={6}>Terms of use</Text>
          <Text mr={6} ml={6}>Privacy Policy</Text>
        </Flex>
        <Text mt="4" mb="4" textAlign="center">&#169; 2023 Pereview All right reserved</Text>
      </div>
    </div>
  )
}
