import Footer from "@/components/Footer";
import Link from "next/link";
import "./globals.css";
import "./reset.css"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kevin Brummer | Software Engineer",
  description: "Portfolio Website for Kevin Brummer.",
  viewport: "width=device-width, initial-scale=1.0",
  keywords: [
    "Kevin Brummer",
    "Software",
    "Engineer",
    "Japan",
    "Osaka",
    "UMN",
    "University of Minnesota",
    "Computer Science",
    "Portfolio",
    "Cherry Blossoms",
    "AWS",
    "React",
    "Next",
    "Ruby",
    "Rails",
  ],
  openGraph: {
    type: "website",
    url: "https://www.kevinbrummer.com",
    title: "Kevin Brummer | Software Engineer",
    description: "Portfolio Website for Kevin Brummer.",
    siteName: "Kevin Brummer Portfolio",
    images: [
      {
        url: "https://www.kevinbrummer.com/kevin_brummer_portfolio_og.jpg",
      },
    ],
  },
  authors: [{ name: "Kevin Brummer" }],
};

export default function NotFound() {
  return (
    <>
      <header className="header">
        <nav className="header__links">
          <Link tabIndex={0} href="/">
            Kevin Brummer <br /> Software Engineer
          </Link>
        </nav>
      </header>
      <main className="error">
        <div>
          <h1>
            404 <br /> Page Not Found
          </h1>
          <Link className="home-link" href={"/"}>
            Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
