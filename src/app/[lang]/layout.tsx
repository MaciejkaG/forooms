import type { Metadata } from 'next';
import { Outfit, Noto_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-outfit',
});

const notoSans = Noto_Sans({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-noto-sans',
})

export const metadata: Metadata = {
  title: 'Forooms',
  description: 'A safe and intuitive community space for students.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}