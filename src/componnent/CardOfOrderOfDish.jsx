import { Card, CardBody, Text, Heading, CardFooter, CardHeader, GridItem, HStack, Box, Grid, VStack, Image, Flex, Spacer } from "@chakra-ui/react";
import GreekSlad1 from '../imagess/dish-1.png';
import Bruchetta1 from '../imagess/bruschetta.png';
import LemonDessert1 from '../imagess/lemon dessert.png';
import titleImage1 from '../imagess/Titel-image.png';
import Header from "./header";


const arrayOfDish = [
    {
        'nameOfDish': 'Bruschetta',
        'rateOfDish':  11.00,
        'dis': ' An Italian antipasto called bruschetta is made of grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.',
        'img': Bruchetta1

    },
    {
        'nameOfDish': 'Greek salad',
        'rateOfDish':  12.00,
        'dis': 'Our famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese. Garnished with crispy onion and salty capers.',
        'img': GreekSlad1

    },
    {
        'nameOfDish': 'Grilled fish',
        'rateOfDish':  9.00,
        'dis': 'The fish is swiftly grilled over medium- or high-heat coals or over medium- or high-heat gas grill burners. Thinner fillets and steaks are grilled over direct fire. ',
        'img': titleImage1

    },
    {
        'nameOfDish': 'Lemon dessert',
        'rateOfDish':  7.00,
        'dis': 'This cake is adored not only for its flavor but also for its texture and simplicity. A base of creamed butter and sugar, eggs, lemon, milk, and flour are among the most basic ingredients. We omitted the brown sugar and substituted extra granulated sugar instead. ',
        'img': LemonDessert1
    }
]

const m = arrayOfDish.map((e)=>{
    return(
        <>
        
          </>  
    );
})


export const Dish1 = ()=>{
    return (
        <>

<Grid templateColumns={{base: "repeat(6, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(12, 1fr)"}}
      justifyContent="center"
      alignItems="center"
      p={'10'}      
      >

<GridItem
colSpan={{base: "6", md: "8", lg: "12"}}
>
    
    
<Card>
            <CardHeader>

            </CardHeader>
            <CardBody>
                <Flex wrap={{base: 'wrap', md: 'nowrap', lg: 'nowrap'}}>
          <Box mx={'5'}>   
            <Heading 
          as="h1"
          fontFamily={'Markazi Text'} 
          mb={3}
          fontSize={{base: "34px", md: "40px", lg: " 40px"}}
          color={{base: "black", md: "black", lg: "Black"}}
          fontWeight={{base: "200", md: "300", lg: "600"}}
          lineHeight={{base: "68.5px", md: "80px", lg: "90px"}}
          
          
          >Bruschetta</Heading>
          <Text mb={2} color="#55555" fontFamily={'karla'} my={'2'} fontSize={{base: "14px", md: "20px", lg: " 20px"}}>An Italian antipasto called bruschetta is made of grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.</Text>
          <HStack>
          <Text mb={2} color="#55555" fontFamily={'karla'} my={'2'} fontSize={{base: "14px", md: "20px", lg: " 20px"}}>Price:</Text>
          <Text fontFamily={'Karla'} fontSize={{base: "14px", md: "20px", lg: " 20px"}} color={'#EE9972'}>$ 11</Text>

          </HStack>
          </Box>
          
<Image rounded={'md'} src={Bruchetta1} width={{base: '264px', md: '400', lg: '442px'}} height={{base: '185.26px', md: '300', lg: '342px'}} />


</Flex>
          </CardBody>
          <CardFooter>

          </CardFooter>
        </Card>

</GridItem>
</Grid>
        </>
    );
}


export const Dish2 = ()=>{
    return (
        <>
         <Grid templateColumns={{base: "repeat(6, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(12, 1fr)"}}
      justifyContent="center"
      alignItems="center"
      p={'10'}      
      >

<GridItem
colSpan={{base: "6", md: "8", lg: "12"}}
>
    
<Card>
            <CardHeader>

            </CardHeader>
            <CardBody>
                <Flex wrap={{base: 'wrap', md: 'nowrap', lg: 'nowrap'}}>
          <Box mx={'5'}>   
            <Heading 
          as="h1"
          fontFamily={'Markazi Text'} 
          mb={3}
          fontSize={{base: "34px", md: "40px", lg: " 40px"}}
          color={{base: "black", md: "black", lg: "Black"}}
          fontWeight={{base: "200", md: "300", lg: "600"}}
          lineHeight={{base: "68.5px", md: "80px", lg: "90px"}}
          
          
          >Greek salad</Heading>
          <Text mb={2} color="#55555" fontFamily={'karla'} my={'2'} fontSize={{base: "14px", md: "20px", lg: " 20px"}}>Our famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese. Garnished with crispy onion and salty capers.</Text>
          <HStack>
          <Text mb={2} color="#55555" fontFamily={'karla'} my={'2'} fontSize={{base: "14px", md: "20px", lg: " 20px"}}>Price:</Text>
          <Text fontFamily={'Karla'} fontSize={{base: "14px", md: "20px", lg: " 20px"}} color={'#EE9972'}>$ 12.00</Text>

          </HStack>
          </Box>
          
<Image rounded={'md'} src={GreekSlad1} width={{base: '264px', md: '400', lg: '442px'}} height={{base: '185.26px', md: '300', lg: '342px'}} />


</Flex>
          </CardBody>
          <CardFooter>

          </CardFooter>
        </Card>

    
</GridItem>
</Grid>
        </>
    );
}


