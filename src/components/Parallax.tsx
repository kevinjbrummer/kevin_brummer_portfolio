"use client";
import Image from "next/image";

export default function Parallax() {
  return (
    <div className="parallax">
      <div className="parallax__header">
        <p className="parallax__header--text">
          Kevin Brummer &nbsp;|&nbsp; Software Engineer
        </p>
      </div>
      <Image
        className="parallax__cherry-blossoms"
        src="/cherry_blossom_tree.png"
        alt="cherry blossom"
        fill={true}
      />
      <Image
        className="parallax__space"
        src="/space.jpg"
        alt="space"
        fill={true}
      />
    </div>
  );
}
