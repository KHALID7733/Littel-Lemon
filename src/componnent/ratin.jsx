import FullScreenSection from "./FullScreenSection";
import { FaStar } from "react-icons/fa";
import { Box, Flex, FormErrorIcon, Icon } from "@chakra-ui/react";
import rating1 from '../imagess/rating-1.png';
import rating2 from '../imagess/rating-2.png';
import rating3 from '../imagess/rating-3.png';
import rating4 from '../imagess/rating-4.png';
import RatingCard from "./ratingCard";

const ratingOfPeople = [
    {
        // 'icon': <FaStar/>,
        'image': rating1,
        'name': 'Adam',
        'comment': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptate doloribus magnam eius, laborum impedit maiores sapiente ducimus aperiam asperiores!',

    },
    {
        // 'icon': <FaStar/>,
        'image': rating2,
        'name': 'Sara',
        'comment': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptate doloribus magnam eius, laborum impedit maiores sapiente ducimus aperiam asperiores!',
        
    },
    {
        // 'icon': <FaStar/>,
        'image': rating3,
        'name': 'Sajid',
        'comment': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptate doloribus magnam eius, laborum impedit maiores sapiente ducimus aperiam asperiores!',
        
    },
    {
        // 'icon': <FaStar/>,
        'image': rating4,
        'name': 'Aman',
        'comment': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptate doloribus magnam eius, laborum impedit maiores sapiente ducimus aperiam asperiores!',
        
    },
]



const Rating = () =>{
    return(
        
        
        <Box 
        
        background={'rgb(224, 230, 224)'}
        
        >

            <Flex gap={'5'}
                flexDirection={'auto'}
                justifyContent={'center'}
                flexWrap={{base: "wrap", md: "nowrap", lg: "nowrap"}}
                my={{base: "20px", md: "10px", lg: "10px"}}
                mx={{base: "10px", md: "10px", lg: "10px"}}
                
            >   
        {/* <Icon color={'black'} fontSize={'xl'}>{<FaStar/>}</Icon> */}

            {
                ratingOfPeople.map((e)=>{
                    return(
                        <RatingCard
                        // icon={e.icon}
                        imageSrc={e.image}
                        comment={e.comment}
                        nameOf={e.name}
                            
                        />
                    );
                })
            }
            </Flex>
</Box>
        );
}

export default Rating;


