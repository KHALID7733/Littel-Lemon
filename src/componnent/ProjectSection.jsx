import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Card1 from "./Card";
import photo1 from '../imagess/photo1.png'
import photo2 from '../imagess/photo2.png'
import photo3 from '../imagess/photo3.png'
import photo4 from '../imagess/photo4.png'

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: photo1,
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: photo2,
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: photo3,
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: photo4,
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Flex>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card1
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc}
          />
        ))}
      </Box>
      </Flex>
    </FullScreenSection>
  );
};

export default ProjectsSection;
