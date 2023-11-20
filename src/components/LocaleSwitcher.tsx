"use client";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onLocaleChange = (lang: string) => {
    const newLocale = lang;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <>
      <div
        tabIndex={0}
        className="locale"
        onClick={() => setOpen(true)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setOpen(true);
          }
        }}
      >
        <FontAwesomeIcon icon={faLanguage} size="lg" className="locale--icon" />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t("language")}</DialogTitle>
        <DialogContent>
          <List
            sx={{
              "& .MuiListItemButton-root:hover, & .MuiListItemButton-root:focus":
                {
                  color: "white",
                  backgroundColor: "#8813f6",
                },
            }}
          >
            {["en", "ja"].map((lang) => {
              return (
                <ListItem key={lang}>
                  <ListItemButton
                    sx={{ px: 2, py: 1, borderRadius: "20px" }}
                    disableGutters
                    onClick={() => onLocaleChange(lang)}
                    disabled={lang === locale}
                  >
                    <p>{t("locale", { locale: lang })}</p>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
}
