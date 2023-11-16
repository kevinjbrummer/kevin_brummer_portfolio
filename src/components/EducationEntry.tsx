"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

type Props = {
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
  school: string;
  degree: string;
  link?: string;
  details: string;
  courses: string[];
};
export default function EducationEntry({
  startYear,
  startMonth,
  endYear,
  endMonth,
  school,
  degree,
  details,
  courses,
  link,
}: Props) {
  const date = useTranslations("Date");
  const t = useTranslations("Education");
  const c = useTranslations("Classes");
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
            {t(school)}
          </Link>
        ) : (
          t(school)
        )}
      </dd>
      <dd>{t(degree)}</dd>
      <dd>{t(details)}</dd>
      <dd>
        <ul>
        {courses.map((course) => {
            return <li key={course}>{c(course)}</li>;
          })}
        </ul>
      </dd>
    </dl>
  );
}
