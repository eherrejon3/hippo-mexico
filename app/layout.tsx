import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Header } from "@/components/block/header";
import { Footer } from "@/components/block/footer";
import { BgSceneAnimation } from "@/components/animation";

import { ThemeProvider } from "@/components/theme-provider";

const fontSerif = EB_Garamond({
    variable: "--font-serif",
});

const fontSans = Inter({
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: {
        template: "Hippo Mexico",
        default: "Hippo Mexico",
    },
    description: "Hi, i'm Fachri Riyanto, Full-Stack Developer who love to build products using modern technologies, and AI vibe code.",
    robots: "index, follow",
    alternates: {
        canonical: "https://friyanto.vercel.app",
    },
    openGraph: {
        title: "Hippo Mexico",
        description: "Hi, i'm Fachri Riyanto, Full-Stack Developer who love to build products using modern technologies, and AI vibe code.",
        url: "https://friyanto.vercel.app",
        siteName: "Hippo Mexico",
        type: "website",
        locale: "en-ID",
        images: [
            {
                url: "https://friyanto.vercel.app/favicon-270x270.png",
                width: 270,
                height: 270,
                alt: "Hippo Mexico",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon-180x180.png" sizes="180x180" />
            </head>
            <body className={`${fontSerif.variable} ${fontSans.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                    >
                    <Header/>
                    {children}
                    <Footer />
                    <BgSceneAnimation />
                </ThemeProvider>
                <Script
                    async
                    id="genaiva-embed-script"
                    src="https://ai.mataparser.cloud/widget/chat/embed.min.js"
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                    data-app-id="430c4a0c-de04-4c3d-b178-a59d86cf6d1b"
                    data-user-id=""
                ></Script>
            </body>
            <GoogleAnalytics gaId="G-1XTC88KYJZ" />
        </html>
    );
}