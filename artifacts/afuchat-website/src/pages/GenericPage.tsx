import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { PRODUCT_DATA } from '@/data/products';

interface GenericPageProps {
  title: string;
  type: string;
}

// Content map for well-detailed pages
const PAGE_CONTENT: Record<string, { gradient: string; accent: string; sections: { heading: string; body: string }[]; illustration?: string }> = {
  about: {
    gradient: `radial-gradient(ellipse at 70% 20%, rgba(14,80,200,0.40) 0%, transparent 55%), radial-gradient(ellipse at 20% 70%, rgba(80,30,200,0.25) 0%, transparent 50%), #060e22`,
    accent: '#1F95FF',
    illustration: '/ill-social.jpg',
    sections: [
      { heading: 'Who we are', body: 'AfuChat Technologies Limited is a technology company founded with a single belief: your digital life should feel like one continuous experience, not a fragmented collection of disconnected apps. We build products that share a single identity, a single intelligence layer, and a single purpose — to make the digital world effortless for everyone.' },
      { heading: 'Our mission', body: 'We believe that the future of the internet is unified. Too many platforms demand separate accounts, separate passwords, and separate subscriptions for services that should naturally work together. AfuChat exists to fix that. Our mission is to build the world\'s most connected digital ecosystem — one where communication, creativity, entertainment, and commerce flow without friction.' },
      { heading: 'How we build', body: 'Every product we ship starts with the same question: how does this make the ecosystem better as a whole? We think in terms of integration before isolation. When AfuAI learns something, every product benefits. When you upload to AfuCloud, AfuChat can access it instantly. This interconnected thinking is not an afterthought — it is the architecture.' },
    ],
  },
  company: {
    gradient: `radial-gradient(ellipse at 70% 20%, rgba(14,80,200,0.40) 0%, transparent 55%), radial-gradient(ellipse at 20% 70%, rgba(80,30,200,0.25) 0%, transparent 50%), #060e22`,
    accent: '#6C63FF',
    illustration: '/ill-community2.jpg',
    sections: [
      { heading: 'AfuChat Technologies Limited', body: 'We are a global technology company building the next generation of connected digital services. Our headquarters are in Hong Kong, with engineering and product teams distributed across Asia, Europe, and North America.' },
      { heading: 'Leadership', body: 'Our leadership team brings together decades of experience in consumer internet, enterprise software, and applied AI. We are united by a shared vision: that people deserve a digital ecosystem as seamless and well-designed as the physical world they inhabit.' },
      { heading: 'Our values', body: 'Privacy is a right, not a feature. Speed is respect for the user\'s time. Security is the floor, not the ceiling. Simplicity is the hardest thing to build. We hold these values in every product decision, every API design, and every hire we make.' },
    ],
  },
  enterprise: {
    gradient: `radial-gradient(ellipse at 30% 20%, rgba(100,30,200,0.35) 0%, transparent 50%), radial-gradient(ellipse at 80% 60%, rgba(20,60,180,0.28) 0%, transparent 50%), #07091e`,
    accent: '#1F95FF',
    illustration: '/ill-devteam.jpg',
    sections: [
      { heading: 'Enterprise-grade ecosystem', body: 'AfuChat offers dedicated enterprise plans with advanced security controls, custom domain support, audit logging, and dedicated infrastructure. Deploy the entire AfuChat ecosystem within your organization under your own brand with full administrative control.' },
      { heading: 'Security & compliance', body: 'Enterprise accounts include SOC 2 Type II compliance reports, data residency options, single tenant deployments, and custom data retention policies. Our security team works directly with enterprise customers to meet their specific regulatory requirements.' },
      { heading: 'Custom integrations', body: 'Our enterprise API gives your IT team the ability to connect AfuChat with your existing identity providers, HR systems, and business tools. SAML SSO, SCIM provisioning, and a full management API are all included.' },
    ],
  },
  security: {
    gradient: `radial-gradient(ellipse at 70% 40%, rgba(15,60,180,0.40) 0%, transparent 55%), radial-gradient(ellipse at 20% 70%, rgba(20,140,180,0.22) 0%, transparent 50%), #050d1f`,
    accent: '#16C784',
    illustration: '/ill-auth.jpg',
    sections: [
      { heading: 'Security by design', body: 'Security is not an add-on at AfuChat — it is the foundation every product is built on. We use AES-256 encryption for data at rest, TLS 1.3 for data in transit, and zero-knowledge architecture for messages and files. This means even AfuChat employees cannot read your data.' },
      { heading: 'Two-factor authentication', body: 'Every AfuMail account supports TOTP-based two-factor authentication and hardware security keys. We strongly recommend enabling 2FA. For enterprise accounts, 2FA can be enforced across the entire organization with a single policy change.' },
      { heading: 'Vulnerability disclosure', body: 'We operate a responsible disclosure program for security researchers. If you discover a vulnerability in any AfuChat product, please contact our security team. We commit to acknowledging reports within 24 hours and providing a timeline for remediation.' },
    ],
  },
  contact: {
    gradient: `radial-gradient(ellipse at 55% 90%, rgba(0,180,170,0.25) 0%, transparent 45%), radial-gradient(ellipse at 15% 65%, rgba(90,40,200,0.35) 0%, transparent 52%), #060d24`,
    accent: '#14B8A6',
    illustration: '/ill-appeco.png',
    sections: [
      { heading: 'Get in touch', body: 'We\'d love to hear from you. Whether you have a question about a product, a partnership inquiry, a press request, or just want to say hello — our team is here.' },
      { heading: 'Support', body: 'For product support, please visit our Help Center. Our support team responds within 4 hours on business days and within 24 hours on weekends. Enterprise customers have access to dedicated support with a guaranteed 1-hour SLA.' },
      { heading: 'Business inquiries', body: 'For partnership, enterprise, and media inquiries, please reach out to us at business@afuchat.com. We typically respond within one business day.' },
    ],
  },
};

