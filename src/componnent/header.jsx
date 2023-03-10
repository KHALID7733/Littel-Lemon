import React, { useEffect, useRef } from "react";
import { Box, Button, Grid, HStack, Icon, IconButton, Image, textDecoration,GridItem, Spacer, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton, VStack, DrawerFooter } from "@chakra-ui/react";
import logo from "../imagess/Logo .svg";
import basket from '../imagess/Basket.svg'
import hemburger from '../imagess/🦆 icon _hamburger menu_.svg';
import './littel-c.css'
import Login from "./LoginComponents/Login";


const listOf = [
  {
    "nameOf": "Home",
    'link': '/Home' 

  },
  {
    "nameOf": "About",
    'link':   '/About'

  },
  {
    "nameOf": "Menu",
    'link':   '/Menue'

  },
  {
    "nameOf": "Reservation",
    'link':    '/Reservation-table'

  }
  
]

// for man screen small and desktop both

const Header = () => {

  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY

    
//for scroller 

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;

      if (!headerElement) {
        return;
   }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
        headerElement.style.transitionDuration = '0.5s';

    } else {
        headerElement.style.transform = "translateY(-200px)";

   }
      
      prevScrollPos = currentScrollPos;
  }
  
    window.addEventListener('scroll', handleScroll)
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
  }
  }, []);


// on handlclick

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (

    <>
    <Box
    display={{base: "none", md: 'block', lg: "block"}}
    zIndex={'9000'}
    ref={headerRef}
    position="fixed"
    top={0}
    left={0}
    right={0}
    translateY={0}
    transitionProperty="transform"
    transitionDuration=".3s"
    transitionTimingFunction="ease-in-out"
    backgroundColor="white"
    borderBlock={'1px'}
    borderColor="#555"
    >


    <Grid templateColumns={{base: "repeat(6, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(12, 1fr)"}} >

<GridItem
colSpan={{base: "3", md: "2", lg: "4"}}


>


      
      <Box  maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack >
            <nav>
              <img src={logo} alt="image" />
            </nav>
          </HStack>
          
        </HStack>
      </Box>
  

</GridItem>

<GridItem
colSpan={{base: "3", md: "6", lg: "8"}}
>
<Box
    display={{base: "none", md: 'block', lg: "block"}}

>
  
<HStack>
            <nav>
              {
                listOf.map((e)=>{
                return  ( <a
                className="hover"
                  style={{
                    marginLeft: "20px"
                  }}
                  
                  key={e.nameOf}
                  href={e.link}
                  onClick={handleClick}
                  >
                    {e.nameOf}

                  </a>)

                })
              }
              <Button ml={3} mr={3} bg={'#F4CE14'}>Order Online</Button>
              {/* <a href="" className="hover">Login</a> */}
              <Login/>
              
            </nav>
            <Image className="hover" src={basket} width={'40px'} height={'45px'}  />
          </HStack>


</Box>
           

</GridItem>
</Grid>
</Box>

{/* here form i started menue for small screen users */}

<Box
    display={{base: "block", md: 'none', lg: "none"}}

>
<DrawerMenue/>
</Box>
</>

  );
};
export default Header;

//For small uers vivew 

const DrawerMenue = ()=>{
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = useRef();

  return(
    <Box
    display={{base: "block", md: 'none', lg: "none"}}
    zIndex={'1000'}
    position="fixed"
    top={0}
    left={0}
    right={0}
    translateY={0}
    transitionProperty="transform"
    transitionDuration=".3s"

    backgroundColor="white"

    borderColor="#555"
    >
      
<Grid
gridTemplateColumns={{base: "repeat(6, 1fr)"}}
>
<GridItem
colSpan={'5'}
>

<Box  margin="0 auto">
        <HStack
          px={5}
          py={2}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* <Image className="hover" src={basket} width={'40px'} height={'45px'}  /> */}

          <HStack >
            <nav>
              <img src={logo} alt="image" />
            </nav>
            
          </HStack>
          
        </HStack>
        
        <Spacer/>
      </Box>
      </GridItem>

      <GridItem 
      colSpan={'1'}
      >

<Image className="hover" src={hemburger} mt={'3'} onClick={onOpen} />
<Drawer 
isOpen={isOpen}
placement={'right'}
onClose={onClose}
finalFocusRef={btnRef}
zIndex={'1001'}
>
  <DrawerOverlay/>
    <DrawerContent>
      <DrawerCloseButton/>
      <DrawerBody>
      {/* nav started from here */}
      <VStack>
            <nav>
              <VStack gap={'5'} fontSize={'2xl'}>
              {
                listOf.map((e)=>{
                return  ( <a
                className="hover"
                  style={{
                    marginLeft: "20px"
                  }}
                  
                  key={e.nameOf}
                  href={e.link}
                  
                  >
                    {e.nameOf}

                  </a>)

                })
              }
              <Button  bg={'#F4CE14'} size={'sm'}>Order Online</Button>
              {/* <a href="" className="hover">Login</a> */}

              <Login/>
              
              </VStack>
              
            </nav>
           
          
            </VStack>
            
      </DrawerBody>
    </DrawerContent>
  
    

</Drawer>
</GridItem>
</Grid>

</Box>


  );
}