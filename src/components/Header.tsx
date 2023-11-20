"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import React from "react";

export default function Header() {
  const t = useTranslations("Header");
  return (
    <header className="header">
      <nav className="header__links">
        <Link tabIndex={0} href="/">
          {t("name")} <br /> {t("title")}
        </Link>
      </nav>
      <LocaleSwitcher />
    </header>
  );
}
