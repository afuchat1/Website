'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { illSecDeveloper } from '@/data/illustrations';
import Link from 'next/link';

export default function DeveloperSection() {
  return (
    <section className="max-container studio-section">
      <div className="grid items-center gap-12 border-y border-white/[.08] py-12 lg:grid-cols-[1fr_.8fr] lg:gap-24 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold leading-tight text-[#e6f1ff] sm:text-5xl">Build on AfuChat.<br /><span className="text-[#8be7c4]">Ship faster.</span></h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#91a8c4]">REST and GraphQL APIs, real time WebSocket events, and open source SDKs for every major platform. Build integrations in hours, not weeks.</p>
          <Link href="/developers" className="studio-button studio-button-ghost mt-8">Read the docs <ArrowUpRight className="h-4 w-4" /></Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: .1 }} className="border border-white/10 bg-[#0b1b31]/45 p-6">
          <img src={illSecDeveloper} alt="AfuChat developer platform" className="w-full" loading="lazy" decoding="async" />
        </motion.div>
      </div>
    </section>
  );
}