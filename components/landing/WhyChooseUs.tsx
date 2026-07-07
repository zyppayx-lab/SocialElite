"use client";

import {
  Shield,
  Clock3,
  CreditCard,
  Headphones,
} from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Secure Transactions",
    desc: "Every payment and purchase is protected.",
  },
  {
    icon: Clock3,
    title: "Instant Delivery",
    desc: "Accounts and virtual numbers delivered automatically.",
  },
  {
    icon: CreditCard,
    title: "Safe Payments",
    desc: "Pay securely with your wallet or Paystack.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Friendly support whenever you need help.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white">
            Why Choose SocialElite?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <Icon className="mb-5 h-10 w-10 text-blue-500" />

                <h3 className="mb-3 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-slate-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
                  }
