import React from "react";
import { Box, Flex, Heading, Text, Button, Input } from "@chakra-ui/react";

// const Join: React.FC = () => {
//   return (
//     <Box
//       position="relative"
//       height="100vh"
//       bgImage="url('public/join_now.png')"
//       bgSize="cover"
//       bgPos="center"
//       bgAttachment="fixed"
//       color="white"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       paddingX="2rem"
//     >
//       {/* Transparent Blue Overlay */}
//       <Box
//         position="absolute"
//         top="0"
//         left="0"
//         right="0"
//         bottom="0"
//         bg={"#102045"}
//         opacity="0.4"
//         zIndex="1"
//       />
//       {/* Content Section */}
//       <Box
//         textAlign="center"
//         maxW="800px"
//         zIndex="2" // Ensure content appears above the background
//       >
//         <Heading as="h2" size="2xl" mb={4}>
//           Join{" "}
//           <Box as="span" color="teal.300">
//             MinerWolf
//           </Box>{" "}
//           Today!
//         </Heading>
//         <Text fontSize="2xl" mb={6}>
//           Take advantage of our powerful features and start earning with
//           MinerWolf. Sign up now to explore our referral system, use our mobile
//           app, benefit from 24/7 automated mining, and receive expert support
//           whenever you need it.
//         </Text>
//         <Flex justify="flex-end">
//           <Input
//             placeholder="Enter your email"
//             size="lg"
//             width={"400px"}
//             maxW="500px"
//             mr={4}
//             backgroundColor={"white"}
//             borderRadius="full" // Rounded border for the input
//             borderColor="teal.300" // Teal border color
//             _focus={{
//               borderColor: "teal.300",
//               boxShadow: "0 0 0 1px teal.300",
//             }}
//           />
//           <Button
//             colorScheme="teal"
//             size="lg"
//             px={"4rem"}
//             borderRadius="full" // Rounded border for the button
//             bg="teal.300"
//             color="white"
//             _hover={{
//               backgroundColor: "teal.400",
//             }}
//           >
//             Get Started
//           </Button>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };



const Join: React.FC = () => {
  return (
    <Box
      position="relative"
      height="100vh"
      bgImage="url('public/join_now.png')"
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      paddingX={{ base: "1rem", md: "2rem" }} // Responsive padding
    >
      {/* Transparent Blue Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg={"#102045"}
        opacity="0.4"
        zIndex="1"
      />
      {/* Content Section */}
      <Box
        textAlign="center"
        maxW="800px"
        zIndex="2"
        px={{ base: "1rem", md: "0" }} // Add padding for small screens
      >
        <Heading
          as="h2"
          size="2xl"
          mb={4}
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} // Responsive font size
        >
          Join{" "}
          <Box as="span" color="teal.300">
            MinerWolf
          </Box>{" "}
          Today!
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }} // Responsive font size
          mb={6}
        >
          Take advantage of our powerful features and start earning with
          MinerWolf. Sign up now to explore our referral system, use our mobile
          app, benefit from 24/7 automated mining, and receive expert support
          whenever you need it.
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }} // Stack inputs vertically on small screens
          justify="flex-end"
          align="center"
        >
          <Input
            placeholder="Enter your email"
            size="lg"
            width={{ base: "100%", md: "400px" }} // Full width on small screens
            maxW="500px"
            mb={{ base: 4, md: 0 }} // Add margin on small screens
            mr={{ base: 0, md: 4 }} // No margin on small screens
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
            width={{ base: "100%", md: "auto" }} // Full width on small screens
          >
            Get Started
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};



export default Join;
