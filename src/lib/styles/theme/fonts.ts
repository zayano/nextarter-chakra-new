import { Poppins as FontBody } from 'next/font/google';

export const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

export const fonts = {
  heading: { value: fontBody.style.fontFamily },
  body: { value: fontBody.style.fontFamily },
};
