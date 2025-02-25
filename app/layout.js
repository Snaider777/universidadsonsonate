import "@/styles/globals.css";
import Navbar from "@/Components/Global/NavBar";
import SubNavBar from "@/Components/Global/SubNavBar";

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