import React from "react";

import { useState } from "react";
import {
  Box,
  Flex,
  Button,
  Image,
  Link,
  useBreakpointValue,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  const paddingY = useBreakpointValue({ base: "1rem", md: "1.5rem" });

  return (
    <Box
      position="fixed"
      top="0"
      width="100%"
      bg="black"
      zIndex="10"
      padding="0.5rem"
      py={paddingY}
    >
      <Flex justify="space-between" align="center" maxW="1300px" mx="auto">
        <Box
          _hover={{
            transform: "scale(0.8)",
            transition: "transform 0.3s ease",
          }}
          cursor="pointer"
        >
          <Link>
            <Image
              src="//minerwolf_logox.png"
              alt="MinerWolf Logo"
              height="50px"
            />
          </Link>
        </Box>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <HamburgerIcon
            color={"white"}
            fontSize={"2xl"}
            aria-label="Menu"
            display={{ base: "flex", md: "none" }}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Collapse in={isOpen} animateOpacity>
            <Box
              bg="black"
              p={4}
              position="absolute"
              top="80px"
              right="0"
              width="100%"
              zIndex="10"
              boxShadow="md"
            >
              <Flex direction="column" align="center">
                <Button
                  colorScheme="teal"
                  mb={2}
                  size={buttonSize}
                  fontSize={{ base: "md", md: "xl" }}
                  py={{ base: "1rem", md: "1.8rem" }}
                  px={{ base: "2rem", md: "3rem" }}
                  borderRadius="full"
                  bg="transparent"
                  border="2px solid teal"
                  _hover={{
                    backgroundColor: "teal",
                    color: "white",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                  }}
                >
                  Sign In
                </Button>
                <Button
                  colorScheme="teal"
                  borderRadius="full"
                  bg="transparent"
                  size={buttonSize}
                  py={{ base: "1rem", md: "1.8rem" }}
                  px={{ base: "2rem", md: "3rem" }}
                  border="2px solid teal"
                  _hover={{
                    backgroundColor: "teal",
                    color: "white",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                  }}
                >
                  Sign Up
                </Button>
              </Flex>
            </Box>
          </Collapse>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            display={{ base: "none", md: "flex" }}
          >
            <Button
              colorScheme="teal"
              mr={{ md: 4 }}
              mb={{ base: 2, md: 0 }}
              size={buttonSize}
              fontSize={{ base: "md", md: "xl" }}
              py={{ base: "1rem", md: "1.8rem" }}
              px={{ base: "2rem", md: "3rem" }}
              borderRadius="full"
              bg="transparent"
              border="2px solid teal"
              _hover={{
                backgroundColor: "teal",
                color: "white",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
            >
              Sign In
            </Button>
            <Button
              colorScheme="teal"
              borderRadius="full"
              bg="transparent"
              size={buttonSize}
              py={{ base: "1rem", md: "1.8rem" }}
              px={{ base: "2rem", md: "3rem" }}
              border="2px solid teal"
              _hover={{
                backgroundColor: "teal",
                color: "white",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
            >
              Sign Up
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
