import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PalSense - Accueil",
  description: "Plateforme de surveillance et prévention du paludisme au Sénégal",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

