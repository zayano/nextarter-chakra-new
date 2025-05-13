import { useEffect, useState } from 'react';
import { ColorModeButton, useColorModeValue } from '@/components/ui/color-mode';
import {
  Box,
  Flex,
  Icon,
  Link,
  Text,
  Heading,
  HStack,
  Spacer,
  Button,
  Image,
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import NextLink from 'next/link';

export const Header = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Define the colors first to ensure they are computed before the conditional render
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const headingColor = useColorModeValue('teal.600', 'teal.200');
  const hoverBg = useColorModeValue('teal.200', 'teal.600');

  if (!hasMounted) return null; // Only render after mounting

  return (
    <Flex
      as="header"
      width="full"
      align="center"
      paddingX={6}
      paddingY={4}
      bg={bgColor}
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Heading size="md">
        <Link
          as={NextLink}
          href="/"
          _hover={{ textDecoration: 'none' }}
          display="inline-block"
        >
          <Image
            src="/vercel.svg"
            alt="MyApp Logo"
            height="30px"
            width="auto"
            objectFit="contain"
          />
        </Link>
      </Heading>

      <Spacer />

      <HStack gap={4}>
        <Button variant="ghost" _hover={{ bg: hoverBg }}>
          Home
        </Button>
        <Button variant="ghost" _hover={{ bg: hoverBg }}>
          About
        </Button>
        <Button variant="ghost" _hover={{ bg: hoverBg }}>
          Contact
        </Button>
      </HStack>

      <Spacer />

      <HStack gap={4}>
        <ColorModeButton _hover={{ bg: hoverBg }} />
      </HStack>
    </Flex>
  );
};
