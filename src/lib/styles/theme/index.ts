import { createSystem, defaultConfig } from '@chakra-ui/react';

import { fonts } from './fonts';

const customTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts,
      colors: {
        // === Brand Primary (Blue tones) ===
        primary: { value: '#1E90FF' }, // Dodger Blue
        primaryDark: { value: '#1A73E8' }, // Google-style Blue
        primaryLight: { value: '#B3D4FC' }, // Light Blue

        // === Secondary (Orange tones) ===
        secondary: { value: '#F97316' }, // Orange-500
        secondaryDark: { value: '#EA580C' },
        secondaryLight: { value: '#FDBA74' },

        // === Accent (Pink tones) ===
        accent: { value: '#EC4899' }, // Pink-500
        accentDark: { value: '#DB2777' },
        accentLight: { value: '#F9A8D4' },

        // === Backgrounds ===
        background: { value: '#F9FAFB' }, // Gray-50
        backgroundLight: { value: '#FFFFFF' },
        backgroundDark: { value: '#1F2937' }, // Slate-800

        // === Text ===
        text: { value: '#1F2937' }, // Slate-800
        textDark: { value: '#E5E7EB' }, // Gray-200
        textLight: { value: '#FFFFFF' },

        // === Header Colors ===
        headerBgLight: { value: '#1E90FF' },
        headerTextLight: { value: '#FFFFFF' },
        headerTextHoverLight: { value: '#E0F2FF' }, // Biru muda terang untuk hover

        headerBgDark: { value: '#111827' },
        headerTextDark: { value: '#E5E7EB' },
        headerTextHoverDark: { value: '#90CDF4' }, // Light blue untuk dark mode hover

        // === Footer Colors ===
        footerBgLight: { value: '#F1F5F9' },
        footerTextLight: { value: '#1F2937' },
        footerTextHoverLight: { value: '#2563EB' }, // Blue-600 saat hover

        footerBgDark: { value: '#1F2937' },
        footerTextDark: { value: '#E5E7EB' },
        footerTextHoverDark: { value: '#93C5FD' }, // Blue-300 saat hover
      },
    },
  },
});

export default customTheme;
