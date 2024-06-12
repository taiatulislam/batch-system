import "./globals.css";
import localFont from 'next/font/local'

const myFont = localFont({
  src : '../fonts/ClashDisplay-Variable.ttf',
  display: 'swap'
})

export const metadata = {
  title: "uifry",
  description: "Created by taiatulIslam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
