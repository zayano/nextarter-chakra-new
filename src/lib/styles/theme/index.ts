import { createSystem, defaultConfig } from '@chakra-ui/react';

import { fonts } from './fonts';

const customTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts,
      colors: {
        primaryDark: {
          value: '#1C86EE',
        },
        primaryLight: {
          value: '#87CEFA',
        },
        primary: {
          value: '#1E90FF',
        },
        secondaryDark: {
          value: '#FF4500',
        },
        secondaryLight: {
          value: '#FF7F50',
        },
        secondary: {
          value: '#FF6347',
        },
        background: {
          value: '#F0F0F0',
        },
        backgroundDark: {
          value: '#2F4F4F',
        },
        backgroundLight: {
          value: '#FFFFFF',
        },
        text: {
          value: '#333333',
        },
        textLight: {
          value: '#FFFFFF',
        },
        textDark: {
          value: '#000000',
        },
      },
    },
  },
});

export default customTheme;
