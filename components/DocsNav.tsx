"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav } from "@/lib/docs";

function isActive(pathname: string, href: string) {
  const path = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  if (href === "/docs") {
    return path === "/docs";
  }
  return path === href || path.startsWith(`${href}/`);
}

export function DocsNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation" className="site border-b border-hairline">
      <ul className="flex flex-wrap gap-x-6 gap-y-3 py-4">
        {docsNav.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors hover:text-ink ${
                  active ? "text-ink" : "text-ink-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
