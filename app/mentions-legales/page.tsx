import { site } from "@/lib/site";

const { company } = site;

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales et informations légales d'Achat Avis Google.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight text-white">
        Mentions légales
      </h1>

      <div className="mt-8 space-y-6 text-sm text-slate-200">
        <div>
          <h2 className="text-lg font-semibold text-white">
            1. Éditeur du site
          </h2>
          <p className="mt-2">
            {company.legalName}
            <br />
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
            <br />
            {company.address.country}
            <br />
            SIRET : {company.siret}
            <br />
            TVA intracommunautaire : {company.tva}
            <br />
            Téléphone :{" "}
            <a href={`tel:${company.phone}`} className="text-slate-200">
              {company.phoneDisplay}
            </a>
            <br />
            Email :{" "}
            <a href={`mailto:${company.email}`} className="text-slate-200">
              {company.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            2. Directeur de la publication
          </h2>
          <p className="mt-2">
            Le représentant légal de {company.legalName}.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            3. Hébergement
          </h2>
          <p className="mt-2">
            Le site est hébergé sur une infrastructure cloud conforme aux
            standards de sécurité en vigueur. Coordonnées communiquées sur
            simple demande à {company.email}.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            4. Propriété intellectuelle
          </h2>
          <p className="mt-2">
            L'ensemble des contenus (textes, logos, illustrations) est la
            propriété de {company.legalName} sauf mentions contraires. Toute
            reproduction sans autorisation est interdite.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            5. Avis des consommateurs
          </h2>
          <p className="mt-2">
            {company.legalName} promeut exclusivement la collecte d'avis
            authentiques émanant de clients réels, conformément à la
            législation applicable (notamment le Règlement (UE) 2024/825 sur
            les avis de consommateurs et le Code de la consommation français).
            Aucun avis fictif ou incité n'est produit ou vendu.
          </p>
        </div>
      </div>
    </section>
  );
}
