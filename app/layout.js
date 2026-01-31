import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../context/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-main',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata = {
  title: 'Wonderful Onwuchekwa | Product Manager',
  description: 'Shipping products users love and businesses need proven across logistics, fintech, and SaaS with measurable impact.',
  icons: {
    icon: '/favicon.ico', // Explicitly points to public/favicon.ico
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
