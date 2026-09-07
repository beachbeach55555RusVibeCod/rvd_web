import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "РВД Казань — Рукава высокого давления в Казани и Альметьевске",
  description:
    "Производство и продажа рукавов высокого давления в Казани и Альметьевске. Изготовление РВД на заказ, быстро и с гарантией.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
