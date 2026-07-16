"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function LinkQr({ url }: { url: string }) {
  const [qr, setQr] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(url, { width: 200, margin: 2 })
      .then((data) => {
        if (!cancelled) setQr(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div className="flex flex-col items-center gap-2">
      {qr ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={qr} alt="QR code du lien d'avis" width={140} height={140} />
      ) : (
        <div className="h-[140px] w-[140px] animate-pulse rounded-lg bg-slate-100" />
      )}
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="text-xs font-medium text-slate-700 hover:underline"
      >
        {copied ? "Copié" : "Copier le lien"}
      </button>
    </div>
  );
}
