import { site } from "@/lib/site";

const { company } = site;

export const metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Achat Avis Google collecte et protège vos données personnelles.",
};

export default function ConfidentialitePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight text-white">
        Politique de confidentialité
      </h1>

      <div className="mt-8 space-y-6 text-sm text-slate-200">
        <div>
          <h2 className="text-lg font-semibold text-white">
            1. Responsable du traitement
          </h2>
          <p className="mt-2">
            {company.legalName}, {company.address.street},{" "}
            {company.address.postalCode} {company.address.city},{" "}
            {company.address.country}. Contact : {company.email}.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            2. Données collectées
          </h2>
          <p className="mt-2">
            Nous collectons les données que vous nous transmettez via nos
            formulaires (nom, email, téléphone, message) ainsi que les
            informations nécessaires à la prestation (liens d'avis, paramètres
            de votre compte).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            3. Finalités
          </h2>
          <p className="mt-2">
            Ces données servent à répondre à vos demandes, fournir nos services
            de collecte et de gestion d'avis, et améliorer notre plateforme.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            4. Base légale
          </h2>
          <p className="mt-2">
            Le traitement repose sur l'exécution d'un contrat, votre consentement
            et notre intérêt légitime à améliorer nos services, conformément au
            RGPD et au Code de la consommation.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            5. Vos droits
          </h2>
          <p className="mt-2">
            Conformément au RGPD et à la loi Informatique et Libertés, vous
            disposez d'un droit d'accès, de rectification, de suppression et de
            portabilité de vos données. Pour l'exercer, écrivez à {company.email}
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            6. Conservation
          </h2>
          <p className="mt-2">
            Vos données sont conservées le temps strictement nécessaire aux
            finalités décrites, puis supprimées ou anonymisées.
          </p>
        </div>
      </div>
    </section>
  );
}
