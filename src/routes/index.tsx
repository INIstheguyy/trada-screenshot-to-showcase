import { createFileRoute } from "@tanstack/react-router";
import { Categories } from "@/components/trada/Categories";
import { Challenges } from "@/components/trada/Challenges";
import { Demos } from "@/components/trada/Demos";
import { Faqs } from "@/components/trada/Faqs";
import { FinalCta } from "@/components/trada/FinalCta";
import { Footer } from "@/components/trada/Footer";
import { Header } from "@/components/trada/Header";
import { Hero } from "@/components/trada/Hero";
import { HowItWorks } from "@/components/trada/HowItWorks";
import { Pricing } from "@/components/trada/Pricing";
import { Value } from "@/components/trada/Value";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trada — Run Your Business Smarter | Sales, Stock & Profit" },
      {
        name: "description",
        content:
          "Trada helps Nigerian business owners record sales, manage stock and know their profit. Just speak, snap or type.",
      },
      { property: "og:title", content: "Trada — Run Your Business Smarter" },
      {
        property: "og:description",
        content:
          "Record sales, manage stock and know your profit effortlessly. Just speak, snap or type.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Challenges />
        <Value />
        <Demos />
        <Categories />
        <HowItWorks />
        <Pricing />
        <Faqs />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
