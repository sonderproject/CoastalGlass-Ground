import { Reveal } from "./Motion";

export function SectionHeader({
  eyebrow,
  title,
  body,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-balance md:text-6xl">
        {title}
      </h2>
      {body && <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{body}</p>}
    </Reveal>
  );
}
