import ContactForm from "./contact-form";
import { site } from "@/lib/site";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, Phone, Mail, MessageCircle, Globe, Shield } from "lucide-react";

const hours = [
  { day: "Lundi - Vendredi", time: "9h00 - 18h00" },
  { day: "Samedi", time: "10h00 - 13h00" },
  { day: "Dimanche", time: "Fermé" },
];

const contactFaqs = [
  {
    q: "Quel est le délai de réponse ?",
    a: "Nous répondons à toutes les demandes sous 24h ouvrées. Pour les urgences, appelez-nous directement au 01 84 16 35 29.",
  },
  {
    q: "Quels types de demandes puis-je vous adresser ?",
    a: "Nous traitons les demandes commerciales, les questions sur nos services, les demandes de démo, les partenariats et le support technique.",
  },
  {
    q: "Proposez-vous une démo gratuite ?",
    a: "Oui, nous proposons une démo personnalisée de 30 min pour vous présenter la plateforme et répondre à toutes vos questions.",
  },
  {
    q: "Comment demander l'ouverture d'un compte ?",
    a: "Remplissez le formulaire ci-dessous en précisant votre activité. Un conseiller vous recontacte sous 24 h pour créer votre espace de collecte d'avis.",
  },
];

export const metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe Achat Avis Google pour booster votre e-réputation avec des avis clients authentiques.",
  alternates: { canonical: `${site.url}/contact` },
};

function ContactFaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: contactFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ContactPage() {
  const { company } = site;
  return (
    <div className="flex flex-col">
      <ContactFaqJsonLd />
      <section className="relative overflow-hidden bg-lime-400/[0.06]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d0f0a] via-[#101016] to-[#0d0d12]" />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
              <MessageCircle className="h-4 w-4" />
              Contact
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Parlons de votre{" "}
              <span className="text-lime-300">e-réputation</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Une question ? Un projet ? Notre équipe vous répond sous 24h ouvrées.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div>
              <AnimatedSection>
                <div className="rounded-3xl border border-white/10 bg-[#0d0d12] p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-white">
                    Envoyez-nous un message
                  </h2>
                  <p className="mt-2 text-sm text-slate-300">
                    Remplissez le formulaire et un conseiller vous recontacte sous 24 h.
                  </p>
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="space-y-6">
              <AnimatedSection delay={0.1}>
                <div className="rounded-3xl border border-white/10 bg-[#0d0d12] p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-white">
                    Informations de contact
                  </h3>
                  <div className="mt-6 space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/10">
                        <MapPin className="h-5 w-5 text-lime-300" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Adresse</p>
                        <p className="text-sm text-slate-300">
                          {company.address.street}
                          <br />
                          {company.address.city}, {company.address.region}{" "}
                          {company.address.postalCode}
                          <br />
                          {company.address.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/10">
                        <Phone className="h-5 w-5 text-lime-300" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Téléphone</p>
                        <a
                          href={`tel:${company.phone}`}
                          className="text-sm text-lime-700 hover:text-lime-800"
                        >
                          {company.phoneDisplay}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/10">
                        <Mail className="h-5 w-5 text-lime-300" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Email</p>
                        <a
                          href={`mailto:${company.email}`}
                          className="text-sm text-lime-700 hover:text-lime-800"
                        >
                          {company.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="rounded-3xl border border-white/10 bg-[#0d0d12] p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-white">
                    Horaires d'ouverture
                  </h3>
                  <div className="mt-6 space-y-4">
                    {hours.map((item) => (
                      <div
                        key={item.day}
                        className="flex items-center justify-between border-b border-white/[0.07] pb-3 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center gap-3">
                          <Clock className="h-4 w-4 text-lime-400" />
                          <span className="text-sm font-medium text-slate-200">
                            {item.day}
                          </span>
                        </div>
                        <span className="text-sm text-slate-300">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="rounded-3xl border border-white/10 bg-[#0d0d12] p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-white">
                    Suivez-nous
                  </h3>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {site.social.facebook && (
                      <Link
                        href={site.social.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-lime-400/35 hover:bg-lime-400/[0.06]"
                      >
                        <Globe className="h-4 w-4" />
                        Facebook
                      </Link>
                    )}
                    {site.social.linkedin && (
                      <Link
                        href={site.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-lime-400/35 hover:bg-lime-400/[0.06]"
                      >
                        <Globe className="h-4 w-4" />
                        LinkedIn
                      </Link>
                    )}
                    {site.social.instagram && (
                      <Link
                        href={site.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-lime-400/35 hover:bg-lime-400/[0.06]"
                      >
                        <Globe className="h-4 w-4" />
                        Instagram
                      </Link>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d12] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Où nous trouver
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Venez nous rencontrer dans notre bureau au cœur de Paris.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-6">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-sm">
              <iframe
                title="Achat Avis Google - 23 Rue des Grands Augustins, 75006 Paris"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2159!2d2.3456!3d48.8534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d5c4b4c3c5%3A0xc1c3c3c3c3c3c3c3!2s23%20Rue%20des%20Grands%20Augustins%2C%2075006%20Paris!5e0!3m2!1sfr!2sfr!4v1690000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-yellow-300/[0.06] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ce que disent nos clients
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Ils nous font confiance pour améliorer leur e-réputation.
            </p>
          </AnimatedSection>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Pierre L.",
                role: "Plombier, Paris",
                image: "/images/testimonials/pierre.jpg",
                text: "Depuis qu'on partage le lien de collecte après chaque chantier, nos avis Google naturels ont doublé en 4 mois. Nos clients nous recommandent spontanément.",
              },
              {
                name: "Sophie M.",
                role: "Coiffeuse, Lyon",
                image: "/images/testimonials/sophie.jpg",
                text: "Le tableau de bord me fait gagner un temps fou. Je réponds aux avis en quelques minutes et ma note Google s'est stabilisée au-dessus de 4,7.",
              },
              {
                name: "Jean-Marc D.",
                role: "Restaurateur, Marseille",
                image: "/images/testimonials/jean-marc.jpg",
                text: "Enfin une approche honnête. Pas de faux avis, juste la vraie voix de nos clients. Notre e-réputation est solide et durable.",
              },
            ].map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#0d0d12] p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm text-slate-300">"{testimonial.text}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lime-400/[0.06] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Nous sommes là pour vous
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Une équipe dédiée pour vous accompagner à chaque étape.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MessageCircle,
                title: "Support réactif",
                description: "Réponse sous 24h ouvrées par email ou téléphone.",
              },
              {
                icon: Clock,
                title: "Délais respectés",
                description: "Mise en place rapide de votre stratégie d'avis.",
              },
              {
                icon: Shield,
                title: "Accompagnement",
                description: "Un conseiller dédié pour chaque client.",
              },
              {
                icon: Globe,
                title: "100% français",
                description: "Une équipe basée en France, à votre écoute.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div className="h-full rounded-3xl bg-[#0d0d12] p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10">
                      <Icon className="h-6 w-6 text-lime-300" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Tout ce qu'il faut savoir sur le contact et nos services.
            </p>
          </AnimatedSection>

          <div className="mt-6 space-y-3">
            {contactFaqs.map((f, i) => (
              <AnimatedSection key={f.q} delay={i * 0.05}>
                <details
                  className="group rounded-2xl bg-[#0d0d12] p-5 shadow-sm transition hover:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-white">
                    {f.q}
                    <span className="ml-4 text-slate-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-300">{f.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Prêt à améliorer votre e-réputation ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Rejoignez plus de 2 000 entreprises qui nous font confiance.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-lime-400/[0.06]0 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-400 hover:shadow-xl"
              >
                Faire une demande
              </Link>
              <Link
                href="/tarifs"
                className="rounded-full border border-slate-600 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-slate-800"
              >
                Voir les tarifs
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
