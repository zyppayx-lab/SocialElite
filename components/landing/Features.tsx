"use client";

import {
  ShieldCheck,
  Smartphone,
 Users,
  Wallet,
} from "lucide-react";

const features = [
  {
    title: "Premium Accounts",
    description:
      "Buy verified Facebook, Instagram, TikTok, X, Gmail and many more accounts with instant delivery.",
    icon: Users,
  },
  {
    title: "Virtual Numbers",
    description:
      "Receive SMS online from hundreds of supported services across multiple countries.",
    icon: Smartphone,
  },
  {
    title: "Secure Wallet",
    description:
      "Fund your wallet securely with Paystack and pay instantly without delays.",
    icon: Wallet,
  },
  {
    title: "Safe Marketplace",
    description:
      "Every purchase is automated, secure and backed by reliable inventory management.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section className="relative bg-[#050816] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400">
            FEATURES
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-white lg:text-5xl">
            Everything You Need,
            <br />
            All In One Place
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            SocialElite combines premium social media accounts,
            virtual numbers and secure digital services into one
            professional platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500/40"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600">

                  <Icon className="h-8 w-8 text-white" />

                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
    }
