import Link from "next/link";
import LoginForm from "@/components/auth/login-form";

export const metadata = { title: "Connexion" };

export default function ConnexionPage() {
  return (
    <section className="mx-auto flex max-w-md flex-col px-4 py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Connexion
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        Accédez à votre espace de collecte d'avis authentiques.
      </p>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <LoginForm />
        <p className="mt-4 text-center text-sm text-slate-600">
          Pas encore de compte ?{" "}
          <Link href="/contact" className="font-medium text-slate-900 hover:underline">
            Faire une demande de compte
          </Link>
        </p>
      </div>
    </section>
  );
}
