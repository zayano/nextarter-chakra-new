import { useEffect, useState } from 'react';
import { ColorModeButton, useColorModeValue } from '@/components/ui/color-mode';
import { Flex, Link, Heading, HStack, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Header = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Define the colors first to ensure they are computed before the conditional render
  const bgColor = useColorModeValue('gray.100', 'gray.900');
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
      justify={'space-between'}
    >
      <Heading size="md">
        <Link
          as={NextLink}
          href="/"
          _hover={{ textDecoration: 'none' }}
          display="inline-block"
        >
          <Image
            src="/zayano.png"
            alt="MyApp Logo"
            height="30px"
            width="auto"
            objectFit="contain"
          />
        </Link>
      </Heading>

      <HStack justify={'space-between'} gap={20}>
        <Link href={'/'} _hover={{ bg: hoverBg }}>
          Home
        </Link>
        <Link href={'/about'} _hover={{ bg: hoverBg }}>
          About
        </Link>
        <Link href={'/contact'} _hover={{ bg: hoverBg }}>
          Contact
        </Link>
      </HStack>

      <HStack gap={4}>
        <ColorModeButton _hover={{ bg: hoverBg }} />
      </HStack>
    </Flex>
  );
};
