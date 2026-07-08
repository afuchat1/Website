import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { PRODUCT_DATA } from '@/data/products';
import {
  illSecAbout, illSecBrand, illSecCareers, illSecContact,
  illSecEnterprise, illSecHelp, illSecIdentity, illSecLeadership,
  illSecPress, illSecSecurity, illSecSitemap,
} from '@/data/illustrations';

interface GenericPageProps {
  title: string;
  type: string;
}


const PAGE_CONTENT: Record<string, {
  accent: string;
  sections: { heading: string; body: string }[];
  illustration?: string;
}> = {
  about: {
    accent: '#1F95FF',
    illustration: illSecAbout,
    sections: [
      { heading: 'Who we are', body: 'AfuChat Technologies Limited is a technology company founded with a single belief: powerful tools should be accessible to everyone. We build standalone products that excel in their respective categories — from intelligent assistants to seamless messaging.' },
      { heading: 'Our mission', body: "We believe that the best software empowers people to do their best work and live their best lives. Our mission is to build tools that are intuitive, beautiful, and deeply useful. Each product we create is designed to solve a specific problem brilliantly, allowing anyone in the world to adopt what they need without friction." },
      { heading: 'How we build', body: 'Every product we ship starts with a focus on craft and utility. While our products can work together seamlessly, each is designed to stand entirely on its own merit. This independent thinking ensures we never compromise on quality for the sake of forced integration.' },
    ],
  },
  leadership: {
    accent: '#6C63FF',
    illustration: illSecLeadership,
    sections: [
      { heading: 'Our philosophy', body: 'We structure our teams like independent startups. Each product has its own leadership, engineering, and design resources, giving them the autonomy to move fast and make the best decisions for their specific users.' },
      { heading: 'Leadership team', body: 'Our leadership team brings together decades of experience in consumer internet, enterprise software, and applied AI. We are united by a shared vision: that people deserve digital tools as seamless and well-designed as the physical world they inhabit.' },
      { heading: 'Our values', body: "Privacy is a right. Speed is respect for the user's time. Security is the floor, not the ceiling. We hold these values in every product decision, every API design, and every hire we make." },
    ],
  },
  enterprise: {
    accent: '#1F95FF',
    illustration: illSecEnterprise,
    sections: [
      { heading: 'Enterprise-grade products', body: 'AfuChat offers dedicated enterprise plans with advanced security controls, custom domain support, audit logging, and dedicated infrastructure. Deploy any combination of our products within your organization with full administrative control.' },
      { heading: 'Security & compliance', body: 'Enterprise accounts include SOC 2 Type II compliance reports, data residency options, single tenant deployments, and custom data retention policies. Our security team works directly with enterprise customers to meet their specific regulatory requirements.' },
      { heading: 'Custom integrations', body: 'Our enterprise APIs give your IT team the ability to connect our products with your existing identity providers, HR systems, and business tools. SAML SSO, SCIM provisioning, and a full management API are all included.' },
    ],
  },
  security: {
    accent: '#16C784',
    illustration: illSecSecurity,
    sections: [
      { heading: 'Security by design', body: 'Security is not an add-on at AfuChat — it is the foundation every product is built on. We use AES-256 encryption for data at rest, TLS 1.3 for data in transit, and zero-knowledge architecture where applicable. This means even AfuChat employees cannot read your private data.' },
      { heading: 'Two-factor authentication', body: 'Every account supports TOTP-based two-factor authentication and hardware security keys. We strongly recommend enabling 2FA. For enterprise accounts, 2FA can be enforced across the entire organization with a single policy change.' },
      { heading: 'Vulnerability disclosure', body: 'We operate a responsible disclosure program for security researchers. If you discover a vulnerability in any AfuChat product, please contact our security team. We commit to acknowledging reports within 24 hours and providing a timeline for remediation.' },
    ],
  },
  contact: {
    accent: '#14B8A6',
    illustration: illSecContact,
    sections: [
      { heading: 'Get in touch', body: "We'd love to hear from you. Whether you have a question about a product, a partnership inquiry, a press request, or just want to say hello — our team is here." },
      { heading: 'Support', body: 'For product support, please visit our Help Center. Our support team responds within 4 hours on business days and within 24 hours on weekends. Enterprise customers have access to dedicated support with a guaranteed 1-hour SLA.' },
      { heading: 'Business inquiries', body: 'For partnership, enterprise, and media inquiries, please reach out to us at business@afuchat.com. We typically respond within one business day.' },
    ],
  },
  careers: {
    accent: '#16C784',
    illustration: illSecCareers,
    sections: [
      { heading: 'Build the future', body: 'We are looking for people who want to build digital products used by millions — engineers, designers, and operators who care about craft, speed, and the details that make software feel effortless.' },
      { heading: 'How we work', body: 'Small autonomous teams own entire products end-to-end. We favor shipping over process, and we default to giving people real ownership early. Remote-friendly, with hubs in Hong Kong, Singapore, and London.' },
      { heading: 'Benefits', body: 'Competitive pay and equity, fully covered health coverage, flexible time off, and a learning budget for every employee. We also give every team member free access to all our premium products.' },
    ],
  },
  press: {
    accent: '#3B82F6',
    illustration: illSecPress,
    sections: [
      { heading: 'Media resources', body: 'Journalists and content creators can find our logo assets, product screenshots, and executive bios in our press kit. For interview requests or embargoed briefings, reach out to our communications team directly.' },
      { heading: 'Recent coverage', body: 'AfuChat has been featured in leading technology and business publications covering our approach to building fast, focused digital tools.' },
      { heading: 'Press contact', body: 'For all media inquiries, email press@afuchat.com. We aim to respond to journalists within one business day.' },
    ],
  },
  brand: {
    accent: '#8B5CF6',
    illustration: illSecBrand,
    sections: [
      { heading: 'Our visual identity', body: 'The AfuChat brand is built around a single idea — clarity. Our logo, color palette, and typography are designed to feel consistent across our product suite while giving each app its own distinct personality.' },
      { heading: 'Logo usage', body: 'Please do not alter, recolor, or distort the AfuChat logo. Maintain clear space around it equal to the height of the logomark, and always use the provided source files rather than recreating it.' },
      { heading: 'Download assets', body: 'Approved logos, color specifications, and typography guidelines are available for partners and press upon request at brand@afuchat.com.' },
    ],
  },
  help: {
    accent: '#14B8A6',
    illustration: illSecHelp,
    sections: [
      { heading: 'How can we help?', body: 'Our Help Center covers account setup, billing, security, and troubleshooting for all AfuChat products. Most answers are available instantly through search.' },
      { heading: 'Still stuck?', body: 'If you cannot find what you need, contact our support team from within any AfuChat product, or email support@afuchat.com. We respond within 4 hours on business days.' },
      { heading: 'Enterprise support', body: 'Enterprise customers have access to a dedicated support channel with a guaranteed 1-hour response SLA, available through your account administrator.' },
    ],
  },
  login: {
    accent: '#1F95FF',
    illustration: illSecIdentity,
    sections: [
      { heading: 'Welcome back', body: 'Sign in to access your AfuChat products. If you use multiple products, your single account gives you seamless access to everything.' },
      { heading: 'Forgot your password?', body: 'Use the password recovery link on the sign-in screen. For accounts with two-factor authentication enabled, you will need access to your registered device.' },
    ],
  },
  sitemap: {
    accent: '#64748B',
    illustration: illSecSitemap,
    sections: [
      { heading: 'Find your way around', body: 'A complete directory of every page across the AfuChat corporate site — products, company information, developer resources, and legal documentation.' },
      { heading: 'Need something else?', body: 'If you cannot find a page you are looking for, visit our Help Center or contact our team directly.' },
    ],
  },
  privacy: {
    accent: '#1F95FF',
    sections: [
      { heading: 'Information We Collect', body: 'We collect information to provide better services to all our users. This includes basic details like your account information, as well as usage data when you interact with our products.' },
      { heading: 'How We Use Your Data', body: 'Your privacy is paramount. We use the information we collect strictly to operate, maintain, and improve our services. We do not sell your personal data to third parties.' },
      { heading: 'Data Security', body: 'We implement industry-standard security measures, including end-to-end encryption where applicable, to protect your personal information against unauthorized access, alteration, or destruction.' },
    ],
  },
  terms: {
    accent: '#6C63FF',
    sections: [
      { heading: 'Acceptance of Terms', body: 'By accessing or using our products, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access our services.' },
      { heading: 'User Responsibilities', body: 'You are responsible for your use of the services and for any content you provide. You must ensure your account information remains accurate and secure.' },
      { heading: 'Service Modifications', body: 'We reserve the right to modify or discontinue any part of our services at any time. We will provide reasonable notice of significant changes whenever possible.' },
    ],
  },
  cookies: {
    accent: '#F59E0B',
    sections: [
      { heading: 'What Are Cookies', body: 'Cookies are small text files stored on your device when you visit our website. They help us recognize your device and remember your preferences.' },
      { heading: 'How We Use Them', body: 'We use cookies for essential functions like authentication, as well as for analytics to understand how people interact with our site so we can improve it.' },
      { heading: 'Your Choices', body: 'You can control cookie settings through your browser preferences. However, disabling certain cookies may limit your ability to use some features of our products.' },
    ],
  },
};

