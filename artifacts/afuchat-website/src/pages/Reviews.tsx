import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ShieldCheck, MessageCircle, Cloud, Play, PenLine, Sparkles, ShoppingBag, Newspaper } from 'lucide-react';

const REVIEWS_DATA = [
  { 
    quote: "AfuMail completely changed how our agency handles client communication. The custom domains are easy to set up, and the anti-spam is aggressive without false positives. It's the most reliable standalone email client we've used.", 
    author: "Elena R.", 
    role: "Freelance Photographer", 
    product: "AfuMail",
    icon: ShieldCheck,
    color: "#1F95FF"
  },
  { 
    quote: "We use AfuChat for our entire 40-person remote team. The HD video calls never drop, even on bad connections, and the channel organization is exactly what we needed to keep projects strictly separated.", 
    author: "Sarah K.", 
    role: "Remote Team Lead", 
    product: "AfuChat",
    icon: MessageCircle,
    color: "#6C63FF"
  },
  { 
    quote: "AfuCloud is blazingly fast. I upload massive RAW video files daily and the sync speed outpaces every competitor I've tried. I love that it focuses purely on being a great cloud drive.", 
    author: "Marcus T.", 
    role: "Video Editor", 
    product: "AfuCloud",
    icon: Cloud,
    color: "#0EA5E9"
  },
  { 
    quote: "As a small business owner, AfuAI has saved me countless hours. It helps me draft client proposals and organizes my workflows independently. It's like having a dedicated employee.", 
    author: "David M.", 
    role: "Small Business Owner", 
    product: "AfuAI",
    icon: Sparkles,
    color: "#F59E0B"
  },
  { 
    quote: "AfuMovies is my go-to for weekend streaming. The 4K HDR quality is pristine, the recommendations are actually accurate, and I love that it's just a great streaming service without any unnecessary bloat.", 
    author: "Jessica L.", 
    role: "Film Enthusiast", 
    product: "AfuMovies",
    icon: Play,
    color: "#EF4444"
  },
  { 
    quote: "I started writing on AfuBlog because of the distraction-free typography. It's just a beautiful place to write, pure and simple. The analytics tools give me exactly what I need without overwhelming me.", 
    author: "Omar B.", 
    role: "Author & Critic", 
    product: "AfuBlog",
    icon: PenLine,
    color: "#8B5CF6"
  },
  { 
    quote: "The checkout process on AfuMall is seamless. I run a boutique clothing store, and selling our products here has increased our conversion rate by 20% simply because the interface is so fast.", 
    author: "Chloe S.", 
    role: "Boutique Owner", 
    product: "AfuMall",
    icon: ShoppingBag,
    color: "#F97316"
  },
  { 
    quote: "AfuNews has replaced three different apps for me. It pulls exactly the global news I need, filters out the noise, and lets me read offline during my commute. An absolute essential.", 
    author: "James W.", 
    role: "Financial Analyst", 
    product: "AfuNews",
    icon: Newspaper,
    color: "#10B981"
  }
];

export default function Reviews() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-16 pb-12 sm:pt-24 sm:pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-pink-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">Customer Stories</p>
          <h1 className="text-[32px] leading-[1.1] sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Loved by people who<br />care about craft.
          </h1>
          <p className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
            Millions of individuals and businesses use our independent products every day. Here is what they have to say about speed, security, and design.
          </p>
        </motion.div>
      </div>

      {/* Reviews Grid */}
      <div className="max-container container-pad pb-20 sm:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REVIEWS_DATA.map((review, i) => {
            const Icon = review.icon;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-3xl hover:bg-white/10 transition-colors flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10" style={{ color: review.color }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold">{review.product}</p>
                    <div className="flex gap-1 mt-0.5">
                      {[1, 2, 3, 4, 5].map(star => (
                        <svg key={star} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed mb-8 flex-1">
                  "{review.quote}"
                </p>
                
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white font-bold text-base">{review.author}</p>
                  <p className="text-white/40 text-sm mt-1">{review.role}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-container container-pad pb-20 sm:pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center bg-white/5 border border-white/10 rounded-3xl p-10 sm:p-16">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight leading-tight">Join millions of happy users.</h2>
          <p className="text-white/55 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Create an account in 30 seconds and start using any of our standalone products today.
          </p>
          <Link href="/signup" className="inline-block px-8 py-4 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity">
            Create free account →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}