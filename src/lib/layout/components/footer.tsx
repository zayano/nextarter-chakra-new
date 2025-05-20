import { useEffect, useState } from 'react';
import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { useColorModeValue } from '@/components/ui/color-mode';

export const Footer = () => {
  const [hasMounted, setHasMounted] = useState(false);

  // Panggil SEMUA hooks sebelum kondisi
  const bgColor = useColorModeValue('footerBgLight', 'footerBgDark');
  const textColor = useColorModeValue('footerTextLight', 'footerTextDark');
  const textHoverColor = useColorModeValue(
    'footerTextHoverLight',
    'footerTextHoverDark'
  );
  const footerNoteColor = useColorModeValue('gray.500', 'gray.500');

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <Box as="footer" width="full" bg={bgColor} color={textColor} py={6} px={4}>
      <Flex justify="center" align="center" direction="column" gap={2}>
        <Text fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} — Built with{' '}
          <Icon as={FaHeart} color="red.400" mx={1} /> by{' '}
          <Link
            href="https://iamzayano.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            fontWeight="semibold"
            color={textHoverColor}
            _hover={{ textDecoration: 'underline' }}
          >
            iamzayano.vercel.app
          </Link>
        </Text>
        <Text fontSize="xs" color={footerNoteColor}>
          All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};
