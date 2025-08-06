import type {Metadata} from 'next';
import './globals.css';

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
