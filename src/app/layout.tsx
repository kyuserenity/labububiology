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
  title: "สาระมีอยู่จริง",
  description: "เว็บไซต์ที่รวบรวมสาระความรู้ต่างๆ ที่คุณอาจไม่เคยรู้มาก่อน",
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
            <p className="text-2xl font-bold">สาระมีอยู่จริง</p>
          </div>
        </header>
        <main className="mx-auto mb-6 max-w-lg px-6">{children}</main>
      </body>
    </html>
  );
}
