"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

type Props = {
  startYear: string;
  startMonth: string;
  endYear?: string;
  endMonth?: string;
  title: string;
  details: string;
  link?: string;
  skills: string[];
};
export default function ProjectEntry({
  startYear,
  startMonth,
  endYear,
  endMonth,
  title,
  details,
  skills,
  link,
}: Props) {
  const date = useTranslations("Date");
  const t = useTranslations("Projects");
  const s = useTranslations("Skills");
  return (
    <dl>
      <dt>
        {date("date", { year: startYear, month: date(startMonth) })} ～{" "}
        {endYear && endMonth
          ? date("date", { year: endYear, month: date(endMonth) })
          : t("present")}
      </dt>
      <dd>
        {link ? (
          <Link href={link} target="_blank">
            {t(title)}
          </Link>
        ) : (
          t(title)
        )}
      </dd>
      <dd>{t(details)}</dd>
      <dd>
        <ul>
          {skills.map((skill) => {
            return <li key={skill}>{s(skill)}</li>;
          })}
        </ul>
      </dd>
    </dl>
  );
}
