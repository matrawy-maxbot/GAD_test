import localFont from "next/font/local";
import "./globals.css";
import "./home.css"

export const metadata = {
  title: "GAD | Growth And Development",
  description: "GAD - Growth And Development: Expert design, web development, and printing services to empower your business. Let us help you grow and achieve success through creative and innovative solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
