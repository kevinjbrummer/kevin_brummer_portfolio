import "../reset.css";
import "../globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

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

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return ["en", "ja"].map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
