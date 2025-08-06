import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TugasHero | Jasa Joki Tugas Cepat & Terpercaya',
  description: 'Butuh bantuan mengerjakan tugas sekolah atau kuliah? TugasHero siap membantu Anda dengan cepat, profesional, dan hasil memuaskan. Hubungi kami via WhatsApp!',
  keywords: ['joki tugas', 'bantuan tugas', 'jasa tugas kuliah', 'tugas sekolah', 'tugashero'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
