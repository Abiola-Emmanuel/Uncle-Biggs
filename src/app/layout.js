import "./globals.css";

export const metadata = {
  title: "Luxe Dining",
  description: "A refined restaurant homepage for Luxe Dining.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
