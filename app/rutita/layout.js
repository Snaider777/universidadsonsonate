export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <p>Hola soy el texto arriba de ramita</p>
      </header>
      <body>
        {children}
      </body>
    </html>
  );
}
