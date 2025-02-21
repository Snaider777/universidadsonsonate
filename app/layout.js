import "@/styles/globals.css";
import Navbar from "@/Components/NavBar";
import SubNavBar from "@/Components/SubNavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <SubNavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}