import { useEffect, useState } from 'react';
import { ColorModeButton, useColorModeValue } from '@/components/ui/color-mode';
import { Flex, Link, Heading, HStack, Image } from '@chakra-ui/react';

export const Header = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Define the colors first to ensure they are computed before the conditional render
  const bgColor = useColorModeValue('primaryLight', 'primaryDark');

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
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
      </HStack>

      <HStack gap={4}>
        <ColorModeButton />
      </HStack>
    </Flex>
  );
};
