import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Senso',
  description:
    'TM SENSO – un marchio di nastri da mascheratura di alta qualità, prodotto in Italia da PPM INDUSTRIES SpA',
  // icons: {
  //   icon: [{ url: '/favicon.png', type: 'image/png' }],
  // },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
