'use client'
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  year: string;
  month: string;
  content: string;
  link: string;
};

export default function DateListEntry({year, month, content, link}: Props) {
  const date = useTranslations('Date');
  return (
    <div className="date-entry">
      <dt className="date">{date('date', {year: year, month: date(month)})}</dt>
      <div className="details">
        <Link href={link} target="_blank">{content}</Link>
      </div>
    </div>
  )
}
