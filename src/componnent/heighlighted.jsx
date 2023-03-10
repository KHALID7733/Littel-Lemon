import { Box, Button, Flex, Grid, GridItem, HStack, Spacer, Text } from "@chakra-ui/react";
import Card1 from "./Card";
import GreekSlad from '../imagess/dish-1.png';
import Bruchetta from '../imagess/bruschetta.png';
import LemonDessert from '../imagess/lemon dessert.png';
import scooter from '../imagess/scooter-icon.png'
import Header from "./header";
import LandingSection from "./LandingSection";
import Rating from "./ratin";
import Footer from "./Footer";


const specail = "This Weak Specials";





const card2 = [
    {
        'titel': 'Greek Slad',
        'price': '$ 12.99',
        'discription': 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
        'imageSrc': GreekSlad,
        'order': 'Order a delivery',
        'icon': scooter,
        'dish': '/dish2',
        
    },
    {
        'titel': 'Bruchetta',
        'price': '$ 5.99',
        'discription': 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
        'imageSrc': Bruchetta,
        'order': 'Order a delivery',
        'icon': scooter,
        'dish': '/dish1',
    },
    {
        'titel': 'Lemon Dessert',
        'price': '$ 5.00',
        'discription': 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        'imageSrc': LemonDessert,
        'order': 'Order a delivery',
        'icon': scooter,
        'dish': '/dish4',
    },
]

const Heighlight = () =>(
    <>
    
    <LandingSection/>
    <Box 
    w={'100%'} 
    mt={'70px'} 
    justifyContent={'center'} 
    >

        <Box 
        ml={{base: "50px", md: "100px", lg: "300px"}} 
        mr={{base: "50px", md: "100px", lg: "300px"}}
        my={{base: "20px", md: "10px", lg: "10px"}}
        >
            <HStack>
                <Text fontSize={'xl'} fontWeight={'bold'} fontFamily={'Markazi Text'}>{specail}</Text>
                <Spacer />
                <Button bg={'#F4CE14'}>Online Order </Button>
            </HStack>

            </Box>
            <Flex gap={4} mt={4} flexWrap={{base: "wrap", md: "nowrap", lg: "nowrap"}} justifyContent={'center'}>
            {card2.map((e) => {
                return (
                    <Card1
                        key={e.titel}
                        imageSrc={e.imageSrc}
                        title={e.titel}
                        description={e.discription}
                        price={e.price}
                        order={e.order}
                        icon={e.icon}
                        dish={e.dish}
                        >
                        
                        </Card1>


                );

            })}

</Flex>
    </Box>
<Rating/>
<Footer/>
    </>
) 

export default Heighlight;