import { motion } from 'framer-motion';
import { Link } from 'wouter';

const REVIEWS = [
  { quote: "I switched to AfuMail because I needed a dedicated professional address. The anti-spam is flawless, and it's nice that I can optionally use it to log into AfuCloud.", author: "Elena R.", role: "Freelance Photographer", product: "AfuMail" },
  { quote: "AfuCloud is completely standalone and incredibly fast. I upload massive RAW video files daily and the sync speed is unmatched. It doesn't force me into other apps.", author: "Marcus T.", role: "Video Editor", product: "AfuCloud" },
  { quote: "We use AfuChat for our entire remote team. The HD video calls never drop, and the channel organization is exactly what we needed to keep projects separate.", author: "Sarah K.", role: "Remote Team Lead", product: "AfuChat" },
  { quote: "As a small business owner, AfuAI has saved me countless hours. It helps me draft client proposals and organizes my workflows independently.", author: "David M.", role: "Small Business Owner", product: "AfuAI" },
  { quote: "AfuMovies is my go-to for weekend streaming. The 4K HDR quality is pristine, and I love that it's just a great streaming service without any unnecessary bloat.", author: "Jessica L.", role: "Film Enthusiast", product: "AfuMovies" },
  { quote: "I started writing on AfuBlog because of the distraction-free typography. It's just a beautiful place to write, pure and simple.", author: "Omar B.", role: "Author & Critic", product: "AfuBlog" }
];

export default function ReviewsSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="relative z-10 max-container container-pad">
        <div className="text-center mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-pink-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3"
          >Wall of Love</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >Loved by millions.</motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.slice(0, 6).map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl hover:bg-white/10 transition-colors flex flex-col"
            >
              <div className="flex-1">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-[15px] sm:text-base leading-relaxed mb-6">"{review.quote}"</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="text-white font-bold text-sm">{review.author}</p>
                  <p className="text-white/40 text-xs mt-0.5">{review.role}</p>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-white/30 border border-white/10 px-2.5 py-1 rounded-full">{review.product}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-12 text-center">
          <Link href="/reviews" className="inline-block px-6 py-3 border border-white/15 text-white font-medium text-sm rounded-full hover:border-white/30 hover:bg-white/5 transition-colors">
            Read more reviews
          </Link>
        </motion.div>
      </div>
    </section>
  );
}