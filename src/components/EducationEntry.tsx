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
}: Readonly<Props>) {
  const date = useTranslations("Date");
  const t = useTranslations("Education");
  const c = useTranslations("Classes");
  return (
    <dl className="entry">
      <dt className="entry__date">
        {date("date", { year: startYear, month: date(startMonth) })} ～{" "}
        {endYear && endMonth
          ? date("date", { year: endYear, month: date(endMonth) })
          : t("present")}
      </dt>
      <div className="entry__contents">
        <dd className="entry__contents--title">
          {link ? (
            <Link className="outside-link" href={link} target="_blank">
              {t(school)}
            </Link>
          ) : (
            t(school)
          )}
        </dd>
        <dd className="entry__contents--subtitle">{t(degree)}</dd>
        <dd className="entry__contents--details">{t(details)}</dd>
        <dd>
          <ul className="entry__contents--list">
            {courses.map((course) => {
              return <li key={course}>{c(course)}</li>;
            })}
          </ul>
        </dd>
      </div>
    </dl>
  );
}
