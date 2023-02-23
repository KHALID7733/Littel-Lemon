import React from "react";
import {Text, Avatar, Box, Button, Heading, HStack, Image, VStack, Grid, GridItem } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import titleImage from '../imagess/Titel-image.png';
import Header from "./header";
import { Link } from "react-router-dom";

const Title = "Littel Lemon";
const bio1 = "Chicago";
const bio2 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quia error alias id vel cupiditate necessitatibus doloremque repudiandae veniam. ";



const LandingSection = () => (
      <>
      <Header/>
      <Grid templateColumns={{base: "repeat(6, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(12, 1fr)"}}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#495E57"
      >

<GridItem
colSpan={{base: "3", md: "4", lg: "4"}}


>
<HStack  mt={10}>
    <Box 
    
    ml={{base: "20px", md: "40px", lg: " 80px"}}
    my={{base: "60px", md: "40px", lg: " 80px"}}
    
    
    >
      
      <Heading 
      
      as="h1"
      fontFamily={'Markazi Text'} 
      mb={3}
      fontSize={{base: "64px", md: "40px", lg: " 40px"}}
      color={{base: "#F4CE14", md: "#F4CE14", lg: "white"}}
      fontWeight={{base: "500", md: "500", lg: "600"}}
      lineHeight={{base: "78.5px", md: "80px", lg: "90px"}}
      
      
      >{Title}</Heading>
      
      <Text as={'a'} color="white" fontFamily={'Markazi Text'} fontSize={{base: "40px", md: "30px", lg: " 30px"}} mb={2}>{bio1}</Text>

      <Text mb={2} color="rgb(215, 216, 218)" fontFamily={'karla'} my={'2'}>{bio2}</Text>
  <a href="/Reservation-table">
       <Button mt={'60px'} bg={'#F4CE14'} color={'black'}> Reserve a Table</Button> 
       </a>
    </Box>

    
</HStack>

</GridItem>
<GridItem
colSpan={{base: "3", md: "4", lg: "8"}}
>
<HStack>
<Box

ml={{base: "20px", md: "40px", lg: " 80px"}}
my={{base: "90px", md: "40px", lg: " 80px"}}
position={'relative'}

>
      
      <Image src={titleImage} h={{base: "152px", md: "300px", lg: " 418px"}} w={{base: "147px", md: "280px", lg: "375px"}} borderRadius={8} position={{base: "relative", md: "relative", lg: "relative"} }

      right={{base: "-5px", md: "-10px", lg: "-110px"}}
      top={{base: "90px", md: "50px", lg: "130px"}}
      
      
      />

      
    </Box>

</HStack>

</GridItem>
</Grid>
</>  
);

export default LandingSection;
