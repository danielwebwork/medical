import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-medical-100 bg-white">
      <Container className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-600 text-sm font-bold text-white">
              CUN
            </span>
            <div>
              <p className="font-semibold text-slate-900">{siteConfig.brandName}</p>
              <p className="text-xs text-medical-600">Medical consumables</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            {siteConfig.description}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-3 inline-flex text-sm font-medium text-medical-700 hover:text-medical-900"
          >
            {siteConfig.email}
          </a>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
            Quick links
          </h3>
          <ul className="space-y-2">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-slate-600 transition hover:text-medical-700"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
            Offices
          </h3>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-medical-700 hover:text-medical-900"
          >
            <FiMail className="shrink-0" aria-hidden />
            {siteConfig.email}
          </a>
          <ul className="space-y-5 text-sm text-slate-600">
            <li>
              <p className="font-semibold text-slate-800">{siteConfig.offices.china.label}</p>
              <p className="mt-1 flex gap-2">
                <FiMapPin className="mt-0.5 shrink-0 text-medical-600" />
                <span>{siteConfig.offices.china.address}</span>
              </p>
              <a
                href={`tel:${siteConfig.offices.china.phoneTel}`}
                className="mt-1 inline-flex items-center gap-2 hover:text-medical-700"
              >
                <FiPhone className="text-medical-600" />
                {siteConfig.offices.china.phone}
              </a>
            </li>
            <li>
              <p className="font-semibold text-slate-800">{siteConfig.offices.usa.label}</p>
              <p className="mt-1 flex gap-2">
                <FiMapPin className="mt-0.5 shrink-0 text-medical-600" />
                <span>{siteConfig.offices.usa.address}</span>
              </p>
              <a
                href={`tel:${siteConfig.offices.usa.phoneTel}`}
                className="mt-1 inline-flex items-center gap-2 hover:text-medical-700"
              >
                <FiPhone className="text-medical-600" />
                {siteConfig.offices.usa.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
            Follow us
          </h3>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-medical-100 bg-medical-50 text-medical-700 transition hover:bg-medical-100"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-medical-100 bg-medical-50 text-medical-700 transition hover:bg-medical-100"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-medical-100 bg-medical-50 text-medical-700 transition hover:bg-medical-100"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            {siteConfig.legalName}
          </p>
        </div>
      </Container>
      <div className="border-t border-medical-50 bg-medical-50/50">
        <Container className="flex flex-col items-center justify-between gap-2 py-4 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Equipment for licensed healthcare professionals and institutions.
          </p>
        </Container>
      </div>
    </footer>
  );
}
