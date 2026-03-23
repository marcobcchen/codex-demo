import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'codex-demo',
  description: 'A freshly scaffolded Next.js app named codex-demo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
