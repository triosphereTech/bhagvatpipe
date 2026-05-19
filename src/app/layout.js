import "./globals.css";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";

export const metadata = {
  metadataBase: new URL("https://www.bhagvatpipe.com"),

  title: {
    default:
      "Bhagvat Pipe | Premium CPVC, UPVC & SWR Pipes Manufacturer in Ahmedabad",
    template: "%s | Bhagvat Pipe",
  },

  description:
    "Bhagvat Pipe is a trusted manufacturer and supplier of premium CPVC, UPVC & SWR pipes and fittings in Ahmedabad, Gujarat. Durable, leak-proof and high-performance plumbing solutions for residential, commercial and industrial projects.",

  keywords: [
    "Bhagvat Pipe",
    "CPVC Pipes",
    "UPVC Pipes",
    "SWR Pipes",
    "Pipe Manufacturer Ahmedabad",
    "Pipe Fittings Gujarat",
    "PVC Pipes",
    "Industrial Plumbing Solutions",
    "Bathroom Plumbing Pipes",
    "Water Pipe Manufacturer",
  ],

  authors: [{ name: "Bhagvat Pipe" }],
  creator: "Bhagvat Pipe",
  publisher: "Bhagvat Pipe",

  openGraph: {
    title:
      "Bhagvat Pipe | Premium CPVC, UPVC & SWR Pipes Manufacturer",
    description:
      "Trusted manufacturer and supplier of premium CPVC, UPVC & SWR pipes and fittings in Ahmedabad, Gujarat.",
    url: "https://www.bhagvatpipe.com",
    siteName: "Bhagvat Pipe",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Bhagvat Pipe Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Bhagvat Pipe | Premium CPVC, UPVC & SWR Pipes Manufacturer",
    description:
      "High-quality CPVC, UPVC & SWR pipes and fittings manufacturer based in Ahmedabad.",
    images: ["/android-chrome-512x512.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
  },

  category: "Manufacturing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#8a29660e]">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}