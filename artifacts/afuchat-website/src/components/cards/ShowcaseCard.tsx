'use client';

import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight, ExternalLink, Github, MoveUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

type ShowcaseCardProps = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
  index: number;
  href: string;
  hrefLabel: string;
  hrefExternal?: boolean;
  secondaryHref?: string;
  secondaryLabel?: string;
  github?: string;
  icon: LucideIcon;
  illustration?: string;
  illustrationAlt?: string;
};

export default function ShowcaseCard({
  name,
  category,
  tagline,
  description,
  features,
  color,
  index,
  href,
  hrefLabel,
  hrefExternal = false,
  secondaryHref,
  secondaryLabel,
  github,
  icon: Icon,
  illustration,
  illustrationAlt,
}: ShowcaseCardProps) {
  const reducedMotion = useReducedMotion();
  const visibleFeatures = features.slice(0, 4);
  const remainingFeatures = features.length - visibleFeatures.length;

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="showcase-card group flex flex-col overflow-hidden rounded-[1.7rem] bg-transparent p-3 transition-transform hover:-translate-y-1 sm:p-4"
    >
      <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden sm:min-h-[300px]">
        {illustration ? (
          <img
            src={illustration}
            alt={illustrationAlt ?? `${name} artwork`}
            loading={index > 1 ? 'lazy' : 'eager'}
            decoding="async"
            className="max-h-[225px] w-full scale-[1.08] object-contain transition-transform duration-500 group-hover:scale-[1.14] sm:max-h-[285px]"
          />
        ) : (
          <Icon
            aria-hidden="true"
            className="h-24 w-24 transition-transform duration-500 group-hover:scale-110"
            style={{ color }}
            strokeWidth={1.1}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-5 sm:px-3 sm:pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <Icon className="h-6 w-6 shrink-0" style={{ color }} strokeWidth={1.6} />
          </div>
          <span className="studio-mono text-[10px] text-[#7890a7]">0{index + 1}</span>
        </div>

        {hrefExternal ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="mt-5 block">
            <h2 className="text-2xl font-semibold tracking-tight text-[#e6f1ff] transition-colors group-hover:text-[#2b5ea4]">{name}</h2>
            <p className="mt-2 text-sm font-medium" style={{ color }}>{tagline}</p>
          </a>
        ) : (
          <Link href={href} className="mt-5 block">
            <h2 className="text-2xl font-semibold tracking-tight text-[#e6f1ff] transition-colors group-hover:text-[#2b5ea4]">{name}</h2>
            <p className="mt-2 text-sm font-medium" style={{ color }}>{tagline}</p>
          </Link>
        )}

        <p className="mt-3 text-sm leading-relaxed text-[#6f89a7]">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {visibleFeatures.map((feature) => (
            <span key={feature} className="rounded-full bg-white px-2.5 py-1.5 text-[11px] text-[#5d7694]">
              {feature}
            </span>
          ))}
          {remainingFeatures > 0 && (
            <span className="rounded-full bg-white px-2.5 py-1.5 text-[11px] text-[#7890a7]">
              +{remainingFeatures} more
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
          {hrefExternal ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-semibold text-[#2b5ea4]">
              {hrefLabel} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : (
            <Link href={href} className="flex items-center gap-2 text-xs font-semibold text-[#2b5ea4]">
              {hrefLabel} <MoveUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
          {secondaryHref && secondaryLabel && (
            <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-[#6f89a7] hover:text-[#2b5ea4]">
              {secondaryLabel} <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${name} on GitHub`} className="text-[#6f89a7] hover:text-[#2b5ea4]">
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}