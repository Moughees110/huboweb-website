import './globals.css'; // :white_check_mark: This line is REQUIRED
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'My App',
  description: 'My description',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}