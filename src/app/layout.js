import localFont from "next/font/local";
import "./globals.css";


const lato = localFont({
  src: "./fonts/Lato-Regular.ttf",
  variable: "--font-lato",
  weight: "100 900",
});

const catchy = localFont({
  src: "./fonts/CatchyMager.otf",
  variable: "--font-catchy",
  weight: "100 900",
});

const hangy = localFont({
  src: "./fonts/Hangyaboly.ttf",
  variable: "--font-hangy",
  weight: "100 900",
});

export const metadata = {
  title: "Lolita",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${catchy.variable}  ${hangy.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
