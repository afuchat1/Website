'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import { illSecAbout, illSecBrand, illSecCareers, illSecContact, illSecEnterprise, illSecHelp, illSecLeadership, illSecPress, illSecSecurity, illSecSitemap } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';

interface GenericPageProps { title: string; type: string; }
type PageInfo = { accent: string; intro: string; sections: { heading: string; body: string }[]; illustration?: string };
const PAGE_CONTENT: Record<string, PageInfo> = {
  about: { accent: '#4da8ff', illustration: illSecAbout, intro: 'A technology company building digital products and helping organizations turn useful ideas into working experiences.', sections: [{ heading: 'Who we are', body: 'We build digital products, websites, web applications, Android applications, iOS applications, cross-platform mobile applications, e-commerce platforms, AI-focused products, and custom digital solutions.' }, { heading: 'The founder', body: 'AM Kaweesi is the Founder & Technology Builder behind our products. We build our own products while also helping businesses and organizations ship useful digital experiences.' }, { heading: 'How we build', body: 'We start with the problem and the people who need the solution. From there, product thinking, design, and engineering stay in one close loop.' }] },
  leadership: { accent: '#9d8cff', illustration: illSecLeadership, intro: 'Independent teams, clear ownership, and the space to make the best decisions for the people using each product.', sections: [{ heading: 'Our philosophy', body: 'We structure our teams like independent startups. Each product has its own leadership, engineering, and design resources, giving it autonomy to move fast.' }, { heading: 'Leadership team', body: 'Our leadership brings experience in consumer internet, enterprise software, and applied AI. We are united by a shared vision for well-designed digital tools.' }, { heading: 'Our values', body: 'Privacy is a right. Speed is respect for the user’s time. Security is the floor, not the ceiling.' }] },
  enterprise: { accent: '#4da8ff', illustration: illSecEnterprise, intro: 'A product foundation with the controls, support, and flexibility serious organizations need.', sections: [{ heading: 'Enterprise grade products', body: 'We offer dedicated enterprise plans with advanced security controls, custom domain support, audit logging, and dedicated infrastructure.' }, { heading: 'Security & compliance', body: 'Enterprise accounts include compliance reports, data residency options, single tenant deployments, and custom data retention policies.' }, { heading: 'Custom integrations', body: 'Our enterprise APIs connect with identity providers, HR systems, and business tools. SAML SSO, SCIM provisioning, and a management API are included.' }] },
  security: { accent: '#8be7c4', illustration: illSecSecurity, intro: 'Security is not an add-on at AfuChat. It is the foundation every product is built on.', sections: [{ heading: 'Security by design', body: 'We use AES 256 encryption for data at rest, TLS 1.3 for data in transit, and zero knowledge architecture where applicable.' }, { heading: 'Two factor authentication', body: 'Every account supports TOTP based two factor authentication and hardware security keys. For enterprise accounts, 2FA can be enforced across the organization.' }, { heading: 'Vulnerability disclosure', body: 'We operate a responsible disclosure program for security researchers and commit to acknowledging reports within 24 hours.' }] },
  contact: { accent: '#8be7c4', illustration: illSecContact, intro: 'Whether you have a product question, a partnership idea, or a project to build, our team is here.', sections: [{ heading: 'Get in touch', body: 'We would love to hear from you. Tell us what you are trying to make and we will start with the problem.' }, { heading: 'Support', body: 'For product support, visit our Help Center. Our support team responds within 4 hours on business days.' }, { heading: 'Business inquiries', body: 'For partnership, enterprise, and media inquiries, reach out at business@afuchat.com.' }] },
  careers: { accent: '#8be7c4', illustration: illSecCareers, intro: 'Build digital products used by millions with people who care about craft, speed, and the details.', sections: [{ heading: 'Build the future', body: 'We are looking for engineers, designers, and operators who want to own meaningful work.' }, { heading: 'How we work', body: 'Small autonomous teams own products end to end. We favor shipping over process and give people real ownership early.' }, { heading: 'Benefits', body: 'Competitive pay and equity, covered health coverage, flexible time off, a learning budget, and access to our premium products.' }] },
  press: { accent: '#4da8ff', illustration: illSecPress, intro: 'Press resources, product context, and a direct line to the people building AfuChat.', sections: [{ heading: 'Media resources', body: 'Find logo assets, product screenshots, and executive bios in our press kit. For interview requests, reach out to communications.' }, { heading: 'Recent coverage', body: 'AfuChat has been featured in technology and business publications covering our approach to focused digital tools.' }, { heading: 'Press contact', body: 'For media inquiries, email press@afuchat.com. We aim to respond within one business day.' }] },
  brand: { accent: '#9d8cff', illustration: illSecBrand, intro: 'A clear identity for a family of products with distinct personalities.', sections: [{ heading: 'Our visual identity', body: 'The AfuChat brand is built around clarity. Our logo, color palette, and typography are designed to feel consistent across our product suite.' }, { heading: 'Logo usage', body: 'Please do not alter, recolor, or distort the AfuChat logo. Maintain clear space around it equal to the height of the logomark.' }, { heading: 'Download assets', body: 'Approved logos, color specifications, and typography guidelines are available for partners and press at brand@afuchat.com.' }] },
  help: { accent: '#8be7c4', illustration: illSecHelp, intro: 'Answers for account setup, billing, security, and troubleshooting across every AfuChat product.', sections: [{ heading: 'How can we help?', body: 'Our Help Center covers the common questions and most answers are available instantly through search.' }, { heading: 'Still stuck?', body: 'Contact support from within any product or email support@afuchat.com. We respond within 4 hours on business days.' }, { heading: 'Enterprise support', body: 'Enterprise customers have a dedicated support channel with a guaranteed 1 hour response SLA.' }] },
  sitemap: { accent: '#91a8c4', illustration: illSecSitemap, intro: 'A complete directory of the AfuChat corporate site, product ecosystem, and resources.', sections: [{ heading: 'Find your way around', body: 'Explore products, company information, developer resources, and legal documentation.' }, { heading: 'Need something else?', body: 'If you cannot find a page, visit our Help Center or contact the team directly.' }] },
  privacy: { accent: '#4da8ff', intro: 'How we collect, use, and protect your data.', sections: [{ heading: 'Information we collect', body: 'We collect information to provide better services, including account details and usage data when you interact with our products.' }, { heading: 'How we use your data', body: 'We use information to operate, maintain, and improve services. We do not sell personal data to third parties.' }, { heading: 'Data security', body: 'We implement industry standard security measures, including end to end encryption where applicable.' }] },
  terms: { accent: '#9d8cff', intro: 'The rules and responsibilities that govern use of our products and platform.', sections: [{ heading: 'Acceptance of terms', body: 'By accessing our products, you agree to be bound by these Terms of Service.' }, { heading: 'User responsibilities', body: 'You are responsible for use of the services and for keeping account information accurate and secure.' }, { heading: 'Service modifications', body: 'We may modify or discontinue services and will provide reasonable notice of significant changes whenever possible.' }] },
};

