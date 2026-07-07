"use client";

import {
  Instagram,
  Facebook,
  Mail,
  MessageSquare,
  Smartphone,
  Sparkles,
  PlayCircle,
  Globe,
} from "lucide-react";

const categories = [
  {
    title: "Instagram Accounts",
    icon: Instagram,
    description: "Verified, aged and niche Instagram accounts.",
  },
  {
    title: "Facebook Accounts",
    icon: Facebook,
    description: "Personal and business-ready Facebook profiles.",
  },
  {
    title: "TikTok Accounts",
    icon: PlayCircle,
    description: "High-quality TikTok accounts for creators.",
  },
  {
    title: "X (Twitter)",
    icon: MessageSquare,
    description: "Premium X accounts with clean history.",
  },
  {
    title: "Gmail Accounts",
    icon: Mail,
    description: "Fresh and aged Gmail accounts.",
  },
  {
    title: "Virtual Numbers",
    icon: Smartphone,
    description: "SMS verification numbers from many countries.",
  },
  {
    title: "AI Accounts",
    icon: Sparkles,
    description: "ChatGPT, Claude and other AI services.",
  },
  {
    title: "More Services",
    icon: Globe,
    description: "Streaming, business and digital accounts.",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#050816] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            CATEGORIES
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-white lg:text-5xl">
            Browse Our Marketplace
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Find premium digital products carefully organized into
            categories for fast and secure purchasing.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/10"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600">

                  <Icon className="h-8 w-8 text-white" />

                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-slate-400">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
      }
