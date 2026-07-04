import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export default function ReadingPage() {
  return (
    <div className={`${fraunces.variable} font-serif min-h-screen bg-background`}>
      {/* TODO: Reading page content */}
    </div>
  );
}
