import React from "react";
import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Info: React.FC = () => {
  return (
    <Box
      position="relative"
      paddingY={{ base: "3rem", md: "6rem" }}
      paddingX={{ base: "1rem", md: "2rem" }}
      bg="gray.800"
      color="white"
      bgImage="url('/src/assets/about_minerwolf.png')"
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed"
      height="100vh"
      borderTop="5px solid teal"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(20, 20, 20, 0.5)"
        zIndex="1"
      />

      <Flex
        direction={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
        pl={{ base: 0, md: 35 }}
        position="relative"
        zIndex="3"
      >
        <VStack
          flex={1}
          alignItems={{ base: "center", md: "flex-start" }}
          spacing={10}
        >
          <Heading
            size={{ base: "xl", md: "2xl" }}
            mb="4"
            textAlign={{ base: "center", md: "left" }}
          >
            What is{" "}
            <Box as="span" color="teal">
              MinerWolf?
            </Box>
          </Heading>

          <Box
            fontSize={{ base: "lg", md: "2xl" }}
            textAlign={{ base: "center", md: "left" }}
            fontWeight="800"
            width="100%"
          >
            MinerWolf is an online platform on which you can buy algorithmic
            cloud mining contracts and get your rewards.
          </Box>

          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            textAlign={{ base: "center", md: "left" }}
            width="100%"
          >
            MinerWolf's cloud mining is backed by algorithmic trading and allows
            you to mine cryptocurrencies without owning any mining equipment
            yourself.
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
        </VStack>

        <VStack flex={1}></VStack>
      </Flex>
    </Box>
  );
};

export default Info;
