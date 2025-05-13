import { ColorModeButton, useColorModeValue } from '@/components/ui/color-mode';
import { Button, Flex, Heading, HStack, Link, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      paddingX={6}
      paddingY={4}
      bg={useColorModeValue('gray.100', 'gray.900')}
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Heading size="md">
        <Link
          as={NextLink}
          href="/"
          color={useColorModeValue('teal.600', 'teal.200')}
          _hover={{ textDecoration: 'none' }}
        >
          MyApp
        </Link>
      </Heading>

      <Spacer />

      <HStack gap={4}>
        <Button
          variant="ghost"
          _hover={{ bg: 'teal.200', _dark: { bg: 'teal.600' } }}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          _hover={{ bg: useColorModeValue('teal.200', 'teal.600') }}
        >
          About
        </Button>
        <Button
          variant="ghost"
          _hover={{ bg: useColorModeValue('teal.200', 'teal.600') }}
        >
          Contact
        </Button>
      </HStack>

      <Spacer />

      <HStack gap={4}>
        <ColorModeButton
          _hover={{ bg: useColorModeValue('teal.200', 'teal.600') }}
        />
      </HStack>
    </Flex>
  );
};
