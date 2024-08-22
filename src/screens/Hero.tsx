import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const MotionBox = motion(Box);

  return (
    <MotionBox
      height="100vh"
      position="relative"
      bgImage="url('public/welcome_photo.png')"
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed"
      display="flex"
      alignItems="center"
      justifyContent="center"
      initial={{ opacity: 1 }}
      scrollSnapAlign="start"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg={"rgba(21, 34, 125, 0.45)"}
        zIndex="1"
      />

      <Box
        textAlign="center"
        py={{ base: 10, md: 20 }}
        px={{ base: 4, md: 8 }}
        position="relative"
        zIndex="2"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          height="100%"
          alignItems="center"
        >
          <VStack flex={1}></VStack>
          <VStack
            flex={2}
            align={{ base: "center", md: "flex-end" }}
            justify="center"
            spacing={6}
            mr={{ md: 20 }}
            mt={{ md: 20 }}
          >
            <Heading
              size={{ base: "lg", md: "2xl" }}
              color="white"
              textAlign={{ base: "center", md: "right" }}
            >
              Join our cloud mining to get
            </Heading>
            <Heading
              size={{ base: "lg", md: "2xl" }}
              textAlign={{ base: "center", md: "right" }}
            >
              <Box as="span" color="white">
                crypto rewards with{" "}
              </Box>
              <Box as="span" color="teal.300">
                MinerWolf!
              </Box>
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "3xl" }}
              color="white"
              textAlign={{ base: "center", md: "right" }}
              width={{ base: "100%", md: "80%" }}
            >
              Experience effortless and risk-free rewards with our algorithmic
              cloud mining service. Sign up to learn how you can start getting
              your rewards today.
            </Text>
            <Heading
              size={{ base: "lg", md: "2xl" }}
              color="white"
              textAlign={{ base: "center", md: "right" }}
            >
              <Box as="span" color="teal.300">
                Join{" "}
              </Box>
              our pack now!
            </Heading>
            <Box width="100%">
              <Flex
                direction={{ base: "column", md: "row" }}
                justify={{ base: "center", md: "flex-end" }}
              >
                <Input
                  placeholder="Enter your email"
                  size="lg"
                  width={{ base: "100%", md: "400px" }}
                  maxW="500px"
                  mr={{ base: 0, md: 4 }}
                  mb={{ base: 4, md: 0 }}
                  backgroundColor={"white"}
                  borderRadius="full"
                  borderColor="teal.300"
                  _focus={{
                    borderColor: "teal.300",
                    boxShadow: "0 0 0 1px teal.300",
                  }}
                />
                <Button
                  colorScheme="teal"
                  size="lg"
                  px={"4rem"}
                  borderRadius="full"
                  bg="teal.300"
                  color="white"
                  _hover={{
                    backgroundColor: "teal.400",
                  }}
                >
                  Get Started
                </Button>
              </Flex>
            </Box>
          </VStack>
        </Flex>
      </Box>
    </MotionBox>
  );
};

export default Hero;
