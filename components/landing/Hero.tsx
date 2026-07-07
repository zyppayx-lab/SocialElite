"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Smartphone,
  Globe,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-36 pb-24">

      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}
        <div>

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-white/5 px-5 py-2 text-sm text-slate-300">
            <ShieldCheck className="h-4 w-4 text-green-400" />
            Trusted. Safe. Fast. Reliable.
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-7xl">
            Your Trusted Platform
            <br />
            for Digital Accounts &
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Virtual Numbers
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Buy premium social media accounts and virtual numbers
            instantly with secure payments, fast delivery,
            verified inventory and professional support.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/accounts"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
            >
              Browse Accounts
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/virtual-numbers"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-purple-500 hover:bg-white/5"
            >
              Get Virtual Numbers
            </Link>

          </div>

          <div className="mt-10 flex items-center gap-5">

            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/100?img=11"
                className="h-11 w-11 rounded-full border-2 border-[#050816]"
              />
              <img
                src="https://i.pravatar.cc/100?img=12"
                className="h-11 w-11 rounded-full border-2 border-[#050816]"
              />
              <img
                src="https://i.pravatar.cc/100?img=13"
                className="h-11 w-11 rounded-full border-2 border-[#050816]"
              />
              <img
                src="https://i.pravatar.cc/100?img=14"
                className="h-11 w-11 rounded-full border-2 border-[#050816]"
              />
            </div>

            <div>
              <p className="font-semibold text-white">
                Trusted by thousands of users
              </p>

              <p className="text-sm text-yellow-400">
                ★★★★★ 4.9/5 Rating
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="grid gap-5">

              <div className="rounded-2xl border border-white/10 bg-[#0f172a] p-6">

                <Smartphone className="mb-4 h-10 w-10 text-blue-500" />

                <h3 className="text-xl font-bold text-white">
                  Premium Accounts
                </h3>

                <p className="mt-2 text-slate-400">
                  Instagram, Facebook, TikTok, X, Gmail,
                  Telegram and many more.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-white/10 bg-[#0f172a] p-6">

                  <Globe className="mb-3 h-8 w-8 text-purple-500" />

                  <h4 className="font-bold text-white">
                    190+ Countries
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    Virtual Numbers
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0f172a] p-6">

                  <Zap className="mb-3 h-8 w-8 text-green-400" />

                  <h4 className="font-bold text-white">
                    Instant Delivery
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    Automatic Purchase
                  </p>

                </div>

              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6">

                <h3 className="text-2xl font-bold text-white">
                  Fast • Secure • Automated
                </h3>

                <p className="mt-3 text-slate-300">
                  Built for creators, marketers, developers
                  and businesses looking for premium digital
                  accounts and reliable virtual numbers.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
        }
