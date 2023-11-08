"use client";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};
export default function Section({ children, title }: Props) {
  const t = useTranslations("Section");
  return (
    <section className="section">
      <h2 className="section__header">{t(title)}</h2>
      <div className="section__content">{children}</div>
    </section>
  );
}
