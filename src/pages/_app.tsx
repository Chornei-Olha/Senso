// src/pages/_app.tsx
import '@/styles/tailwind.css'; // Подключение Tailwind
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
