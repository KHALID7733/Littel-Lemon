import { Avatar, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Icon, Image, Spacer, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const RatingCard = ({ imageSrc, comment, nameOf})=>{
    return(
<Flex 
                mb={'10'}

>
        <Card maxH={'570px'} maxW={'180px'} mt={'6'} shadow={'sm'}>
            <CardBody>
            <CardHeader>
                <HStack >
                <Icon color={'#F3CD13'} fontSize={'xl'}>{<FaStar/>}</Icon>
                <Icon color={'#F3CD13'} fontSize={'xl'}>{<FaStar/>}</Icon>            
                <Icon color={'#F3CD13'} fontSize={'xl'}>{<FaStar/>}</Icon>
                <Icon color={'#F3CD13'} fontSize={'xl'}>{<FaStar/>}</Icon>
            </HStack>
            </CardHeader>
            <HStack>
            <Avatar name={nameOf} src={imageSrc} size={'lg'} />
            <Spacer/>
            <Text size={'md'} fontFamily={'Karla'} fontWeight={'bold'} >{nameOf}</Text>
            </HStack>
            </CardBody>
            <CardFooter my={'20px'}>
                <Text fontFamily={'Karla'} fontSize={'sm'} color={'blackAlpha.600'}>{comment}</Text>
            </CardFooter>
        </Card>
        </Flex>
    );
}

export default RatingCard;