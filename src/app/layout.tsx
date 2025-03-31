import type { Metadata } from "next";
import "@/styles/reset.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Movie List",
  description: "Movie List App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <header>
          <ol>
            <li><a href="/home">Home</a></li>
            <li><a href="/movie">Movie</a></li>
          </ol>
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
