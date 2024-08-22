import React from "react";
import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
const Footer: React.FC = () => {
  return (
    <Box bg="gray.800" color="white" py={6}>
      <Flex
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        px={4}
        direction={{ base: "column", md: "row" }} // Stack items on mobile
        textAlign={{ base: "center", md: "left" }} // Center text on mobile
      >
        {/* Logo and Legal Link */}
        <Flex
          align="center"
          justify={{ base: "center", md: "flex-start" }}
          mb={{ base: 4, md: 0 }}
        >
          <Image
            src="src/assets/footer_logo.png"
            alt="MinerWolf Logo"
            height={{ base: "40px", md: "80px" }}
            mr={4}
          />
          <Link ml={8} href="#" fontSize="lg">
            LEGAL
          </Link>
        </Flex>

        {/* App Store Links */}
        <Flex justify={{ base: "center", md: "flex-end" }}>
          <Link href="https://www.apple.com/app-store/" isExternal mr={4}>
            <Image
              src="src/assets/appstore.png"
              alt="Download on the App Store"
              height="60px"
            />
          </Link>
          <Link href="https://play.google.com/store" isExternal>
            <Image
              src="src/assets/playstore.png"
              alt="Get it on Google Play"
              height="60px"
            />
          </Link>
        </Flex>
      </Flex>

      <Box
        textAlign="center"
        mt={6}
        borderTop="1px"
        borderColor="teal.300"
        pt={4}
      >
        <Text fontSize="sm">
          Powered by MinerWolf © 2024 | All rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
