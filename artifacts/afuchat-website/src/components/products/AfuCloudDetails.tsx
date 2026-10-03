import { Database, Globe2, Image, KeyRound, ArrowUpRight, Check } from 'lucide-react';

const AFUCLOUD_URL = 'https://cloud.afuchat.com';

const capabilities = [
  {
    icon: Image,
    title: 'Image delivery API',
    description: 'Upload and manage images through a versioned REST API, then use the returned URL to deliver each image.',
  },
  {
    icon: Database,
    title: 'Object storage',
    description: 'Keep files in organized storage containers and folders, with URLs ready to use in your apps.',
  },
  {
    icon: Globe2,
    title: 'Custom domains',
    description: 'Connect Cloudflare, verify a domain you own, and manage its DNS records and public status.',
  },
  {
    icon: KeyRound,
    title: 'Developer controls',
    description: 'Use project API keys with fine-grained scopes, signed webhooks, and project-level storage and upload analytics.',
  },
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    limits: ['2 projects', '2 storage containers', '3 API keys', '10 MB maximum file size'],
  },
  {
    name: 'Pro',
    price: '$12',
    period: 'per month',
    trial: '7-day free trial',
    popular: true,
    limits: ['10 projects', '25 storage containers', '50 API keys', '100 MB maximum file size'],
  },
  {
    name: 'Business',
    price: '$39',
    period: 'per month',
    trial: '7-day free trial',
    limits: ['50 projects', '100 storage containers', '250 API keys', '250 MB maximum file size'],
  },
];

const formats = ['PNG', 'JPEG', 'WebP', 'GIF', 'AVIF', 'SVG', 'HEIC'];

export default function AfuCloudDetails() {
  return (
    <div className="max-container container-pad">
      <section aria-labelledby="afucloud-capabilities" className="border-t border-white/10 py-14 sm:py-20">
        <div className="max-w-3xl mb-9">
          <p className="text-[#38BDF8] font-semibold text-xs uppercase tracking-widest mb-3">AfuCloud platform</p>
          <h2 id="afucloud-capabilities" className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Images, files, and domains in one developer platform
          </h2>
          <p className="text-white/55 leading-relaxed">
            AfuCloud brings image delivery, object storage, and domain management together. Manage assets in a dashboard or connect to the versioned API from your application.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/15 text-[#38BDF8] flex items-center justify-center mb-5">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
          <h3 className="text-white font-semibold mb-3">Supported image formats</h3>
          <p className="text-white/45 text-sm mb-4">Upload images in the formats supported by AfuCloud’s image API.</p>
          <ul className="flex flex-wrap gap-2" aria-label="Supported image formats">
            {formats.map(format => (
              <li key={format} className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-white/70">
                {format}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="afucloud-workflow" className="border-t border-white/10 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14 items-start">
          <div>
            <p className="text-[#38BDF8] font-semibold text-xs uppercase tracking-widest mb-3">Getting started</p>
            <h2 id="afucloud-workflow" className="text-3xl font-bold text-white tracking-tight mb-4">
              From upload to delivery URL
            </h2>
            <p className="text-white/55 leading-relaxed mb-6">
              The quickstart takes you through a project API key and a temporary upload URL, so your app can send an image and receive its AfuCloud URL.
            </p>
            <a
              href="https://cloud.afuchat.com/docs/getting-started/quickstart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#38BDF8] hover:text-white transition-colors"
            >
              Follow the AfuCloud quickstart <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { step: '01', title: 'Create a project', body: 'Create an AfuCloud project and a project API key with the scopes your app needs.' },
              { step: '02', title: 'Upload an image', body: 'Request a temporary upload URL, then send the image file to that URL.' },
              { step: '03', title: 'Deliver the file', body: 'Confirm the upload and use the image URL returned by AfuCloud.' },
            ].map(item => (
              <li key={item.step} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <span className="text-[#38BDF8] text-xs font-bold tracking-widest">{item.step}</span>
                <h3 className="text-white font-semibold mt-4 mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="afucloud-pricing" aria-labelledby="afucloud-pricing-title" className="border-t border-white/10 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-[#38BDF8] font-semibold text-xs uppercase tracking-widest mb-3">Plans</p>
          <h2 id="afucloud-pricing-title" className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Start free, scale when you need to
          </h2>
          <p className="text-white/55 leading-relaxed">
            The current AfuCloud page lists a free tier plus monthly Pro and Business plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {plans.map(plan => (
            <article
              key={plan.name}
              className={`relative rounded-2xl border p-6 sm:p-7 ${plan.popular ? 'border-[#0EA5E9]/60 bg-[#0EA5E9]/[0.08]' : 'border-white/10 bg-white/[0.035]'}`}
            >
              {plan.popular && (
                <span className="absolute right-5 top-5 rounded-full bg-[#0EA5E9]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#7DD3FC]">
                  Most popular
                </span>
              )}
              <h3 className="text-white font-semibold">{plan.name}</h3>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                <span className="text-sm text-white/45">{plan.period}</span>
              </p>
              {plan.trial ? (
                <p className="mt-2 text-sm font-medium text-[#7DD3FC]">{plan.trial}</p>
              ) : (
                <p className="mt-2 text-sm text-white/45">No subscription required</p>
              )}
              <ul className="mt-6 space-y-3">
                {plan.limits.map(limit => (
                  <li key={limit} className="flex items-start gap-2.5 text-sm text-white/65">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#38BDF8]" aria-hidden="true" />
                    {limit}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:px-6">
          <p className="text-white/45 text-sm leading-relaxed">
            Pro and Business are monthly subscriptions, cancellable through Whop. Eligible new customers can use <code className="text-white/75">afucloud25</code> for 25% off their first three paid monthly charges.
          </p>
          <a
            href={AFUCLOUD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/80 hover:border-[#38BDF8]/50 hover:text-white transition-colors"
          >
            View current plans <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}