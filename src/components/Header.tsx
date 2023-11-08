'use client'
import Link from "next/link";
import { useTranslations } from 'next-intl'
import LocaleSwitcher from "./LocaleSwitcher";


export default function Header() {
    const t= useTranslations('Header')
    return (
        <header　className="header">
            <nav className="header__links">
                <Link href="/">{t('name')} <br /> {t('title')}</Link>
            </nav>
            <LocaleSwitcher />
        </header>
    )
}