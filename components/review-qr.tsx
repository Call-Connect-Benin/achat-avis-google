"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function ReviewQr() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [qr, setQr] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const value = url.trim();
    if (!value) {
      const id = setTimeout(() => {
        setQr(null);
        setError("");
      }, 0);
      return () => clearTimeout(id);
    }
    let cancelled = false;
    QRCode.toDataURL(value, { width: 320, margin: 2 })
      .then((data) => {
        if (!cancelled) {
          setQr(data);
          setError("");
        }
      })
      .catch(() => {
        if (!cancelled) {
          setQr(null);
          setError("Lien invalide. Collez une URL valide (https://…).");
        }
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  const reviewLink = url.trim();
  const shareText = message.trim();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-5">
        <div>
          <label
            htmlFor="review-url"
            className="block text-sm font-medium text-slate-200"
          >
            Lien de dépôt d'avis Google
          </label>
          <input
            id="review-url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://search.google.com/local/writepanel?placeid=…"
            className="mt-1 w-full rounded-lg border border-white/20 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
          />
          <p className="mt-1 text-xs text-slate-400">
            Récupérez votre lien officiel dans votre tableau de bord Google
            Business Profile (« Partager le profil » → « Écrire un avis »).
          </p>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-200"
          >
            Message d'accompagnement (optionnel)
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Merci de votre confiance ! Votre avis nous aide à progresser."
            className="mt-1 w-full rounded-lg border border-white/20 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        {reviewLink && !error && (
          <div>
            <p className="text-sm font-medium text-slate-200">Lien à partager</p>
            <code className="mt-1 block break-all rounded-lg bg-[#17171f] px-3 py-2 text-xs text-slate-200">
              {reviewLink}
            </code>
            {shareText && (
              <p className="mt-2 text-sm text-slate-300">
                Accompagnement : “{shareText}”
              </p>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-start">
        <div className="rounded-2xl border border-white/10 bg-[#0d0d12] p-6 shadow-sm">
          {qr ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={qr} alt="QR code vers votre lien d'avis" width={240} height={240} />
          ) : (
            <div className="grid h-[240px] w-[240px] place-items-center rounded-xl bg-[#17171f] text-center text-sm text-slate-400">
              Le QR code s'affichera ici
            </div>
          )}
        </div>
        <p className="mt-3 max-w-[240px] text-center text-xs text-slate-400">
          Imprimez ce QR code sur vos factures, vos cartes de visite ou votre
          vitrine pour inviter vos vrais clients à laisser un avis.
        </p>
        {qr && (
          <a
            href={qr}
            download="avis-qr.png"
            className="mt-4 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Télécharger le QR code
          </a>
        )}
      </div>
    </div>
  );
}
