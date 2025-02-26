import "@/styles/globals.css";
import Navbar from "@/Components/Global/NavBar";
import SubNavBar from "@/Components/Global/SubNavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body id="__next">
        <Navbar />
        <SubNavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}