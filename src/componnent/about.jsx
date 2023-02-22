import {Stack, Box, Card, Flex, Heading, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import resturenA from '../imagess/Mario and Adrian A.jpg';
import resturenB from '../imagess/Mario and Adrian b.jpg';

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
        <Box 
maxH={'600px'}
maxW={'1440px'}
mt={'5'}
>

    <Flex gap={'5'}
        flexDirection={'auto'}
        justifyContent={'center'}
    >

        <Box maxH={'468px'} maxW={'945px'} >
    <HStack>
        
        <Box maxH={'468px'} maxW={'429.72px'}>
        <Stack>

            <Heading>{sectionOfText.title}</Heading>
            <Text as={'md'}>{sectionOfText.subTitle}</Text>
            <Text>{sectionOfText.discription}</Text>

        </Stack>
        
        </Box>
        <Spacer></Spacer>

<Box width={'515.28px'} h={'468px'} position={'relative'}>
            <Image src={sectionOfText["img-1"]} h={'338px'} w={'272px'}  top={'5'} right='30px' position={'absolute'} borderRadius={2}/>
            <Image src={sectionOfText["img-2"]} h={'338px'} w={'272px'}position={'absolute'} top={'100px'} borderRadius={'2'} />
            </Box>    

    </HStack>
        </Box>
    </Flex>
</Box>
);
}



export default AboutUs;
    