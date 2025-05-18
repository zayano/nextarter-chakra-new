'use client';

import { useColorModeValue } from '@/components/ui/color-mode';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const MotionBox = motion(Box);

  const bg = useColorModeValue('background', 'backgroundDark');
  const primary = useColorModeValue('primaryLight', 'primaryDark');
  const secondary = useColorModeValue('secondaryLight', 'secondaryDark');
  const accent = useColorModeValue('accent', 'accentDark');
  const text = useColorModeValue('textDark', 'textLight');

  if (!hasMounted) return null; // Only render after mounting

  return (
    <Flex
      direction={{ base: 'column-reverse', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      gap={12}
      w="full"
      px={6}
      bg={bg}
      boxShadow="xl"
    >
      {/* Ilustrasi */}
      <MotionBox
        flex="1"
        maxW="360px"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <Image
          src="/fun-illustration.svg"
          alt="Fun illustration"
          objectFit="contain"
          w="100%"
          h="auto"
        />
      </MotionBox>

      {/* Teks */}
      <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
        <Heading size="xl" color={primary} mb={4}>
          Who Are We?
        </Heading>
        <Text fontSize="lg" color={secondary} mb={6} maxW="500px" mx="auto">
          We love building fun, fast, and friendly web apps! With colorful
          design and smooth performance, our goal is to bring joy to every
          interaction.
        </Text>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          gap={4}
          justify={{ base: 'center', md: 'flex-start' }}
        >
          <Button
            size="md"
            bg={primary}
            color={text}
            _hover={{ bg: accent }}
            borderRadius="full"
            px={6}
          >
            Say Hello 👋
          </Button>
          <Button
            size="md"
            bg={secondary}
            color={text}
            _hover={{ bg: accent }}
            variant="outline"
            borderRadius="full"
            px={6}
          >
            Our Story 💡
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};
