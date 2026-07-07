import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        <div>
          <h2 className="text-2xl font-bold text-white">
            SocialElite
          </h2>

          <p className="mt-2 text-slate-400">
            Premium Digital Marketplace
          </p>
        </div>

        <div className="flex gap-8 text-slate-400">
          <Link href="/">Home</Link>
          <Link href="/accounts">Accounts</Link>
          <Link href="/virtual-numbers">Virtual Numbers</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </footer>
  );
}
