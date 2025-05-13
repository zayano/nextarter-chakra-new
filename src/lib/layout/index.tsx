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
      width="100vw"
      height="100vh"
      margin="0"
      padding="0"
      transition="0.5s ease-out"
    >
      <Header />
      <Box as="main" marginY={22}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
