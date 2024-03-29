"use client";
import { useTranslations } from "next-intl";
import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  children: ReactNode;
  title: string;
  icon: IconDefinition;
};
export default function Section({ children, title, icon }: Readonly<Props>) {
  const t = useTranslations("Section");
  return (
    <section className="section">
      <div className="section__header">
        <FontAwesomeIcon icon={icon} className="section__header--icon" />
        <h2 className="section__header--text">{t(title)}</h2>
      </div>
      <div className="section__content">{children}</div>
    </section>
  );
}
