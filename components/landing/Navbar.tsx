"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-xl font-bold text-white shadow-lg">
            S
          </div>

          <span className="text-2xl font-bold text-white">
            Social
            <span className="text-purple-500">Elite</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <Link href="/accounts" className="transition hover:text-white">
            Accounts
          </Link>

          <Link href="/virtual-numbers" className="transition hover:text-white">
            Virtual Numbers
          </Link>

          <Link href="/how-it-works" className="transition hover:text-white">
            How It Works
          </Link>

          <Link href="/referral" className="transition hover:text-white">
            Refer & Earn
          </Link>

          <Link href="/help" className="transition hover:text-white">
            Help Center
          </Link>
        </nav>

        {/* Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/login"
            className="rounded-xl border border-purple-500 px-5 py-3 text-white transition hover:bg-purple-600"
          >
            Log In
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
          }
