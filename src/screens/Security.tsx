import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const SecuritySection: React.FC = () => {
  return (
    <Box
      position="relative"
      height="100vh"
      bgImage="url('//minerwolf_security.png')"
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      paddingX={{ base: "1rem", md: "2rem" }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg={"rgba(21, 34, 105, 0.5)"}
        zIndex="1"
      />

      <Box
        textAlign="right"
        maxW={{ base: "100%", md: "800px" }}
        zIndex="2"
        ml="auto"
        borderRadius="lg"
        p={{ base: "1rem", md: "2rem" }}
      >
        <Heading
          as="h2"
          size={{ base: "lg", md: "xl" }}
          mb={4}
          fontWeight="bold"
        >
          Is{" "}
          <Box as="span" color="teal.300">
            MinerWolf
          </Box>{" "}
          safe?
        </Heading>
        <Text fontSize={{ base: "lg", md: "2xl" }} mb={6}>
          Yes, our platform uses advanced security measures to ensure your
          rewards and data are protected.
        </Text>
        <Text fontSize={{ base: "md", md: "xl" }} mb={8} lineHeight="tall">
          MinerWolf’s cloud mining service is backed by sophisticated,
          algorithmic trading systems. These algorithms operate automatically to
          maximize your returns by making data-driven decisions, ensuring that
          your earnings are derived from genuine market activities.
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

export default SecuritySection;
