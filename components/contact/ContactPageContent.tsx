"use client";

import { useState } from "react";
import { toast } from "sonner";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function ContactPageContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please complete all fields.");
      return;
    }
    toast.success("Message sent", {
      description: "We have received your message and will get back to you as soon as possible.",
    });
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card sm:p-8"
      >
        <h2 className="text-lg font-semibold text-slate-900">Send a message</h2>
        <p className="mt-2 text-sm text-slate-600">
          Or email us directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-medical-700 underline-offset-2 hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 outline-none focus:border-medical-400 focus:bg-white focus:ring-2 focus:ring-medical-100"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 outline-none focus:border-medical-400 focus:bg-white focus:ring-2 focus:ring-medical-100"
              placeholder="you@organization.com"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 outline-none focus:border-medical-400 focus:bg-white focus:ring-2 focus:ring-medical-100"
              placeholder="Tell us about equipment needs, timelines, and delivery region."
            />
          </label>
        </div>
        <Button type="submit" className="mt-6" size="lg">
          Submit message
        </Button>
      </form>

      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
          <h2 className="text-lg font-semibold text-slate-900">Our offices</h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl border border-medical-100 bg-medical-50/60 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-medical-700">
                Company email
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-medical-800 hover:text-medical-950"
              >
                <FiMail className="h-5 w-5 shrink-0 text-medical-600" aria-hidden />
                {siteConfig.email}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-medical-700">
                {siteConfig.offices.china.label}
              </h3>
              <ul className="mt-3 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <FiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-medical-600" />
                  <span>{siteConfig.offices.china.address}</span>
                </li>
                <li className="flex gap-3">
                  <FiPhone className="mt-0.5 h-5 w-5 shrink-0 text-medical-600" />
                  <a
                    href={`tel:${siteConfig.offices.china.phoneTel}`}
                    className="hover:text-medical-800"
                  >
                    {siteConfig.offices.china.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-medical-700">
                {siteConfig.offices.usa.label}
              </h3>
              <ul className="mt-3 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <FiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-medical-600" />
                  <span>{siteConfig.offices.usa.address}</span>
                </li>
                <li className="flex gap-3">
                  <FiPhone className="mt-0.5 h-5 w-5 shrink-0 text-medical-600" />
                  <a
                    href={`tel:${siteConfig.offices.usa.phoneTel}`}
                    className="hover:text-medical-800"
                  >
                    {siteConfig.offices.usa.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <div className="flex gap-3 text-sm text-slate-600">
                <FiClock className="mt-0.5 h-5 w-5 shrink-0 text-medical-600" />
                <span>
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.saturday}
                  <br />
                  {siteConfig.hours.sunday}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-inner">
          <p className="border-b border-slate-200 bg-white px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-medical-800">
            {siteConfig.offices.usa.label} — map
          </p>
          <div className="relative aspect-[16/9] min-h-[260px] w-full bg-slate-200">
            <iframe
              title={`Map: ${siteConfig.offices.usa.address}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.offices.usa.address)}&hl=en&z=15&ie=UTF8&iwloc=near&output=embed`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="border-t border-slate-200 bg-white px-4 py-2 text-center text-xs text-slate-500">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.offices.usa.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-medical-700 underline-offset-2 hover:underline"
            >
              Open in Google Maps
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
