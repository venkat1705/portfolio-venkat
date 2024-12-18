import "./globals.css";
import localFont from "next/font/local";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navigation/navbar";

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Venkat M",
  description: "Portfolio by venkat M",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div
            className="absolute inset-0 h-full bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] 
  bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)]"
          />
          <Navbar /> */}
          <div className="lg:px-28 px-4 py-6 max-w-screen-2xl relative z-50">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
