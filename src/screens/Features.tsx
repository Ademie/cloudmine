import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaUsers, FaMobileAlt, FaCloud, FaHeadset } from "react-icons/fa";

const Features: React.FC = () => {
  return (
    <Box
      position="relative"
      py="10vh"
      bg="gray.800"
      color="white"
      textAlign="center"
      paddingX="2rem"
    >
      {/* Heading Section */}
      <Box mb={10}>
        <Heading as="h2" size="2xl" mb={4} color="teal.300">
          MinerWolf's Features
        </Heading>
        <Text fontSize="xl" mb={4}>
          Discover the Power of MinerWolf!
        </Text>
      </Box>

      {/* Features Grid */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} maxW="1200px" mx="auto">
        {/* Feature 1 */}
        <Box>
          <Icon as={FaUsers} w={16} h={16} mb={4} color="teal.300" />
          <Heading as="h3" size="lg" mb={2}>
            Referral System
          </Heading>
          <Text fontSize="md">
            Unlock greater earnings potential with MinerWolf’s innovative referral system. 
            Our platform is designed to reward users who bring in new members. 
            The more referrals you make, the higher your earnings grow, giving you a significant advantage.
          </Text>
        </Box>

        {/* Feature 2 */}
        <Box>
          <Icon as={FaMobileAlt} w={16} h={16} mb={4} color="teal.300" />
          <Heading as="h3" size="lg" mb={2}>
            Mobile App
          </Heading>
          <Text fontSize="md">
            Stay connected and in control of your rewards with the MinerWolf mobile app, 
            available for both Android and iOS. Our app provides a user-friendly interface, 
            allowing you to manage your mining plans and monitor your crypto earnings anytime, anywhere.
          </Text>
        </Box>

        {/* Feature 3 */}
        <Box>
          <Icon as={FaCloud} w={16} h={16} mb={4} color="teal.300" />
          <Heading as="h3" size="lg" mb={2}>
            24/7 Algorithmic Cloud Mining
          </Heading>
          <Text fontSize="md">
            Experience the convenience of MinerWolf’s automated cloud mining service, 
            which operates around the clock. Our advanced algorithms work tirelessly to maximize your earnings, 
            ensuring that you earn rewards even while you sleep.
          </Text>
        </Box>

        {/* Feature 4 */}
        <Box>
          <Icon as={FaHeadset} w={16} h={16} mb={4} color="teal.300" />
          <Heading as="h3" size="lg" mb={2}>
            Expert Support
          </Heading>
          <Text fontSize="md">
            Whether you’re unsure which package to choose or facing any difficulties, 
            our dedicated support team is here to assist you. MinerWolf offers expert guidance 
            and prompt responses to ensure a smooth and hassle-free experience.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Features;
