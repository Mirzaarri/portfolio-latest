import { Box, Text, Divider, SimpleGrid, Image, Link, Flex } from '@chakra-ui/react';
import React from 'react';

const RecentWorks: React.FC = () => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'Project A',
      description: 'A full-stack web application built with the MERN stack, providing a seamless user experience with robust backend services.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      id: 2,
      title: 'Project B',
      description: 'A dynamic frontend application developed with React.js, featuring responsive design and modern UI/UX.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      id: 3,
      title: 'Project C',
      description: 'API integration project that enhances application capabilities by connecting with third-party services.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '#',
    },
  ];

  return (
    <Box py={12} px={20} bgGradient={'linear-gradient(90deg, rgba(19,19,34,1) 0%, rgba(31,6,31,1) 100%)'}>
      <Box mb={8}>
        <Text
         bgGradient="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(97,12,79,1) 87%)"
            bgClip="text"
          textAlign={'center'}
          fontSize={'5xl'}
          fontWeight={'bold'}

        >
          My Recent Works
        </Text>
        <Flex alignContent={'center'} justifyContent={'center'}>
        <Text py={2} maxW={'60%'} textAlign={'center'} fontSize={'lg'}  color={'gray.200'}>
          A showcase of my recent projects that highlight my expertise in full-stack development, frontend engineering, and API integration. 
        </Text>
        </Flex>
        <Divider mt={4} borderColor="gray.600" />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mx="auto" maxW="7xl">
        {projects.map((project) => (
          <Box key={project.id} bg="gray.800" borderRadius="md" overflow="hidden" boxShadow="lg">
            <Image src={project.imageUrl} alt={project.title} />
            <Box p={6}>
              <Text fontSize="2xl" fontWeight="bold" color="white" mb={2}>
                {project.title}
              </Text>
              <Text fontSize="md" color="gray.300" mb={4}>
                {project.description}
              </Text>
              <Link href={project.link} color="teal.400" fontWeight="bold" textDecoration="underline">
                View Project
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RecentWorks;
