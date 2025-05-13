import { useEffect, useState } from 'react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

export const Footer = () => {
  // Pastikan hooks didefinisikan di atas, di luar kondisi
  const [hasMounted, setHasMounted] = useState(false);

  // Menentukan warna berdasarkan mode
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const hoverColor = useColorModeValue('teal.600', 'teal.300');

  // Menunggu hingga komponen mount
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render kosong jika belum mounted
  if (!hasMounted) return null;

  return (
    <Box as="footer" width="full" bg={bgColor} color={textColor} py={6} px={4}>
      <Flex justify="center" align="center" direction="column" gap={2}>
        <Text fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} — Built with{' '}
          <Icon as={FaHeart} color="red.400" mx={1} /> by{' '}
          <Link
            href="https://agustinusnathaniel.com"
            target="_blank"
            rel="noopener noreferrer"
            fontWeight="semibold"
            color={useColorModeValue('teal.600', 'teal.300')}
            _hover={{ textDecoration: 'underline' }}
          >
            agustinusnathaniel.com
          </Link>
        </Text>
        <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.500')}>
          All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};
