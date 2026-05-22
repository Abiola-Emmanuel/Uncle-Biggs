import "./globals.css";

export const metadata = {
  title: "Uncle Biggs",
  description: "A warm restaurant website for Uncle Biggs, serving bold comfort food, family meals, and everyday favorites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
