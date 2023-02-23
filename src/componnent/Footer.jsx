import React from "react";
import {Box, GridItem, Heading, HStack, Image, SimpleGrid, Text, VStack} from "@chakra-ui/react";
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
  
      
        <SimpleGrid
          as={'footer'}
          backgroundColor="#D9D9D9"
          templateColumns={{base: "repeat(6, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(12, 1fr)"}}
        >
          




          <GridItem
       colSpan={{base: "2", md: "2", lg: "3"}} 
  
  >
<Box my={'10px'}>     
      <Image src={logo} h={{base: "100px", md: "200px", lg: "200px"}} w={{base: "60px", md: "100px", lg: "130px"}}/>    

      </Box>
</GridItem>


  <GridItem
       colSpan={{base: "null", md: "2", lg: "3"}} 
  
  >
      <Box
      display={{base: "none", md: "block", lg: "block"}}
      >
      <Heading
             as={'h2'} 
             fontFamily={'Karla'}  
             mb={'10'}
             fontSize={{base: "20px", md: "30px", lg: " 30px"}}
             fontWeight={{base: "300", md: "300", lg: "500"}}
             
             >Doormat Nav igation</Heading>
             
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
          
</GridItem>

<GridItem
       colSpan={{base: "2", md: "2", lg: "3"}} 
  
>
          <Box>
          <Heading 
              fontFamily={'Karla'}
              as={'h2'} 
               mb={'10'}
               fontSize={{base: "20px", md: "30px", lg: " 30px"}}
               fontWeight={{base: "300", md: "300", lg: "500"}}
              textAlign={'center'}
          >Contact</Heading>
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
          </GridItem>

<GridItem
colSpan={{base: "2", md: "2", lg: "3"}} 
  
>
          <Box>
          <Heading fontFamily={'Karla'}
          as={'h2'} 
          mb={'10'}
          fontSize={{base: "20px", md: "30px", lg: " 30px"}}
          fontWeight={{base: "300", md: "300", lg: "500"}}
          
          >Social Media Links</Heading>
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
          
</GridItem>

        </SimpleGrid>
      
    
  );
};
export default Footer;
