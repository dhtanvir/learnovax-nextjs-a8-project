import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { FaFacebook, FaPhoneVolume, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";
import { IoIosMailUnread } from "react-icons/io";
import { LuMapPinned } from "react-icons/lu";

const Footer = () => {
  return (
    <footer
      className="relative bg-white text-gray-400 
    py-10 border-t border-white/5 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={140}
                height={40}
                className="brightness-110"
              />
            </Link>
            <p className="text-sm leading-relaxed italic">
              Empowering learners worldwide with production-ready skills in
              Development, Design, and Marketing.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-purple-600 hover:text-white transition-all"
              >
                <FaFacebook size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-blue-400 hover:text-white transition-all"
              >
                <FaTwitter size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-pink-600 hover:text-white transition-all"
              >
                <BsInstagram size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-blue-700 hover:text-white transition-all"
              >
                <LiaLinkedinIn size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-6">
              Explore Courses
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/courses"
                  className="hover:text-purple-400 transition"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-purple-400 transition"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-purple-400 transition"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-purple-400 transition"
                >
                  Data Science
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <IoIosMailUnread size={16} className="text-purple-500" />
                <span>support@pixgen.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneVolume size={16} className="text-purple-500" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-start gap-3">
                <LuMapPinned size={16} className="text-purple-500 mt-1" />
                <span>Level 4, Tech Plaza, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-xs mb-4">
              Subscribe to get course updates and offers.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-purple-500 transition"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 rounded-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-purple-500 font-medium">
              Md Tanvirul Islam
            </span>
            . All rights reserved.
          </p>

          <div className="flex gap-8 text-xs font-medium">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link href="/refund" className="hover:text-white transition">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
