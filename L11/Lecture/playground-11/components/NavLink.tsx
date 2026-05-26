"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const activeClass = "text-blue-800 hover:underline font-semibold";
const inactiveClass = "text-zinc-600 hover:underline";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm ${isActive ? activeClass : inactiveClass}`}
    >
      {children}
    </Link>
  );
}