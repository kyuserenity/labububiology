import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const prompt = Prompt({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digestive system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={cn("antialiased select-none", prompt.className)}>
        <header className="bg-background sticky top-0 z-30 flex items-center justify-center p-6">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">Digestive system</p>
          </div>
        </header>
        <main className="mx-auto mb-24 max-w-lg px-6">{children}</main>
      </body>
    </html>
  );
}
