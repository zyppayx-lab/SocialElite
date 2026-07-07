"use client";

import {
  UserPlus,
  Wallet,
  ShoppingBag,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    desc: "Register in less than a minute.",
  },
  {
    icon: Wallet,
    title: "Fund Wallet",
    desc: "Deposit securely using Paystack.",
  },
  {
    icon: ShoppingBag,
    title: "Choose Product",
    desc: "Buy accounts or virtual numbers.",
  },
  {
    icon: CheckCircle,
    title: "Instant Delivery",
    desc: "Receive your purchase immediately.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white">
            How It Works
          </h2>
          <p className="mt-4 text-slate-400">
            Four simple steps to get started.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <div className="mb-2 text-sm font-bold text-purple-400">
                  STEP {i + 1}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
        }
