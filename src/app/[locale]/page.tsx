"use client";
import DateListEntry from "@/components/DateListEntry";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import List from "@/components/List";
import Parallax from "@/components/Parallax";
import Section from "@/components/Section";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const certs = useTranslations("Certifications");

  return (
    <>
      <Parallax />
      <Header />
      <main>
        <Section title="about">About Section</Section>
        <Section title="work">Work Section</Section>
        <Section title="certification">
          <List>
            <DateListEntry
              month="oct"
              year="2023"
              content={certs("awsSolutions.name")}
              link={certs("awsSolutions.link")}
            />
            <DateListEntry
              month="sep"
              year="2023"
              content={certs("awsDeveloper.name")}
              link={certs("awsDeveloper.link")}
            />
            <DateListEntry
              month="jun"
              year="2023"
              content={certs("htmlProOne.name")}
              link={certs("htmlProOne.link")}
            />
            <DateListEntry
              month="apr"
              year="2023"
              content={certs("python.name")}
              link={certs("python.link")}
            />
            <DateListEntry
              month="feb"
              year="2023"
              content={certs("rubyGold.name")}
              link={certs("rubyGold.link")}
            />
            <DateListEntry
              month="aug"
              year="2022"
              content={certs("awsPractitioner.name")}
              link={certs("awsPractitioner.link")}
            />
            <DateListEntry
              month="may"
              year="2022"
              content={certs("rubySilver.name")}
              link={certs("rubySilver.link")}
            />
            <DateListEntry
              month="dec"
              year="2020"
              content={certs("jlptTwo.name")}
              link={certs("jlptTwo.link")}
            />
          </List>
        </Section>
        <Section title="contact">
          Contact
        </Section>
      </main>
      <Footer />
    </>
  );
}
