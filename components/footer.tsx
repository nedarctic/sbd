'use client';

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaReddit, FaTumblr, FaTiktok } from "react-icons/fa";
import { oswald } from "@/components/ui/fonts";
import { useState, useEffect } from "react";

export default function Footer() {

  const [currentYear, setCurrentYear] = useState<number | null>();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Order Request Form", href: "/order" },
    { label: "Blogs", href: "/blogs" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact Us", href: "/contact" },
  ];

  const policyLinks = [{ label: "Privacy Policy", path: "/privacy-policy" }, { label: "Terms of Use", path: "/terms-of-use" }, { label: "Cookie Policy", path: "/cookie-policy" }, { label: "Refund Policy", path: "/refund-policy" }];

  const socialLinks = [
    { Icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61587677614993" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/company/111715822/admin/page-posts/published/" },
    { Icon: FaInstagram, href: "https://www.instagram.com/scholarbrood1/" },
    { Icon: FaYoutube, href: "https://www.youtube.com/@ScholarBrood" },
    // { Icon: FaReddit, href: "https://www.reddit.com/user/scholarbrood/" },
    // { Icon: FaTumblr, href: "https://scholarbrood.tumblr.com/" },
    { Icon: FaTiktok, href: "https://www.tiktok.com/@scholarbrood?is_from_webapp=1&sender_device=pc" }
  ];

  return (
    <footer className="bg-black py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start text-sm">
          {/* Contact Info */}
          <div className="order-1 flex flex-col items-center justify-center">
            <div className="text-center sm:text-left">
              <h3 className={`${oswald.className} font-semibold text-[#E8B85F] mb-4`}>
                Contact Us
              </h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#E8B85F] flex-shrink-0" />
                  <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@scholarbrood.com"
                    target="_blank"
                    className={`${oswald.className} hover:text-[#E8B85F] transition break-words`}
                  >
                    info@scholarbrood.com
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#E8B85F] flex-shrink-0" />
                  <span className={`${oswald.className}`}>+1 (843) 699-6020</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#E8B85F] flex-shrink-0" />
                  <span className={`${oswald.className}`}>Myrtle Beach, SC 29572, USA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Legal */}
          <div className="order-3 md:order-2 flex flex-col sm:flex-row justify-center gap-10 sm:gap-16">
            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className={`${oswald.className} font-semibold text-[#E8B85F] mb-3`}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`${oswald.className} text-gray-400 hover:text-[#E8B85F] transition block`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="text-center sm:text-left">
              <h4 className={`${oswald.className} font-semibold text-[#E8B85F] mb-3`}>
                Legal Frameworks
              </h4>
              <ul className="space-y-2">
                {policyLinks.map((item, index) => (
                  <li key={item.label}>
                    <Link
                      href={item.path}
                      className={`${oswald.className} text-gray-400 hover:text-[#E8B85F] transition block`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="order-2 md:order-3 flex justify-center md:justify-center">
            <div className="flex gap-5">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#E8B85F] transition-all duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-500">
          <p className={`${oswald.className}`}>
            © {currentYear} ScholarBrood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}