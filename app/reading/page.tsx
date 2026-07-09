import { Metadata } from "next";
import { Fraunces } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ReadingContent from "@/components/ReadingContent";

export const metadata: Metadata = {
  title: "Reading — Muhammad Abdullah Nadeem",
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export default function ReadingPage() {
  return (
    <div className={`${fraunces.variable} font-sans`}>
      <Nav />
      <ReadingContent />
      <Footer />
    </div>
  );
}
