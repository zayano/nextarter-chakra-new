'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { Footer } from './components/footer';
import { Header } from './components/header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      transition="0.5s ease-out"
    >
      <Header />
      <Box as="main" flex="1">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
