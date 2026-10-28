import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
// import { Providers } from "@/providers/Providers";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Codly",
        template: "%s | Codly",
    },
    description:
        "Aprenda programação de forma prática e divertida, com lições curtas, desafios, XP e sequência diária.",
    applicationName: "Codly",
    manifest: "/manifest.webmanifest",
    keywords: [
        "programação",
        "aprender a programar",
        "gamificação",
        "cursos de programação",
        "Codly",
    ],
    authors: [{ name: "Codly Tecnologia Educacional" }],
    appleWebApp: {
        capable: true,
        title: "Codly",
        statusBarStyle: "black-translucent",
    },
    formatDetection: { telephone: false },
    openGraph: {
        type: "website",
        siteName: "Codly",
        title: "Codly",
        description: "Aprenda. Pratique. Evolua.",
        locale: "pt_BR",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#f8f7ff" },
        { media: "(prefers-color-scheme: dark)", color: "#0f0b1a" },
    ],
};
export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="pt-BR" suppressHydrationWarning className={`${poppins.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
