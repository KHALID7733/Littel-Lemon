import React from "react";
import {Box, Flex, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import logo from '../imagess/Asset 20@4x.png';



const footerDtails = [
  {
    'title': 'Doormat Nav igation'
    
  },
  {
    'title': 'Contact'
    
  },
  {
    'title': 'Social Media Links'
    
  }
]



const listOf = [
  {
    "nameOf": "Home"

  },
  {
    "nameOf": "About"

  },
  {
    "nameOf": "Menu"

  },
  {
    "nameOf": "Reservation"

  }
]

const contect = [
  {
    'nameOf': 'Adrees'
  },
  {
    'nameOf': 'Email'
  },
  {
    'nameOf': 'Phone Number'
  }
]


const socialMedia = [
  {
    'nameOf': 'GitHub'
  },
  {
    'nameOf': 'Youtube'
  },
  {
    'nameOf': 'Facebook'
  }
]

const Footer = () => {
  return (
    <Box backgroundColor="#D9D9D9">
      <footer>
        <Flex
          alignItems={'center'}
          margin="0 auto"
          px={12}
          color="black"
          maxWidth="1024px"
          height={'417px'}
          gap={'100px'}
        >
          
          <Image src={logo} maxH={'239px'} maxW={'182px'}/>
          <Box>
          <Heading fontFamily={'Karla'} fontSize='xl' mb={'10'}>Doormat Nav igation</Heading>
          {
            listOf.map((e)=>{
              return(
                <VStack mb={'3'}>
                <a href="">
                  {e.nameOf}
                </a>
                </VStack>
              );
            })
          }
          </Box>
          
          
          <Box>
          <Heading fontFamily={'Karla'} fontSize='xl' mb={'10'}>Contact</Heading>
          {
            contect.map((e)=>{
              return(
                <VStack mb={'3'}>
                <a href="">
                  {e.nameOf}
                </a>
                </VStack>
              );
            })
          }
          </Box>

          <Box>
          <Heading fontFamily={'Karla'} fontSize='xl' mb={'10'}>Social Media Links</Heading>
          {
            socialMedia.map((e)=>{
              return(
                <VStack mb={'3'}>
                <a href="">
                  {e.nameOf}
                </a>
                </VStack>
              );
            })
          }
          </Box>
          
          

        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
