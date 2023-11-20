"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

type Props = {
  year: string;
  month: string;
  content: string;
  link: string;
};

export default function DateListEntry({
  year,
  month,
  content,
  link,
}: Readonly<Props>) {
  const date = useTranslations("Date");
  return (
    <dl className="entry">
      <dt className="entry__date">
        {date("date", { year: year, month: date(month) })}
      </dt>
      <div className="entry__contents">
        <dd>
          <Link className="outside-link" href={link} target="_blank">
            {content}
          </Link>
        </dd>
      </div>
    </dl>
  );
}
