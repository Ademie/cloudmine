import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";



const Started: React.FC = () => {
  return (
    <Box
      position="relative"
      height={{ base: "auto", md: "100vh" }} // Adjust height on smaller screens
      bgImage="url('public/get_started.png')"
      bgSize="cover"
      bgPos="center"
      bgAttachment={{ base: "scroll", md: "fixed" }} // Disable fixed on mobile for better performance
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      paddingX={{ base: "1rem", md: "2rem" }} // Adjust padding for smaller screens
      py={{ base: "8rem", md: "0" }} // Add padding to top/bottom on mobile
    >
      <Box
        textAlign="left"
        maxW={{ base: "100%", md: "800px" }} // Full width on mobile
        zIndex="2"
        borderRadius="lg"
        p={{ base: "1rem", md: "2rem" }} // Adjust padding
      >
        <Heading size={{ base: "xl", md: "2xl" }} mb={4} fontWeight="bold">
          Is{" "}
          <Box as="span" color="teal.300">
            MinerWolf
          </Box>{" "}
          safe?
        </Heading>
        <Text fontSize={{ base: "lg", md: "2xl" }} mb={6} fontWeight="800">
          How do I get started?
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} mb={8} lineHeight="tall">
          Simply sign up with your email...
        </Text>
        <Button
          colorScheme="teal"
          bg="transparent"
          border="2px solid teal"
          size="lg"
          px="4rem"
          borderRadius="full"
          color="white"
          _hover={{
            backgroundColor: "teal.400",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            transform: "scale(1.05)",
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Started;