const fallback = {
  gradient: `radial-gradient(ellipse at 60% 30%, rgba(14,80,200,0.40) 0%, transparent 55%), #060e22`,
  accent: '#1F95FF',
  sections: [
    { heading: 'Overview', body: 'AfuChat Technologies Limited is committed to providing a secure, seamless, and integrated ecosystem for all your digital needs. This section covers important information relevant to our platform and its use.' },
    { heading: 'Our commitment', body: 'We are constantly updating our resources to provide the most accurate and complete information. Our terms, policies, and company information are structured to provide full transparency about how we operate and how we handle your data.' },
  ],
};

export default function GenericPage({ title, type }: GenericPageProps) {
  const content = PAGE_CONTENT[type.toLowerCase()] || PAGE_CONTENT[title.toLowerCase().replace(/\s+/g, '')] || fallback;

  return (
    <div
      className="w-full min-h-screen"
      style={{ background: content.gradient }}
    >
      {/* Hero */}
      <div className="max-container container-pad pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: content.accent }}>AfuChat</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight">{title}</h1>
            <p className="text-lg text-white/50 max-w-xl leading-relaxed">
              {content.sections[0]?.body}
            </p>
          </motion.div>
          {content.illustration && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
              <img src={content.illustration} alt={title} className="w-full rounded-3xl shadow-2xl"
                onError={(e)=>{(e.target as HTMLImageElement).style.display='none';}} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Detailed sections */}
      <div className="max-container container-pad py-16 border-t border-white/8">
        <div className="flex flex-col gap-16 max-w-3xl">
          {content.sections.slice(1).map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">{s.heading}</h2>
              <p className="text-white/50 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Related products */}
      {type !== 'legal' && (
        <div className="max-container container-pad py-16 border-t border-white/8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: content.accent }}>Our Products</p>
            <h2 className="text-2xl font-bold text-white tracking-tight">Explore the ecosystem</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
            {PRODUCT_DATA.slice(0, 4).map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <Link href={p.path}>
                    <div className="flex items-center gap-3 group">
                      <Icon className="w-4 h-4 flex-shrink-0" style={{ color: p.color }} />
                      <span className="text-sm text-white/50 group-hover:text-white transition-colors">{p.name}</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="max-container container-pad py-16 border-t border-white/8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Ready to join AfuChat?</h2>
          <p className="text-white/40 text-sm mb-6">Create your free AfuMail account and access all eight services instantly.</p>
          <Link href="/signup" className="inline-block px-6 py-3 text-white font-bold text-sm rounded-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: content.accent }}>
            Create free account →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
