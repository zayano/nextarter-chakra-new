'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Page404 } from '../pages/404';

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
        <ErrorBoundary errorComponent={Page404}>{children}</ErrorBoundary>
      </Box>
      <Footer />
    </Box>
  );
};
