import {Stack, Box, Card, Flex, Heading, HStack, Image, Spacer, Text, VStack, SimpleGrid, GridItem } from "@chakra-ui/react";
import resturenA from '../imagess/Mario and Adrian A.jpg';
import resturenB from '../imagess/Mario and Adrian b.jpg';
import Footer from "./Footer";
import Header from "./header";

const sectionOfText =
    {
        'title': 'Little Lemon',
        'subTitle': 'Chicago',
        'discription': "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        'img-1': resturenA,
        'img-2': resturenB,
        
    }


const AboutUs = ()=>{
    return(

        <>

        <Header/>
<SimpleGrid as={'article'} my={'100px'}  templateColumns={{base: "repeat(6, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(12, 1fr)"}}>


<GridItem colSpan={{base: "6", md: "4", lg: "6"}}>

    
        <Box p={'10'} >
        <Stack>

            <Heading
                  fontFamily={'Markazi Text'} 
                  mb={3}
                  fontSize={{base: "64px", md: "40px", lg: " 40px"}}
                  fontWeight={{base: "500", md: "500", lg: "600"}}
                  lineHeight={{base: "78.5px", md: "80px", lg: "90px"}}
            
            
            >{sectionOfText.title}</Heading>
            <Text as={'md'}>{sectionOfText.subTitle}</Text>
            <Text
             mb={2} fontFamily={'karla'} my={'2'}
            >{sectionOfText.discription}</Text>

        </Stack>
        
        </Box>
        </GridItem>

      <GridItem colSpan={{base: "6", md: "4", lg: "6"}}>  
<Box 
position={'relative'}
mb={'7'}
height={{base: "350px", md: "400px", lg: "450px"}}

>
            <Image 
            src={sectionOfText["img-1"]} 
            h={{base: "220px", md: "300px", lg: "338px"}} 
            w={{base: "270px", md: "220px", lg: "272px"}}  
            top={'5'} 
            right={{base: "55px", md: "50px", lg: "170px"}} 
            position={'absolute'} 
            borderRadius={2}/>
            
            <Text 
            as={'figcaption'}
            display={{base: "block", md: "none", lg: "none"}}
            position={'absolute'}
            top={'250px'}
            left={'50px'}            
            >
                Littel Lemon owners Marip and Adrian.
            </Text>


            <Image 
            src={sectionOfText["img-2"]} 
            h={{base: "200px", md: "300px", lg: "338px"}} 
            w={{base: "180px", md: "220px", lg: "272px"}}  
            display={{base: "none", md: "block", lg: "block"}}
            position={'absolute'} 
            top={'100px'} 
            
            borderRadius={'2'} />
            </Box>    

            </GridItem>
    </SimpleGrid>
    <Footer/>   
    </> 
);
}



export default AboutUs;
    