const fallback = {
  accent: '#1F95FF',
  sections: [
    { heading: 'Overview', body: 'AfuChat Technologies Limited is committed to providing secure, reliable, independent products for all your digital needs. This section covers important information relevant to our platform and its use.' },
    { heading: 'Our commitment', body: 'We are constantly updating our resources to provide the most accurate and complete information. Our terms, policies, and company information are structured to provide full transparency about how we operate and how we handle your data.' },
  ],
};

export default function GenericPage({ title, type }: GenericPageProps) {
  const content = PAGE_CONTENT[type.toLowerCase()] ?? PAGE_CONTENT[title.toLowerCase().replace(/\s+/g, '')] ?? fallback;
  const accent = content.accent;

  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: accent }}>AfuChat</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight">{title}</h1>
            <p className="text-lg text-white/50 max-w-xl leading-relaxed">
              {content.sections[0]?.body}
            </p>
          </motion.div>
          {'illustration' in content && content.illustration && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
              <img
                src={content.illustration}
                alt={title}
                className="w-full rounded-3xl shadow-2xl"
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Detailed sections */}
      <div className="max-container container-pad py-16">
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
      {type !== 'legal' && type !== 'privacy' && type !== 'terms' && type !== 'cookies' && (
        <div className="max-container container-pad py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: accent }}>Our Products</p>
            <h2 className="text-2xl font-bold text-white tracking-tight">Explore our products</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
            {PRODUCT_DATA.slice(0, 4).map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Link href={p.path}>
                  <div className="flex items-center gap-3 group">
                    <img src={p.icon3d} alt={`${p.name} icon`} className="w-9 h-9 object-contain flex-shrink-0" />
                    <span className="text-sm text-white/50 group-hover:text-white transition-colors">{p.name}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="max-container container-pad py-16">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Ready to get started?</h2>
          <p className="text-white/40 text-sm mb-6">Create your free account and start using any of our products instantly.</p>
          <Link
            href="/signup"
            className="inline-block px-6 py-3 text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: accent }}
          >
            Create free account →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
