import React from "react";
import Logo from "./Logo";

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer(): React.JSX.Element {
  return (
    <div className="bg-purple-900 py-4 ">
      <p className="pl-8 text-white">
        &copy;2025 Trivela Inc. All right reserved.
      </p>
    </div>
  );
}
