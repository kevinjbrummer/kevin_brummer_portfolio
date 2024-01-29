"use client";
import Contact from "@/components/Contact";
import DateListEntry from "@/components/DateListEntry";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import List from "@/components/List";
import Parallax from "@/components/Parallax";
import Section from "@/components/Section";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";
import { faAward } from "@fortawesome/free-solid-svg-icons/faAward";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import { faSeedling } from "@fortawesome/free-solid-svg-icons/faSeedling";
import { useTranslations } from "next-intl";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import WorkHistoryEntry from "@/components/WorkHistoryEntry";
import ProjectEntry from "@/components/ProjectEntry";
import EducationEntry from "@/components/EducationEntry";
import { faUserTie } from "@fortawesome/free-solid-svg-icons/faUserTie";
import Head from "next/head";
config.autoAddCss = false;

export default function HomePage() {
  const t = useTranslations("HomePage");
  const certs = useTranslations("Certifications");

  return (
    <>
      <Head>
        <link rel="preload" href="/path/to/image.ext" as="image" />
      </Head>
      <Parallax />
      <Header />
      <main>
        <Section title="about" icon={faUserTie}>
          <p className="text">{t("aboutIntro")}</p>
          <br />
          <p className="text">{t("aboutEnding")}</p>
        </Section>
        <Section title="work" icon={faLaptop}>
          <WorkHistoryEntry
            startYear="2022"
            startMonth="apr"
            company="ankhSystems"
            position="ankhPosition"
            link="https://ankh-systems.co.jp/"
            details="ankhDetails"
            skills={[
              "ruby",
              "rails",
              "javascript",
              "typescript",
              "node",
              "next",
              "react",
              "php",
              "docker",
              "linux",
              "mysql",
              "postgres",
              "aws",
              "git",
              "github",
              "html",
              "css",
              "sass",
            ]}
          />
          <WorkHistoryEntry
            startYear="2018"
            startMonth="nov"
            endYear="2022"
            endMonth="mar"
            company="aeon"
            position="aeonPosition"
            link="https://www.aeonet.co.jp/"
            details="aeonDetails"
            skills={[
              "communication",
              "japanese",
              "culture",
              "businessCulture",
              "microsoft",
            ]}
          />
        </Section>
        <Section title="projects" icon={faSeedling}>
          <ProjectEntry
            startYear="2023"
            startMonth="sep"
            endYear="2023"
            endMonth="nov"
            title="portfolio"
            details="portfolioDetails"
            skills={[
              "aws",
              "typescript",
              "node",
              "next",
              "git",
              "github",
              "design",
            ]}
          />
          <ProjectEntry
            startYear="2022"
            startMonth="dec"
            endYear="2023"
            endMonth="may"
            title="mama1st"
            details="mama1stDetails"
            link="https://www.eikaiwacoach.com"
            skills={[
              "php",
              "mysql",
              "wordpress",
              "docker",
              "html",
              "css",
              "sass",
            ]}
          />
        </Section>
        <Section title="certification" icon={faAward}>
          <List>
            <DateListEntry
              month="jan"
              year="2024"
              content={certs("htmlProTwo.name")}
              link={certs("htmlProTwo.link")}
            />
            <DateListEntry
              month="dec"
              year="2023"
              content={certs("azFundamentals.name")}
              link={certs("azFundamentals.link")}
            />
            <DateListEntry
              month="dec"
              year="2023"
              content={certs("javascriptDeveloper.name")}
              link={certs("javascriptDeveloper.link")}
            />
            <DateListEntry
              month="dec"
              year="2023"
              content={certs("awsSysOps.name")}
              link={certs("awsSysops.link")}
            />
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
        <Section title="education" icon={faGraduationCap}>
          <EducationEntry
            startYear="2015"
            startMonth="sep"
            endYear="2018"
            endMonth="may"
            school="umn"
            degree="umnDegree"
            details="umnDetails"
            courses={["algorithms", "ai", "software", "booleanAlgebra"]}
            link="https://twin-cities.umn.edu/"
          />
        </Section>
        <Section title="contact" icon={faAddressCard}>
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}
