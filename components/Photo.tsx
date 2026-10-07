import Image from "next/image";

export type Tone = "glass" | "dusk" | "stone" | "sea";

// Architectural gradient placeholders, used until real photos are set in lib/site.ts.
const tones: Record<Tone, string> = {
  glass:
    "linear-gradient(160deg, #3b4a48 0%, #1d2524 45%, #0f1312 100%), radial-gradient(120% 80% at 80% 0%, rgba(200,187,168,0.35), transparent 60%)",
  dusk:
    "linear-gradient(170deg, #4a4338 0%, #262321 50%, #121413 100%), radial-gradient(100% 70% at 20% 10%, rgba(200,187,168,0.3), transparent 60%)",
  stone:
    "linear-gradient(180deg, #34383a 0%, #202425 55%, #121514 100%), radial-gradient(90% 60% at 50% 100%, rgba(169,173,167,0.18), transparent 70%)",
  sea:
    "linear-gradient(165deg, #3c4e47 0%, #1f2a27 50%, #101413 100%), radial-gradient(100% 70% at 85% 15%, rgba(141,166,154,0.35), transparent 60%)",
};

export function Photo({
  src,
  alt,
  tone = "glass",
  priority = false,
  sizes = "100vw",
  className = "",
}: {
  src?: string | null;
  alt: string;
  tone?: Tone;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <div role="img" aria-label={alt} className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0" style={{ background: tones[tone] }} />
      {/* Window mullions */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "22% 100%, 100% 34%",
        }}
      />
      {/* Light streak across glass */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.08) 42%, transparent 48%, transparent 55%, rgba(255,255,255,0.05) 60%, transparent 66%)",
        }}
      />
    </div>
  );
}
