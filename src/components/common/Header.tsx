'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Закрыть меню при выборе пункта
  };
  const [openForm, setOpenForm] = useState(false);

  return (
    <header className="container px-5 lg:px-10 shadow-sm mt-[10px] py-4 relative z-50">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.jpg"
              alt="ReinEx Logo"
              width={153}
              height={51}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-lg transition-colors ${
              pathname === '/'
                ? 'text-[#244754] font-semibold'
                : 'text-[#244754] hover:text-[#35844a]'
            }`}
          >
            BRAND
          </Link>

          {/* <div className="relative">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-lg text-[#244754] hover:text-[#35844a] transition-colors flex items-center"
            >
              PRODOTTI ▾
            </button>

            {isOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10 min-w-[300px]">
                <a
                  href="/prodotti#bianco"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm text-[#244754] hover:text-[#35844a]"
                >
                  SENSO BIANCO - AUTO + 80°C
                </a>
                <a
                  href="/prodotti#marrone"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm text-[#244754] hover:text-[#35844a]"
                >
                  SENSO MARRONE – AUTO + 110°C
                </a>
                <a
                  href="/prodotti#rossa"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm text-[#244754] hover:text-[#35844a]"
                >
                  SENSO ROSSA – AUTO + 120°C
                </a>
                <a
                  href="/prodotti#oro"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm text-[#244754] hover:text-[#35844a]"
                >
                  SENSO ORO - AUTO + 130°C
                </a>
              </div>
            )}
          </div> */}

          <Link
            href="/prodotti"
            className={`text-lg transition-colors ${
              pathname === '/prodotti'
                ? 'text-[#244754] font-semibold'
                : 'text-[#244754] hover:text-[#35844a]'
            }`}
          >
            PRODOTTI{' '}
          </Link>

          <Link
            href="/chi-siamo"
            className={`text-lg transition-colors ${
              pathname === '/chi-siamo'
                ? 'text-[#244754] font-semibold'
                : 'text-[#244754] hover:text-[#35844a]'
            }`}
          >
            CHI SIAMO{' '}
          </Link>
        </nav>

        {/* Mobile Burger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image
              src="/images/icon-burger.gif"
              alt="Menu"
              width={28}
              height={28}
              className="text-[#244754]"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md rounded-b-xl mt-2 py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-semibold text-[#244754] hover:text-[#35844a] transition-colors"
            >
              BRAND
            </Link>

            <Link
              href="/prodotti"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-semibold text-[#244754] hover:text-[#35844a] transition-colors"
            >
              PRODOTTI
            </Link>
            {/* Dienstleistungen Dropdown (Mobile) */}
            {/* <div>
              <button
                onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
                className="flex justify-between items-center w-full text-lg text-[#244754] hover:text-[#35844a] transition-colors"
              >
                PRODOTTI
                <span
                  className={`transform transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                >
                  ▼
                </span>
              </button>

              {isMobileDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <a
                    href="/prodotti#bianco"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    className="block text-sm text-[#244754] hover:text-[#35844a]"
                  >
                    SENSO BIANCO - AUTO + 80°C
                  </a>
                  <a
                    href="/prodotti#marrone"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    className="block text-sm text-[#244754] hover:text-[#35844a]"
                  >
                    SENSO MARRONE – AUTO + 110°C
                  </a>
                  <a
                    href="/prodotti#rossa"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    className="block text-sm text-[#244754] hover:text-[#35844a]"
                  >
                    SENSO ROSSA – AUTO + 120°C
                  </a>
                  <a
                    href="/prodotti#oro"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    className="block text-sm text-[#244754] hover:text-[#35844a]"
                  >
                    SENSO ORO - AUTO + 130°C
                  </a>
                </div>
              )}
            </div> */}

            <Link
              href="/chi-siamo"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg text-[#244754] hover:text-[#35844a] transition-colors"
            >
              CHI SIAMO{' '}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
