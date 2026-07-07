"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-16 text-center">

        <h2 className="text-4xl font-bold text-white">
          Ready to Get Started?
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Buy premium digital accounts and virtual numbers in minutes.
        </p>

        <Link
          href="/signup"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-700"
        >
          Create Free Account
        </Link>

      </div>
    </section>
  );
}
