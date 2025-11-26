
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata = {
  title: "Bangla Bazar",
  description: "E-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen container mx-auto py-10"
      >  <Navbar></Navbar>
         <main className="min-h-screen container mx-auto py-10">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
