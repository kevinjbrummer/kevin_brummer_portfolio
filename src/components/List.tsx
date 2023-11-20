"use client";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function List({ children }: Readonly<Props>) {
  return <div className="list">{children}</div>;
}
