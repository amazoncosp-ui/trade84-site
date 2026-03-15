import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trade84 – Trusted P2P Trading",
  description: "Fast, reliable direct P2P trading. Contact Trade84 via Telegram or WhatsApp for the best rates on PayPal, Revolut, Wise, SEPA, and 15+ payment methods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
