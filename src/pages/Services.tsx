import { Box, Flex, Text, Icon, Divider } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import { motion, useAnimation } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'

const Services: React.FC = () => {
  const [highlighted, setHighlighted] = useState(1);
  const controls = useAnimation();
  const servicesRef = useRef(null);

  const services = [
    { 
      id: 1, 
      name: 'Full Stack Development', 
      description: 'End-to-end web application development using the MERN stack, covering everything from the frontend with React.js to the backend with Node.js and Express.js, including MongoDB for data management.' 
    },
    { 
      id: 2, 
      name: 'Frontend Development', 
      description: 'Designing and implementing responsive and modern user interfaces with React.js, ensuring a seamless and engaging user experience across devices and browsers.' 
    },
    { 
      id: 3, 
      name: 'Backend Development', 
      description: 'Building robust backend services with Node.js and Express.js, including API development, database management, and server-side logic to support your application’s functionality.' 
    },
    { 
      id: 4, 
      name: 'API Integration', 
      description: 'Integrating third-party APIs to extend your application’s capabilities, including payment systems, data services, and other external functionalities to enhance user experience and application features.' 
    },
  ];
  


  // Animation variant for slow reveal on scroll
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
          }
        });
      },
      { threshold: 0.5 } // Trigger when 10% of the section is visible
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, [controls]);

  return (
    <Box pt={16} pb={24}  bg={'black'} ref={servicesRef}>
      <Box>
        <Text 
          bgGradient="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(97,12,79,1) 87%)"
          bgClip="text" 
          textAlign={'center'} 
          fontSize={'5xl'} 
          fontWeight={'bold'}
        >
          My Quality Services
        </Text>
        <Text py={1} textAlign={'center'} fontSize={'lg'} color={'gray.200'}>
          We put your ideas and thus your wishes in the form of a unique web project that 
          <br/> 
          inspires you and your customers.
        </Text>
      </Box>
      <Box maxW="6xl" mx="auto" mt={8}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {services.map(service => (
            <motion.div key={service.id} variants={itemVariants}>
              <Flex 
                align="center" 
                justify="space-between" 
                py={8} 
                px={8}
                bgGradient={highlighted === service.id ? 'linear(to-r, #1a1a2e, #3b0b3b)' : 'gray.800'}
                transition="all 0.5s ease-in-out"
                _hover={{ 
                  bgGradient: 'linear(to-r, #1a1a2e, #3b0b3b)', 
                  cursor: 'pointer' 
                }}
                onMouseEnter={() => setHighlighted(service.id)}
              >
                <Text color={'gray.200'} fontWeight={'bold'} fontSize="3xl" w="5%">{service.id}</Text>
                
                <Text color={'gray.100'} fontSize="3xl" fontWeight={'extrabold'} w="50%">{service.name}</Text>
                <Text color={'gray.300'} fontSize="lg" w="55%">{service.description}</Text>
                <Icon 
                  as={FaArrowRight} 
                  color={highlighted === service.id ? 'white' : '#a61988'} 
                  boxSize={7} 
                  transform={highlighted === service.id ? 'rotate(-45deg)' : 'rotate(0deg)'}
                  transition="transform 0.5s"
                  _hover={{ transform: 'rotate(-45deg)' }}
                  w="10%"
                />
              </Flex>
              <Divider bgGradient='linear(to-r, #1a1a2e, #3b0b3b)'/>
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </Box>
  )
}

export default Services
