import { Icon, Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Card1 = ({ title, description, imageSrc, price, icon, order }) => {
 
 return (
  <Card width="264.67px" height={'439px'} borderRadius={'md'} background={'blackAlpha.100'}>
    <CardBody>
        {/* width should be 264.67px */}
        <Image src={imageSrc} alt={'Image'} width={'264px'} height={'185.26px'} />
        <HStack>
        <Text fontSize={'md'} fontWeight={'bold'} fontFamily={'Markazi Text'} m={3} ml={'0'}>{title}</Text>
        <Spacer></Spacer>
        <Text fontFamily={'Karla'} fontSize={'sm'} color={'#EE9972'}>{price}</Text>
        </HStack>
        <Text fontSize={'sm'} fontFamily={'Karla'} mb={'2'}> {description}</Text>

    </CardBody>
    <HStack mb={'4'} ml={'4'}>
       <Text fontSize={'sm'} fontWeight={'bold'} fontFamily={'Karla'}>{order}</Text>
       <Spacer mx={'50%'}/>
       <Image src={icon} maxH={'20px'} maxW={'25px'} />       
       </HStack>

  </Card>

 );
};

export default Card1;
