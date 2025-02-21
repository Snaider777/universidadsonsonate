import "../globals.css";
import Navbar from "@/Components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}