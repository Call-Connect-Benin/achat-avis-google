import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  desaturate?: boolean;
};

export default function MediaImage({
  src,
  alt,
  sizes = "100vw",
  className = "",
  priority,
  desaturate = true,
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${desaturate ? "saturate-[0.85]" : ""}`}
      />
      {desaturate && (
        <div className="pointer-events-none absolute inset-0 bg-slate-900/10" />
      )}
    </div>
  );
}