type LegalSection = { heading: string; paragraphs: string[] };
type LegalInfo = { accent: string; intro: string; sections: LegalSection[] };

const LEGAL_CONTENT: Record<'privacy' | 'terms', LegalInfo> = {
  privacy: {
    accent: '#2b5ea4',
    intro: 'How AfuChat Technologies collects, uses, stores, and protects information when you use our websites and products.',
    sections: [
      { heading: 'Information we collect', paragraphs: ['We collect information you provide directly, such as your name, email address, account details, support requests, and messages sent to us.', 'We may also collect limited technical information when you visit our websites, including device details, browser type, approximate location, and pages visited.'] },
      { heading: 'How we use information', paragraphs: ['We use information to provide and maintain our products, respond to requests, improve our services, protect accounts, and communicate important service updates.', 'We do not sell personal information. We only use information for the purposes described in this policy or with your direction.'] },
      { heading: 'Cookies and similar technologies', paragraphs: ['Our websites may use cookies or similar technologies to remember preferences, understand site usage, and keep services secure. You can manage optional cookies through your browser settings or the controls provided on our site.'] },
      { heading: 'Sharing and service providers', paragraphs: ['We may share information with trusted service providers who help us operate our websites and products. They may only use that information to provide services to us and must protect it appropriately.', 'We may also disclose information when required by law, to protect the rights and safety of our users, or as part of a business transfer.'] },
      { heading: 'Data retention and security', paragraphs: ['We retain information for as long as needed to provide our services, meet legal obligations, resolve disputes, and enforce agreements. We use reasonable technical and organizational safeguards, but no online service can guarantee absolute security.'] },
      { heading: 'Your choices and rights', paragraphs: ['Depending on where you live, you may have rights to access, correct, delete, or export your personal information, or to object to certain processing. Contact us and we will review your request under the laws that apply to you.'] },
      { heading: 'Contact us', paragraphs: ['Questions about this policy or your information can be sent to privacy@afuchat.com.'] },
    ],
  },
  terms: {
    accent: '#356fc0',
    intro: 'The rules and responsibilities that govern your use of AfuChat Technologies websites, products, and services.',
    sections: [
      { heading: 'Acceptance of these terms', paragraphs: ['By accessing or using our websites and services, you agree to these Terms of Service. If you do not agree, do not use the relevant service.'] },
      { heading: 'Using our services', paragraphs: ['You may use our services only for lawful purposes and in line with any product-specific terms or documentation. You are responsible for activity carried out through your account and for keeping account credentials secure.', 'Do not misuse our services, interfere with their operation, attempt unauthorized access, or use them to violate another person’s rights.'] },
      { heading: 'Accounts and eligibility', paragraphs: ['Some services require an account. You must provide accurate information, keep it current, and promptly tell us if you believe your account has been compromised. You are responsible for ensuring that you are legally able to enter into these terms.'] },
      { heading: 'Content and feedback', paragraphs: ['You retain rights to content you submit to our services. You give us the limited permissions needed to host, process, and display that content so we can provide the service.', 'If you send feedback, you allow us to use it without restriction or compensation, provided we do not identify you publicly without permission.'] },
      { heading: 'Intellectual property', paragraphs: ['Our services, branding, software, and other materials are owned by AfuChat Technologies or our licensors. These terms do not transfer ownership to you.'] },
      { heading: 'Changes and availability', paragraphs: ['We may update, suspend, or discontinue parts of a service as our products evolve. When a change materially affects these terms, we will provide reasonable notice where practical.'] },
      { heading: 'Disclaimers and limits', paragraphs: ['Services are provided on an “as available” basis. To the extent allowed by law, AfuChat Technologies is not responsible for indirect, incidental, special, or consequential losses arising from your use of a service.'] },
      { heading: 'Contact us', paragraphs: ['Questions about these terms can be sent to legal@afuchat.com.'] },
    ],
  },
};

