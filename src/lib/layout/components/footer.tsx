import { Flex, Link, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link
          href="https://iamzayano.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          iamzayano.vercel.app
        </Link>
      </Text>
    </Flex>
  );
};
