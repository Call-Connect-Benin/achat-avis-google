import Link from "next/link";
import LoginForm from "@/components/auth/login-form";

export const metadata = { title: "Connexion" };

export default function ConnexionPage() {
  return (
    <section className="mx-auto flex max-w-md flex-col px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Connexion
      </h1>
      <p className="mt-2 text-sm text-slate-300">
        Accédez à votre espace de collecte d'avis authentiques.
      </p>
      <div className="mt-8 rounded-2xl border border-white/10 bg-[#0d0d12] p-6">
        <LoginForm />
        <p className="mt-4 text-center text-sm text-slate-300">
          Pas encore de compte ?{" "}
          <Link href="/contact" className="font-medium text-white hover:underline">
            Faire une demande de compte
          </Link>
        </p>
      </div>
    </section>
  );
}