function LegalDocument({ title, type }: { title: string; type: 'privacy' | 'terms' }) {
  const content = LEGAL_CONTENT[type];
  return (
    <>
      <section className="legal-hero max-container studio-section">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <p className="studio-kicker" style={{ color: content.accent }}>Legal / {type}</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[.9] tracking-[-.075em] text-[#e6f1ff]">{title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#91a8c4]">{content.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#7890a7]">
            <span className="studio-mono">Last updated September 2026</span>
            <Link href="/contact" className="text-[#2b5ea4] hover:underline">Questions? Contact us</Link>
          </div>
        </motion.div>
      </section>
      <section className="legal-body max-container">
        <div className="grid gap-12 lg:grid-cols-[.25fr_1fr] lg:gap-20">
          <aside className="legal-toc self-start lg:sticky lg:top-[96px]">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.18em] text-[#7890a7]">On this page</p>
            <nav aria-label={`${title} sections`}>
              {content.sections.map((section) => <a key={section.heading} href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{section.heading}</a>)}
            </nav>
          </aside>
          <article className="max-w-3xl">
            {content.sections.map((section, index) => (
              <motion.section
                id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                key={section.heading}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .03 }}
                className="legal-section pb-10"
              >
                <h2 className="text-xl font-semibold text-[#e6f1ff] sm:text-2xl">{section.heading}</h2>
                <div className="mt-4 text-sm leading-7 text-[#5c7590]">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </motion.section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}

export default function GenericPage({ title, type }: GenericPageProps) {
  const pageType = type.toLowerCase();
  const content = PAGE_CONTENT[pageType] ?? PAGE_CONTENT.about;
  const isLegal = pageType === 'privacy' || pageType === 'terms';
  return <div className="studio-shell">
    {isLegal ? <LegalDocument title={title} type={pageType} /> : <>
      <section className="max-container studio-section grid items-center gap-12 lg:grid-cols-[1fr_.76fr] lg:gap-24"><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}><p className="studio-kicker mb-6" style={{ color: content.accent }}>AfuChat / {type}</p><h1 className="max-w-3xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[.88] tracking-[-.075em] text-[#e6f1ff]">{title}</h1><p className="mt-8 max-w-xl text-lg leading-relaxed text-[#91a8c4]">{content.intro}</p></motion.div>{content.illustration && <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1 }} className="p-6"><img src={content.illustration} alt={title} className="w-full" /></motion.div>}</section>
      <section><div className="max-container studio-section grid gap-12 lg:grid-cols-[.42fr_1fr] lg:gap-24"><div><p className="studio-kicker" style={{ color: content.accent }}>The brief</p></div><div>{content.sections.map((section, index) => <motion.article key={section.heading} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="grid gap-4 py-8 sm:grid-cols-[.34fr_1fr]"><h2 className="text-xl font-semibold text-[#e6f1ff]">{section.heading}</h2><p className="text-sm leading-relaxed text-[#91a8c4]">{section.body}</p></motion.article>)}</div></div></section>
      <section className="max-container studio-section-tight"><div className="mb-8 flex items-end justify-between gap-5"><div><p className="studio-kicker mb-4" style={{ color: content.accent }}>Product system</p><h2 className="text-3xl font-semibold text-[#e6f1ff]">Explore the ecosystem.</h2></div><Link href="/products" className="studio-link flex items-center gap-2 text-xs">All products <ArrowUpRight className="h-3.5 w-3.5" /></Link></div><div className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">{PRODUCT_DATA.slice(0, 4).map((product) => { const Icon = product.icon; return <Link key={product.id} href={product.path} className="group flex items-center gap-3 border-b border-white/10 px-2 py-5 sm:border-l sm:px-5 first:sm:border-l-0"><Icon className="h-5 w-5" style={{ color: product.color }} strokeWidth={1.5} /><span className="text-sm text-[#91a8c4] group-hover:text-white">{product.name}</span><ArrowUpRight className="ml-auto h-3.5 w-3.5 text-[#5d7694] group-hover:text-[#4da8ff]" /></Link>; })}</div></section>
    </>}
    <section className="max-container studio-section-tight"><div className="studio-panel flex flex-col items-start justify-between gap-7 p-8 sm:flex-row sm:items-center sm:p-10"><div><p className="studio-kicker mb-4" style={{ color: content.accent }}>Next step</p><h2 className="text-2xl font-semibold text-[#e6f1ff]">Need to talk through something?</h2></div><Link href="/contact" className="studio-button studio-button-ghost">Contact the studio <ArrowUpRight className="h-4 w-4" /></Link></div></section>
    <Footer />
  </div>;
}