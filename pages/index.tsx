import { Cairo } from "next/font/google";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { OrganizationStructure } from "@/components/OrganizationStructure";
import { News } from "@/components/News";
import { Activities } from "@/components/Activities";
import { Map } from "@/components/Map";
import { WhatsappButton } from "@/components/WhatsappButton";
import { Footer } from "@/components/Footer";
import { FacebookIcon } from "@/components/FacebookIcon";
import { Grades } from "@/components/Grades";

const cairo = Cairo({
  weight: ["1000", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic"],
  fallback: ["sans-serif"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={cairo.className}>
      <Header />
      <Hero />
      <About />
      <OrganizationStructure />
      <Grades />
      <News />
      <Activities />
      <Map />
      <FacebookIcon />
      <WhatsappButton />
      <Footer />
    </main>
  );
}