export const Dish3 = ()=>{
    return (
        <>
         <Grid templateColumns={{base: "repeat(6, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(12, 1fr)"}}
      justifyContent="center"
      alignItems="center"
      p={'10'}      
      >

<GridItem
colSpan={{base: "6", md: "8", lg: "12"}}
>
<Card>
            <CardHeader>

            </CardHeader>
            <CardBody>
                <Flex wrap={{base: 'wrap', md: 'nowrap', lg: 'nowrap'}}>
          <Box mx={'5'}>   
            <Heading 
          as="h1"
          fontFamily={'Markazi Text'} 
          mb={3}
          fontSize={{base: "34px", md: "40px", lg: " 40px"}}
          color={{base: "black", md: "black", lg: "Black"}}
          fontWeight={{base: "200", md: "300", lg: "600"}}
          lineHeight={{base: "68.5px", md: "80px", lg: "90px"}}
          
          
          >Grilled fish</Heading>
          <Text mb={2} color="#55555" fontFamily={'karla'} my={'2'} fontSize={{base: "14px", md: "20px", lg: " 20px"}}>Our famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese. Garnished with crispy onion and salty capers.</Text>
          <HStack>
          <Text mb={2} color="#55555" fontFamily={'karla'} my={'2'} fontSize={{base: "14px", md: "20px", lg: " 20px"}}>Price:</Text>
          <Text fontFamily={'Karla'} fontSize={{base: "14px", md: "20px", lg: " 20px"}} color={'#EE9972'}>$ 9.00</Text>

          </HStack>
          </Box>
          
<Image rounded={'md'} src={titleImage1} width={{base: '264px', md: '400', lg: '442px'}} height={{base: '185.26px', md: '300', lg: '342px'}} />


</Flex>
          </CardBody>
          <CardFooter>

          </CardFooter>
        </Card>

</GridItem>
</Grid>
       
        </>
    );
}


export const Dish4 = ()=>{
    return (
        <>
         <Grid templateColumns={{base: "repeat(6, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(12, 1fr)"}}
      justifyContent="center"
      alignItems="center"
      p={'10'}      
      >

<GridItem
colSpan={{base: "6", md: "8", lg: "12"}}
>
    
<Card>
            <CardHeader>

            </CardHeader>
            <CardBody>
                <Flex wrap={{base: 'wrap', md: 'nowrap', lg: 'nowrap'}}>
          <Box mx={'5'}>   
            <Heading 
          as="h1"
          fontFamily={'Markazi Text'} 
          mb={3}
          fontSize={{base: "34px", md: "40px", lg: " 40px"}}
          color={{base: "black", md: "black", lg: "Black"}}
          fontWeight={{base: "200", md: "300", lg: "600"}}
          lineHeight={{base: "68.5px", md: "80px", lg: "90px"}}
          
          
          >Lemon dessert</Heading>
          <Text mb={2} color="#55555" fontFamily={'karla'} my={'2'} fontSize={{base: "14px", md: "20px", lg: " 20px"}}>This cake is adored not only for its flavor but also for its texture and simplicity. A base of creamed butter and sugar, eggs, lemon, milk, and flour are among the most basic ingredients. We omitted the brown sugar and substituted extra granulated sugar instead.</Text>
          <HStack>
          <Text mb={2} color="#55555" fontFamily={'karla'} my={'2'} fontSize={{base: "14px", md: "20px", lg: " 20px"}}>Price:</Text>
          <Text fontFamily={'Karla'} fontSize={{base: "14px", md: "20px", lg: " 20px"}} color={'#EE9972'}>$ 7.00</Text>

          </HStack>
          </Box>
          
<Image rounded={'md'} src={LemonDessert1} width={{base: '264px', md: '400', lg: '442px'}} height={{base: '185.26px', md: '300', lg: '342px'}} />


</Flex>
          </CardBody>
          <CardFooter>

          </CardFooter>
        </Card>

</GridItem>
</Grid>
        </>
    );
}

