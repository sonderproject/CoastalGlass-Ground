import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="container-x grid gap-14 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-lg font-medium tracking-tight">{site.name}</p>
          <p className="mt-3 text-muted">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow mb-5">Explore</p>
          <ul className="space-y-3">
            {nav
              .filter((n) => n.label !== "Contact")
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="eyebrow mb-5">Contact</p>
          <ul className="space-y-3 text-muted">
            <li>
              <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="hover:text-ink">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="container-x border-t border-line py-8 text-sm text-muted">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
