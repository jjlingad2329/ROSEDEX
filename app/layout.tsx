import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Dexter & Rosemarie · October 3, 2026", description: "Join Dexter and Rosemarie as they begin their journey together.", icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
