import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Playfair_Display, DM_Serif_Display } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
    variable: "--font-dm-serif-display",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Be Curly",
    description: "Especialistas en Rizos",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={`w-screen h-screen ${playfairDisplay.variable} ${dmSerifDisplay.variable} antialiased`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
