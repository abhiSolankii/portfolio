import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/abhiSolankii" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/abhishek-solanki-472bb5248/",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/abhi_solankii/" },
  { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            target="_blank"
            key={index}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
