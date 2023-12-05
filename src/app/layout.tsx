import "~/styles/globals.css";

import { Inter, Montserrat } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "GroVr | User testing platform",
  description:
    "Grovr is a community-led product testing platform that provides survey, focus group, and testing+feedback services. Our innovative approach to product testing empowers real users and UX experts to provide valuable insights and feedback, helping our clients to create products that meet the needs of their users. Revolutionize the way your products are tested with Grovr.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    images: ["https://grovrtesting.com/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${montserrat.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
