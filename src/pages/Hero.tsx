import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Img,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import heroImage from '../assets/myImage.png';

const Hero: React.FC = () => {
  return (
    <Box as="section" minH="100vh">
      <Flex
        maxW="1200px"
        mx="auto"
        px={8}
        py={2}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
      >
        <VStack align="flex-start" spacing={6} flex="1" color="white">
          <Heading as="h1" size="xl" fontWeight="bold">
            I am Arsalan
          </Heading>
          <Text
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '5xl' }}
            fontWeight="extrabold"
            bgGradient="linear-gradient(90deg, rgba(97,12,79,1) 7%, rgba(255,255,255,1) 100%)"
            bgClip="text"
          >
            Full Stack Developer + Software Engineer
          </Text>
          <Text fontSize="lg" maxW="lg" textAlign="left">
            I design and develop innovative software solutions that tackle complex challenges and enhance user experiences. My expertise lies in creating scalable, maintainable, and high-performance applications.
          </Text>
          <HStack spacing={6} pt={8} align="center">
            <Button
              variant="outline"
              leftIcon={<FaDownload />}
              rounded="full"
              color={'gray.100'}
              size="lg"
              px={8}
              bgGradient="linear(to-r, #3b0b3b, purple.900)"
              _hover={{
                bgGradient: "linear(to-r, #3b0b3b, purple.900)",
                boxShadow: "0px 0px 20px rgba(128, 0, 128, 0.7)",
                transform: "scale(1.05)",
              }}
              transition="all 0.3s ease"
            >
              Download CV
            </Button>
            <HStack spacing={4}>
              <IconButton
                as={Link}
                href="https://github.com/Mirzaarri"
                aria-label="GitHub"
                icon={<FaGithub />}
                isRound
                size="lg"
                variant="outline"
                borderColor="gray.600"
                color="white"
                _hover={{ bg: 'gray.600' }}
              />
              <IconButton
                as={Link}
                href="https://www.linkedin.com/in/arsalan-tahir0553"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                isRound
                size="lg"
                variant="outline"
                borderColor="blue.600"
                color="white"
                _hover={{ bg: 'blue.600' }}
              />
              <IconButton
                as={Link}
                href="#"
                aria-label="Instagram"
                icon={<FaInstagram />}
                isRound
                size="lg"
                variant="outline"
                borderColor="red.700"
                color="white"
                _hover={{ bg: 'red.700' }}
              />
              <IconButton
                as={Link}
                href="#"
                aria-label="Facebook"
                icon={<FaFacebook />}
                isRound
                size="lg"
                variant="outline"
                borderColor="blue.400"
                color="white"
                _hover={{ bg: 'blue.400' }}
              />
            </HStack>
          </HStack>
        </VStack>

        <Box  ml={{ base: 0, md: 12 }} mt={{ base: 12, md: 0 }}>
          <Img
            src={heroImage}
            alt="Hero Image"
            maxW="100%"
            maxH={'600px'}
            borderRadius="lg"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
