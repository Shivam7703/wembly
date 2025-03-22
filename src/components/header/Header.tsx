"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { VscChromeClose } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { logo } from "@/assets";
import { MdCall, MdAttachEmail } from "react-icons/md";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navItems, setNavItems] = useState<any[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    fetchCategories();
    loadGoogleTranslate(); // Load Google Translate on component mount
  }, []);


    const loadGoogleTranslate = () => {
      if (typeof window !== "undefined" && !document.getElementById("google_translate_script")) {
        // ✅ Add Google Translate script only once
        const script = document.createElement("script");
        script.id = "google_translate_script";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
    
        // ✅ Define init function only once
        (window as any).googleTranslateElementInit = () => {
          const translateElement = document.getElementById("google_translate_element");

          if (translateElement?.innerHTML?.trim() === "") {
            new (window as any).google.translate.TranslateElement(
              { pageLanguage: "en", autoDisplay: false },
              "google_translate_element"
            );
          }
        };
      }
    };

  const fetchCategories = async () => {
    setNavItems(header?.navItems || []);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (href: string) => {
    setIsMobileMenuOpen(false);
  };

  // ✅ Handle scroll behavior for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="h-20 w-full"></div>
      <header
        className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Top Bar with Contact and Google Translate */}
        <div className="bg-[#030727] text-white p-3  flex justify-between items-center lg:px-20">
          <div className="flex md:gap-11 gap-5">
            <a
              className="flex items-center hover:scale-105 duration-300"
              href="tel:+918765432110"
            >
              <MdCall className="sm:text-lg text-2xl mr-1" />
             <p className="max-md:hidden">+91 8765432110</p> 
            </a>
            <a
              className="flex items-center  hover:scale-105 duration-300"
              href="mailto:info@wembly.com"
            >
              <MdAttachEmail className="sm:text-lg text-2xl mr-1" />
             <p className="max-lg:hidden"> info@wembly.com</p> 
            </a>
          </div>

          {/* ✅ Google Translate Widget */}
          <div className="max-h-8 overflow-hidden rounded-lg ">
          <div id="google_translate_element" className=" !-mt-1 max-sm:p-1 max-sm:text-sm"></div>
          </div>
        </div>

        {/* Main Navigation for Desktop */}
        <div className="hidden md:flex md:py-7 shadow-xl items-center justify-between bg-white h-24 px-5 py-3 lg:px-20">
          <Link href={header?.href || "/"}>
            <Image
              src={logo}
              alt="logo"
              className="h-[12vw] max-h-16 my-2 w-min object-contain"
            />
          </Link>
          <Menu
            navItemsArray={navItems}
            activeItemId={activeItem}
            onTop={isAtTop}
            onItemClick={handleNavItemClick}
          />
          <RightSide onTop={isAtTop} />
        </div>

        {/* Mobile Section */}
        <div
          className={`flex md:hidden w-screen items-center justify-between h-16 px-3 bg-white`}
        >
          <div className="flex items-center relative cursor-pointer text-3xl justify-between w-full">
            <Link href={header?.href || "/"}>
              <Image
                src={logo}
                alt="logo"
                className="w-[180px] object-contain"
              />
            </Link>
            {isMobileMenuOpen ? (
              <VscChromeClose
                onClick={handleMobileMenu}
                className="text-black"
              />
            ) : (
              <IoMenu onClick={handleMobileMenu} className="text-black" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed h-screen left-0 top-28 md:hidden bg-white overflow-x-hidden duration-300 transition-all ${
            isMobileMenuOpen ? "!w-[88%]" : "!w-0"
          }`}
        >
          <MenuMobile
            onTop={isAtTop}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            activeItemId={activeItem}
            onItemClick={handleNavItemClick}
          />
        </div>
      </header>
    </>
  );
};

export default Header;

// Right Side Button for Download Brochure
function RightSide(onTop: any) {
  return (
    <Link href={"/"} className="w-max">
      <div className="flex gap-2 p-2 text-black hover:text-white border rounded-[29px] group relative bg-white overflow-hidden items-center flex-row h-full">
        <p className="ml-5 mr-3 font-bold text-sm z-20">Download Brochure</p>
        <FaRegArrowAltCircleDown className="text-green1 text-2xl bg-white group-hover:text-black duration-200 rounded-full z-20" />
        <div className="group-hover:w-full duration-300 h-full bg-brown2 absolute z-10 w-0 top-0 right-0"></div>
      </div>
    </Link>
  );
}
