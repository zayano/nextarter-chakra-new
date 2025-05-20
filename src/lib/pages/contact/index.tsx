'use client';

import { useColorModeValue } from '@/components/ui/color-mode';
import {
  Flex,
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export const Contact = () => {
  const bg = useColorModeValue('background', 'backgroundDark');
  const boxBg = useColorModeValue('secondaryLight', 'secondaryDark');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Only render after mounting

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      gap={6}
      w="full"
      px={6}
      py={12}
      bg={bg}
      borderRadius="2xl"
      boxShadow="md"
    >
      <Heading size="xl" mb={2}>
        Lets Get in Touch!
      </Heading>
      <Text
        fontSize="md"
        color="gray.600"
        mb={6}
        textAlign="center"
        maxW="600px"
      >
        Have questions, ideas, or just want to say hello? We love to hear from
        you.
      </Text>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        gap={10}
        w="full"
        maxW="1000px"
      >
        {/* Contact Info */}
        <Box flex="1" bg={boxBg} p={6} borderRadius="lg" shadow="md">
          <Stack gap={4}>
            <Flex align="center" gap={2}>
              <Icon as={MdEmail} boxSize={5} color="primary.500" />
              <Text>Email: hello@example.com</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Icon as={MdPhone} boxSize={5} color="primary.500" />
              <Text>Phone: +62 812 3456 7890</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Icon as={MdLocationOn} boxSize={5} color="primary.500" />
              <Text>Bandung, Indonesia</Text>
            </Flex>
          </Stack>
        </Box>

        {/* Contact Form */}
        <Box flex="1" bg={boxBg} p={6} borderRadius="lg" shadow="md">
          <Stack gap={4}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Textarea placeholder="Your Message" rows={4} />
            <Button colorScheme="blue" borderRadius="full">
              Send Message ✉️
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
