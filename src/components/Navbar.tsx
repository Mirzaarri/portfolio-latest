import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Text,
  Img,
} from '@chakra-ui/react';
import logoImage from '../assets/logo.svg';

const Navbar: React.FC = () => {
  return (
    <Box bg={'transparent'} px={24} py={8}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Box>
            <Img src={logoImage} w={20} h={20} />
          </Box>
          <Text fontSize="lg" fontWeight="semibold" color="white">
            arslantahir0553@gmail.com
          </Text>
        </HStack>
        <HStack
          as="nav"
          spacing={4}
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          fontSize={'lg'}
          fontWeight={'semibold'}
          color="white"
        >
          {['Home', 'About', 'Services', 'Portfolios', 'Contact'].map((item) => (
            <Link
              key={item}
              px={2}
              py={1}
              rounded="md"
              href="#"
              color="white"
              position="relative"
             
              _before={{
                content: `""`,
                position: 'absolute',
                width: '0',
                height: '2px',
                bottom: '0',
                left: '2',
                bgGradient: 'linear-gradient(90deg, rgba(97,12,79,1) 7%, rgba(255,255,255,1) 100%)',
                visibility: 'hidden',
                transition: 'all 0.5s ease-in-out',
              }}
              _hover={{
                _before: {
                  visibility: 'visible',
                  width: '80%',
                },
              }}
            >
              {item}
            </Link>
          ))}
          <Button
            px={8}
            py={6}
            rounded="full"
            color="white"
            fontSize="lg"
            bgGradient="linear(to-r, #3b0b3b, purple.900)"
            _hover={{
              bgGradient: "linear(to-r, #3b0b3b, purple.900)",
              boxShadow: "0px 0px 20px rgba(128, 0, 128, 0.7)",
              transform: "scale(1.05)",
            }}
            transition="all 0.3s ease"
          >
            Hire Me
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
