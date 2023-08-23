import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ian Kiithya",
  description: "A Professional Makeup Artist Breaking the Norms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
