
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { illSecHero } from '@/data/illustrations';
import { supabase } from '@/lib/supabase';

interface Member {
  handle: string;
  display_name: string;
  avatar_url: string | null;
}

function initials(name: string) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]?.toUpperCase()).join('');
}

function useCommunity() {
  const [members, setMembers] = useState<Member[]>([]);
  const [totalMembers, setTotalMembers] = useState<number | null>(null);

  useEffect(() => {
    supabase
      .from('public_profiles')
      .select('handle, display_name, avatar_url')
      .eq('is_private', false)
      .eq('is_banned', false)
      .order('created_at', { ascending: false })
      .limit(4)
      .then(({ data, error }) => { if (!error && data) setMembers(data); });

    supabase
      .from('public_profiles')
      .select('*', { count: 'exact', head: true })
      .eq('is_private', false)
      .eq('is_banned', false)
      .then(({ count, error }) => { if (!error && count !== null) setTotalMembers(count); });
  }, []);

  return { members, totalMembers };
}

export default function HeroSection() {
  const { members, totalMembers } = useCommunity();

  return (
    <section className="relative flex items-center overflow-hidden">
      <div className="relative z-10 max-container container-pad w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center pt-8 pb-4 sm:pt-12 sm:pb-8 lg:py-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-5"
            >
              Independent products. Built for you.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-[32px] leading-[1.1] sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight"
            >
              Powerful tools.<br />Standalone brilliance.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Zero friction.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-white/55 mb-6 sm:mb-8 max-w-md leading-relaxed"
            >
              Whether you need blazingly fast chat, secure cloud storage, or an intelligent assistant — pick what you need. They work perfectly apart, and even better together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-8 sm:mb-10"
            >
              <Link href="/products" className="flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25">
                Explore Products →
              </Link>
              <a href="https://web.afuchat.com/register" className="flex items-center justify-center px-7 py-3.5 text-white/70 font-medium text-sm hover:text-white transition-colors border border-white/10 rounded-full sm:border-transparent sm:bg-transparent">
                Create free account →
              </a>
            </motion.div>
            {members.length > 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {members.map(member =>
                    member.avatar_url ? (
                      <img key={member.handle} src={member.avatar_url} alt={member.display_name} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-[#040c1e] object-cover bg-white/10" />
                    ) : (
                      <div key={member.handle} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-[#040c1e] bg-gradient-to-br from-[#1F7AFF] to-[#6C63FF] flex items-center justify-center text-white text-[9px] font-bold">
                        {initials(member.display_name)}
                      </div>
                    )
                  )}
                </div>
                <span className="text-white/40 text-xs sm:text-sm">
                  {totalMembers !== null ? `Trusted by ${totalMembers.toLocaleString()}+ real members` : 'Trusted by real members'}
                </span>
              </motion.div>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center lg:justify-end mt-4 sm:mt-0"
          >
            <img src={illSecHero} alt="AfuChat's independent products, connected" className="w-full max-w-[280px] sm:max-w-md lg:max-w-lg drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
