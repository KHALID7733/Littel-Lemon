import * as React from "react";
import { HStack } from "@chakra-ui/react";


const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <HStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      
    >
      <HStack maxWidth="1280px" minHeight="50vh" {...boxProps}>
        {children}
      </HStack>
    </HStack>
  );
};

export default FullScreenSection;
