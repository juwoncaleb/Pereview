import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion } from "framer-motion"
import { Button } from "@chakra-ui/button";
import { Grid, Box, Flex, Text, VStack, Divider, GridItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export default function Landingpage() {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='landingPage'>
      <Header onMenuItemClick={handleScrollToSection} />

      {/* HERO SECTION */}
      <div className='hero_section flex justify-between'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='hero_text mr-6'>
          <VStack align="start" spacing={6}>
            <Text className='hero_head_text mb-6'>Accelerate Product Development with Peer Feedback</Text>
            <div className='head_sub_text'>
              <Text>Collaborate with other product managers to gather valuable feedback and receive seamless peer reviews on surveys for data-driven decision making during product development.</Text>
            </div>
            <Flex className='cta'>
              <div className='head_btn '>
                <button className='cta_button  flex justify-center'>
                  <p className='word'>Get started</p>
                  <img className='arrow ml-2 ' src='./arrow.png' />
                </button>
              </div>
              <Flex ml={8} mt={2} align="center">
                <Image src="https://img.icons8.com/office/40/null/wallet.png" alt="Wallet icon" />
                <Text className='credit mt-4 ml-4'> No Credit Card Required</Text>
              </Flex>
            </Flex>
          </VStack>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'easein', duration: 1
          }}
          className='hero_img flex'>
          <Image className='hero1' src='./hero2.png' />
        </motion.div>
      </div>

      {/* FEATURES */}
      <div id="div1" className='features_content '>
        <motion.div initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring', stiffness: 100, damping: 10, duration
              : 0.5
          }}>
         <Flex>
                <svg className='star' width="30" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6644 0.96544L12.7261 5.10874C12.878 5.40893 13.1679 5.61739 13.5023 5.66371L18.1334 6.3382C18.4039 6.37619 18.6493 6.51887 18.8151 6.7366C18.9791 6.95154 19.0495 7.22394 19.0096 7.49169C18.9772 7.71405 18.8726 7.91974 18.7123 8.07724L15.3566 11.3302C15.1112 11.5572 15 11.8935 15.0593 12.2224L15.8855 16.7956C15.9735 17.3478 15.6076 17.8685 15.0593 17.9732C14.8333 18.0093 14.6017 17.9713 14.398 17.8675L10.267 15.7153C9.96042 15.5606 9.59827 15.5606 9.29169 15.7153L5.16072 17.8675C4.65315 18.1372 4.02424 17.9537 3.74174 17.4534C3.63708 17.2542 3.60003 17.0272 3.6343 16.8058L4.46049 12.2317C4.51977 11.9037 4.4077 11.5655 4.16317 11.3385L0.807457 8.08743C0.408253 7.70201 0.396212 7.06736 0.780596 6.66804C0.788932 6.6597 0.798194 6.65043 0.807457 6.64117C0.966767 6.47903 1.17609 6.37619 1.40209 6.34932L6.03322 5.6739C6.36666 5.62665 6.65657 5.42004 6.8094 5.11801L8.79708 0.96544C8.97399 0.609665 9.34078 0.388232 9.73905 0.397497H9.86317C10.2086 0.439189 10.5097 0.65321 10.6644 0.96544" fill="#408BFC" />
                  <path d="M9.75287 15.5999C9.5735 15.6055 9.39875 15.6537 9.24157 15.7399L5.1308 17.8872C4.62782 18.1273 4.02591 17.941 3.7439 17.46C3.63942 17.2635 3.60152 17.0383 3.63665 16.8177L4.45769 12.2533C4.51317 11.9215 4.40222 11.5841 4.1609 11.3506L0.803679 8.10035C0.405177 7.71017 0.39778 7.06976 0.787961 6.67032C0.793508 6.66476 0.798131 6.66012 0.803679 6.65549C0.96271 6.49794 1.16797 6.39414 1.38895 6.3617L6.02397 5.67958C6.3596 5.63695 6.65084 5.4275 6.79878 5.12351L8.81348 0.91868C9.00487 0.579476 9.37194 0.377436 9.76027 0.398752C9.75287 0.674008 9.75287 15.4127 9.75287 15.5999" fill="#408BFC" />
                </svg>
                <Text ml={4} className=' feature_head'>OUR STORY</Text>
              </Flex>
          <Box mt={4}>
            <Text className='story'>Finding participants for product</Text>
            <Text className='story'>interviews is hard</Text>
          </Box>
        </motion.div>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6} mt={14}>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 1 }} className='feat'>

            <svg className='icons' width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.2429 16.5198C8.98973 16.5198 0.5 18.6547 0.5 22.8912V25.015C0.5 25.7949 1.13604 26.4309 1.91588 26.4309H24.5699C25.3497 26.4309 25.9858 25.7949 25.9858 25.015V22.8912C25.9858 18.6547 17.496 16.5198 13.2429 16.5198Z" fill="#1B1E3E" />
              <path opacity="0.4" d="M13.2429 0.945312C10.1124 0.945312 7.57935 3.4784 7.57935 6.60882C7.57935 9.73923 10.1124 12.2723 13.2429 12.2723C16.3733 12.2723 18.9064 9.73923 18.9064 6.60882C18.9064 3.4784 16.3733 0.945312 13.2429 0.945312Z" fill="#1B1E3E" />
            </svg>
            <Text mt={6} mb={6} fontWeight="bold" fontSize="xl">Real user feedback</Text>
            <Text className='feature_subText'>Aute ullamco dolor mollit culpa occaecat lab exercitation inconsequat aute enim fugiat dolor aliquip aute deserunt do.</Text>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 1.5 }} className='feat'>
            <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M8.40887 10.0218C9.58196 10.0218 10.4618 9.13394 10.4618 7.94381V2.71547C10.4618 1.52534 9.58196 0.634766 8.40887 0.634766C7.23578 0.634766 6.35596 1.52534 6.35596 2.71547V7.94381C6.35596 9.13394 7.23578 10.0218 8.40887 10.0218Z" fill="#1B1E3E" />
              <path opacity="0.5" d="M17.5148 9.02182C18.6613 9.02182 19.5677 8.13394 19.5677 6.94381V2.71547C19.5677 1.52534 18.6613 0.634766 17.5148 0.634766C16.3417 0.634766 15.4619 1.52534 15.4619 2.71547V6.94381C15.4619 8.13394 16.3417 9.02182 17.5148 9.02182Z" fill="#1B1E3E" />
              <path d="M22.2759 3.76245H3.64795C2.18225 3.76245 0.986816 4.95788 0.986816 6.42358V25.0515C0.986816 26.5172 2.18225 27.7126 3.64795 27.7126H22.2759C23.7416 27.7126 24.937 26.5172 24.937 25.0515V6.42358C24.937 4.95788 23.7416 3.76245 22.2759 3.76245ZM19.6147 23.7209H6.30908C5.57623 23.7209 4.97852 23.1232 4.97852 22.3904V10.4153H20.9453V22.3904C20.9453 23.1232 20.3476 23.7209 19.6147 23.7209Z" fill="#1B1E3E" />
            </svg>
            <Text mt={6} mb={6} fontWeight="bold" fontSize="xl">Schedule Feedback</Text>
            <Text className='feature_subText'>Aute ullamco dolor mollit culpa occaecat lab exercitation inconsequat aute enim fugiat dolor aliquip aute deserunt do.</Text>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 2.0 }} className='feat'>

            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6909 4.54574C10.7546 4.67532 10.7967 4.81409 10.8155 4.95675L11.1635 10.1317V10.1317L11.3363 12.7327C11.3381 13.0002 11.38 13.2659 11.4608 13.5214C11.6695 14.017 12.1715 14.332 12.7176 14.3101L21.0392 13.7658C21.3995 13.7598 21.7475 13.8946 22.0066 14.1404C22.2224 14.3453 22.3618 14.6133 22.4057 14.9015L22.4204 15.0766C22.0761 19.845 18.5739 23.8222 13.8154 24.8488C9.05694 25.8755 4.17733 23.7067 1.82589 19.52C1.14798 18.3036 0.724563 16.9666 0.580477 15.5876C0.520286 15.1793 0.493782 14.767 0.501224 14.3545C0.493793 9.24225 4.13434 4.82253 9.23042 3.75704C9.84376 3.66154 10.445 3.98623 10.6909 4.54574Z" fill="#1B1E3E" />
              <path opacity="0.4" d="M14.0875 0.102342C19.7873 0.247352 24.5778 4.34605 25.5 9.86668L25.4912 9.90741V9.90741L25.466 9.96666L25.4695 10.1293C25.4564 10.3447 25.3733 10.552 25.2299 10.7194C25.0806 10.8938 24.8766 11.0126 24.6519 11.0587L24.515 11.0775L14.914 11.6996C14.5946 11.7311 14.2766 11.6281 14.0391 11.4163C13.8412 11.2397 13.7147 11.0014 13.679 10.7447L13.0345 1.15765C13.0233 1.12523 13.0233 1.09009 13.0345 1.05767C13.0433 0.793409 13.1597 0.543618 13.3575 0.364106C13.5554 0.184593 13.8183 0.0903179 14.0875 0.102342Z" fill="#1B1E3E" />
            </svg>

            <Text mt={6} mb={6} fontWeight="bold" fontSize="xl">Compare reviews</Text>
            <Text className='feature_subText'>Aute ullamco dolor mollit culpa occaecat lab exercitation inconsequat aute enim fugiat dolor aliquip aute deserunt do.</Text>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 2.5 }} className='feat'>
            <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M14.0226 9.69625L25.162 2.66633C25.6297 2.3728 25.7441 1.731 25.4008 1.29816C24.9331 0.721039 24.2267 0.3479 23.4257 0.3479H3.04737C2.20159 0.3479 1.45034 0.765814 0.987647 1.40761C0.679187 1.83548 0.813517 2.44742 1.26626 2.72603L12.4504 9.69625C12.933 9.99476 13.54 9.99476 14.0226 9.69625Z" fill="#1B1E3E" />
              <path d="M12.4504 12.5918L1.43036 5.72602C1.02737 5.47229 0.5 5.76583 0.5 6.24344V18.1789C0.5 19.5868 1.63931 20.7262 3.04729 20.7262H23.4256C24.8336 20.7262 25.9729 19.5868 25.9729 18.1789V6.15886C25.9729 5.68125 25.4455 5.39269 25.0375 5.64642L14.0225 12.5918C13.5399 12.8952 12.933 12.8952 12.4504 12.5918Z" fill="#1B1E3E" />
            </svg>
            <Text mt={6} mb={6} fontWeight="bold" fontSize="xl">Email integretaion</Text>
            <Text className='feature_subText'>Aute ullamco dolor mollit culpa occaecat lab exercitation inconsequat aute enim fugiat dolor aliquip aute deserunt do.</Text>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 3 }} className='feat'>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1293 14.9664L24.0376 7.03258C24.5324 6.53512 24.8121 5.85566 24.8121 5.14653V2.81964C24.8121 1.35961 23.6537 0.657227 22.2248 0.657227H3.08729C1.65841 0.657227 0.5 1.35961 0.5 2.81964V5.18833C0.5 5.8597 0.749362 6.50681 1.19927 6.99753L8.46506 14.9246C8.60227 15.0742 8.79358 15.1592 8.99545 15.1605L15.6161 15.1794C15.8074 15.1807 15.9921 15.1052 16.1293 14.9664" fill="#1B1E3E" />
              <path opacity="0.4" d="M8.68018 15.0906V24.0112C8.68018 24.3361 8.84378 24.6422 9.11161 24.8174C9.26466 24.9185 9.44145 24.9697 9.61825 24.9697C9.75151 24.9697 9.88476 24.9414 10.0088 24.8848L15.3654 22.3881C15.7006 22.233 15.9156 21.8919 15.9156 21.5158V15.0906H8.68018Z" fill="#1B1E3E" />
            </svg>
            <Text mt={6} mb={6} fontWeight="bold" fontSize="xl">Filter </Text>
            <Text className='feature_subText'>Aute ullamco dolor mollit culpa occaecat lab exercitation inconsequat aute enim fugiat dolor aliquip aute deserunt do.</Text>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 3.5 }} className='feat'>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1293 14.9664L24.0376 7.03258C24.5324 6.53512 24.8121 5.85566 24.8121 5.14653V2.81964C24.8121 1.35961 23.6537 0.657227 22.2248 0.657227H3.08729C1.65841 0.657227 0.5 1.35961 0.5 2.81964V5.18833C0.5 5.8597 0.749362 6.50681 1.19927 6.99753L8.46506 14.9246C8.60227 15.0742 8.79358 15.1592 8.99545 15.1605L15.6161 15.1794C15.8074 15.1807 15.9921 15.1052 16.1293 14.9664" fill="#1B1E3E" />
              <path opacity="0.4" d="M8.68018 15.0906V24.0112C8.68018 24.3361 8.84378 24.6422 9.11161 24.8174C9.26466 24.9185 9.44145 24.9697 9.61825 24.9697C9.75151 24.9697 9.88476 24.9414 10.0088 24.8848L15.3654 22.3881C15.7006 22.233 15.9156 21.8919 15.9156 21.5158V15.0906H8.68018Z" fill="#1B1E3E" />
            </svg>
            <Text mt={6} mb={6} fontWeight="bold" fontSize="xl">Search </Text>
            <Text className='feature_subText'>Aute ullamco dolor mollit culpa occaecat lab exercitation inconsequat aute enim fugiat dolor aliquip aute deserunt do.</Text>
          </motion.div>
        </Grid>
      </div>

      {/* VISUAL */}

      <div id="div2" className='grid grid-cols-1 md:grid-cols-2 visusal'>
        <motion.Box
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'easein',
            duration: 1
          }}
          className='visaul_card'
        >
          <Text className='rev mt-20 cons'>Get constructive peer reviews </Text>
          <Text className='rev'> for reliable user feedback.</Text>
          <Divider className='line mt-6 mb-6' />
          <Flex>
            <Image className='people' src="https://img.icons8.com/clouds/100/null/crowd--v1.png" />
            <Box ml='4'>
              <Text className='users'>Experts in the field</Text>
              <Text className='user_data'>Get your product reviews by experts in your field, giving you real user experience data</Text>
            </Box>
          </Flex>
          <Flex mt='8'>
            <Image className='earth' src="https://img.icons8.com/clouds/100/null/geography.png" />
            <Box ml='4'>
              <Text className='users'>Give back to the community</Text>
              <Text className='user_data'>Get your product reviews by experts in your field, giving you real user experience data</Text>
            </Box>
          </Flex>
        </motion.Box>
        <motion.Box
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2
          }}
          className='visaul_card'
        >
          <Image className='mt-14 visual_mage' src='./com.jpg' />
        </motion.Box>
        <motion.Box
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2
          }}
          className='visaul_card mt-14'
        >
          <Image className='growth' src='./growth.png' />
        </motion.Box>
        <motion.Box
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'easein',
            duration: 1
          }}
          className='visaul_card mt-14'
        >
          <Text className='rev mt-20'>Boost productivity </Text>
          <Text className='rev'> Ship with more confidence.</Text>
          <Divider className='line mt-6 mb-6' />
          <Grid className='stats md:flex'>
            <Box mr='14' className='deplo'>
              <Text className='mt-10'>2.8 <span className='uni'>x</span> </Text>
              <Text>Deployment</Text>
            </Box>
            <Box className='deplo'>
              <Text className='mt-10'>68<span className='uni'>%</span> </Text>
              <Text>User experience</Text>
            </Box>
          </Grid>
        </motion.Box>
      </div>

      {/* SETUP SECTIOM */}
      <Box className='features'>
        <Box className='features_content'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.5
            }}
            className='flex justify-between'>
            <Grid>
              <Flex>
                <svg className='star' width="30" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6644 0.96544L12.7261 5.10874C12.878 5.40893 13.1679 5.61739 13.5023 5.66371L18.1334 6.3382C18.4039 6.37619 18.6493 6.51887 18.8151 6.7366C18.9791 6.95154 19.0495 7.22394 19.0096 7.49169C18.9772 7.71405 18.8726 7.91974 18.7123 8.07724L15.3566 11.3302C15.1112 11.5572 15 11.8935 15.0593 12.2224L15.8855 16.7956C15.9735 17.3478 15.6076 17.8685 15.0593 17.9732C14.8333 18.0093 14.6017 17.9713 14.398 17.8675L10.267 15.7153C9.96042 15.5606 9.59827 15.5606 9.29169 15.7153L5.16072 17.8675C4.65315 18.1372 4.02424 17.9537 3.74174 17.4534C3.63708 17.2542 3.60003 17.0272 3.6343 16.8058L4.46049 12.2317C4.51977 11.9037 4.4077 11.5655 4.16317 11.3385L0.807457 8.08743C0.408253 7.70201 0.396212 7.06736 0.780596 6.66804C0.788932 6.6597 0.798194 6.65043 0.807457 6.64117C0.966767 6.47903 1.17609 6.37619 1.40209 6.34932L6.03322 5.6739C6.36666 5.62665 6.65657 5.42004 6.8094 5.11801L8.79708 0.96544C8.97399 0.609665 9.34078 0.388232 9.73905 0.397497H9.86317C10.2086 0.439189 10.5097 0.65321 10.6644 0.96544" fill="#408BFC" />
                  <path d="M9.75287 15.5999C9.5735 15.6055 9.39875 15.6537 9.24157 15.7399L5.1308 17.8872C4.62782 18.1273 4.02591 17.941 3.7439 17.46C3.63942 17.2635 3.60152 17.0383 3.63665 16.8177L4.45769 12.2533C4.51317 11.9215 4.40222 11.5841 4.1609 11.3506L0.803679 8.10035C0.405177 7.71017 0.39778 7.06976 0.787961 6.67032C0.793508 6.66476 0.798131 6.66012 0.803679 6.65549C0.96271 6.49794 1.16797 6.39414 1.38895 6.3617L6.02397 5.67958C6.3596 5.63695 6.65084 5.4275 6.79878 5.12351L8.81348 0.91868C9.00487 0.579476 9.37194 0.377436 9.76027 0.398752C9.75287 0.674008 9.75287 15.4127 9.75287 15.5999" fill="#408BFC" />
                </svg>
                <Text ml={4} className=' feature_head'>GET STARTED</Text>
              </Flex>
              <Box mt={4}>
                <p className='story'>Create your pereview</p>
                <p className='story'>account today !</p>
              </Box>
            </Grid>
            <div className='head_btn '>
              <button className='cta_button  flex justify-center'>
                <p className='word'>Get started</p>
                <img className='arrow ml-2 ' src='./arrow.png' />
              </button>
            </div>

          </motion.div>
          <Grid templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4} mt={14}>
            <GridItem>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring', stiffness: 100, damping: 10, duration
                    : 0.5
                }} className='feat'>
                <Text className='countdown'>1</Text>
                <Text className='feature_header mb-6'>Real user feedback</Text>
                <Text>Aute ullamco dolor mollit culpa occaecat lab exercitation inconsequat aute enim fugiat dolor aliquip aute deserunt do.</Text>
              </motion.div>
            </GridItem>
            <GridItem>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring', stiffness: 100, damping: 10, duration
                    : 1.5
                }} className='feat'>
                <Text className='countdown'>2</Text>
                <Text className='feature_header mb-6'>Schedule Feedback</Text>
                <Text>Aute ullamco dolor mollit culpa occaecat lab exercitation inconsequat aute enim fugiat dolor aliquip aute deserunt do.</Text>
              </motion.div>
            </GridItem>
            <GridItem>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring', stiffness: 100, damping: 10, duration
                    : 1.5
                }} className='feat'>
                <Text className='countdown'>3</Text>
                <Text className='feature_header mb-6'>Compare reviews</Text>
                <Text>Aute ullamco dolor mollit culpa occaecat lab exercitation inconsequat aute enim fugiat dolor aliquip aute deserunt do.</Text>
              </motion.div>
            </GridItem>
          </Grid>
        </Box>
      </Box>

      {/* TESTIMONIALS */}
      <div className='testimonial '>
        {/* TESTIMONIALS */}
        <motion.Box
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring', stiffness: 100, damping: 10, duration
              : 0.5
          }}
          className='flex justify-between'>
          <Grid>
            <Flex>
              <svg className='star' width="30" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6644 0.96544L12.7261 5.10874C12.878 5.40893 13.1679 5.61739 13.5023 5.66371L18.1334 6.3382C18.4039 6.37619 18.6493 6.51887 18.8151 6.7366C18.9791 6.95154 19.0495 7.22394 19.0096 7.49169C18.9772 7.71405 18.8726 7.91974 18.7123 8.07724L15.3566 11.3302C15.1112 11.5572 15 11.8935 15.0593 12.2224L15.8855 16.7956C15.9735 17.3478 15.6076 17.8685 15.0593 17.9732C14.8333 18.0093 14.6017 17.9713 14.398 17.8675L10.267 15.7153C9.96042 15.5606 9.59827 15.5606 9.29169 15.7153L5.16072 17.8675C4.65315 18.1372 4.02424 17.9537 3.74174 17.4534C3.63708 17.2542 3.60003 17.0272 3.6343 16.8058L4.46049 12.2317C4.51977 11.9037 4.4077 11.5655 4.16317 11.3385L0.807457 8.08743C0.408253 7.70201 0.396212 7.06736 0.780596 6.66804C0.788932 6.6597 0.798194 6.65043 0.807457 6.64117C0.966767 6.47903 1.17609 6.37619 1.40209 6.34932L6.03322 5.6739C6.36666 5.62665 6.65657 5.42004 6.8094 5.11801L8.79708 0.96544C8.97399 0.609665 9.34078 0.388232 9.73905 0.397497H9.86317C10.2086 0.439189 10.5097 0.65321 10.6644 0.96544" fill="#408BFC" />
                <path d="M9.75287 15.5999C9.5735 15.6055 9.39875 15.6537 9.24157 15.7399L5.1308 17.8872C4.62782 18.1273 4.02591 17.941 3.7439 17.46C3.63942 17.2635 3.60152 17.0383 3.63665 16.8177L4.45769 12.2533C4.51317 11.9215 4.40222 11.5841 4.1609 11.3506L0.803679 8.10035C0.405177 7.71017 0.39778 7.06976 0.787961 6.67032C0.793508 6.66476 0.798131 6.66012 0.803679 6.65549C0.96271 6.49794 1.16797 6.39414 1.38895 6.3617L6.02397 5.67958C6.3596 5.63695 6.65084 5.4275 6.79878 5.12351L8.81348 0.91868C9.00487 0.579476 9.37194 0.377436 9.76027 0.398752C9.75287 0.674008 9.75287 15.4127 9.75287 15.5999" fill="#408BFC" />
              </svg>
              <Text ml={4} className=' feature_head'>TESTIMONIALS</Text>
            </Flex>
            <Box mt={4} mb={4}>
              <p className='story'>Don’t take our word,</p>
              <p className='story'>take theirs</p>
            </Box>
          </Grid>


        </motion.Box>


        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={{ base: 6, md: 8 }} mt={16}>
          <motion.Box
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              duration: 0.5,
            }}
            className='testimonal_card'>
            <Text fontSize='lg' fontWeight='bold' mb={6}>Real user Data</Text>
            <Text fontSize='md' mb={8}>Tempor incididunt eu non mollit irjokefpmcl okrpmgcef oimpklecfwdReprehenderit ut magna id dolore cupidatat est commodo.</Text>
            <Flex alignItems='center'>
              <Image className='test_img' src='./girl.jpg' mr={6} />
              <Box>
                <Text fontWeight='bold' fontSize='lg'>John Carter</Text>
                <Text className='neon' fontSize='md'>@johncarter</Text>
              </Box>
            </Flex>
          </motion.Box>
          <motion.Box
            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              duration: 1.4,
            }}
            className='testimonal_card'>
            <Text fontSize='lg' fontWeight='bold' mb={6}>Ship faster</Text>
            <Text fontSize='md' mb={8}>Tempor incididunt eu non mollit irjokefpmcl okrpmgcef oimpklecfwdReprehenderit ut magna id dolore cupidatat est commodo.</Text>
            <Flex alignItems='center'>
              <Image className='test_img' src='./man.jpg' mr={6} />
              <Box>
                <Text fontWeight='bold' fontSize='lg'>Soneye Omojuwon</Text>
                <Text className='neon' fontSize='md'>@juwoncaleb</Text>
              </Box>
            </Flex>
          </motion.Box>
          <motion.Box
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              duration: 2,
            }}
            className='testimonal_card'>
            <Text fontSize='lg' fontWeight='bold' mb={6}>Deploy faster</Text>
            <Text fontSize='md' mb={8}>Tempor incididunt eu non mollit irjokefpmcl okrpmgcef oimpklecfwdReprehenderit ut magna id dolore cupidatat est commodo.</Text>
            <Flex alignItems='center'>
              <Image className='test_img' src='./sam.jpg' mr={6} />
              <Box>
                <Text fontWeight='bold' fontSize='lg'>charles kenths</Text>
                <Text className='neon' fontSize='md'>@charlie</Text>
              </Box>
            </Flex>
          </motion.Box>
        </Grid>

      </div>


      {/* BANNER */}
      <Box className='ban'>
        <Box className='banna'>
          <motion.Box
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 0.5 }}
            className='md:flex justify-between banner_item grid'
          >
            <Box className='mt-4 story_head'>
              <Text className='story'>GET PRODUCT REVIEW FASTER</Text>
              <Text className='story'>BEFORE DEPLOYMENT</Text>
            </Box>

            <Box className='flex banner_button'>
              <Box className='head_btn ban_btn'>
                <div className='head_btn '>
                  <button className='cta_button deploy_btn1 flex justify-center'>
                    <p className='word'>Get started</p>
                    <img className='arrow ml-2 ' src="https://img.icons8.com/ios-filled/50/null/long-arrow-up.png" />
                  </button>
                </div>
              </Box>
            </Box>
          </motion.Box>
        </Box>
      </Box>

      {/* FOOTER */}
      <Footer onMenuItemClick={handleScrollToSection} />
    </div>
  )
}
