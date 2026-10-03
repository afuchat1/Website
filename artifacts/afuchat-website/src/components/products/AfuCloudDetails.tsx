'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Database, Globe2, Image, KeyRound } from 'lucide-react';

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

const uploadExample = `const API_BASE = "https://api.afuchat.com/v1";

export async function uploadImage(file: File): Promise<string> {
  const projectId = process.env.AFUCLOUD_PROJECT_ID;
  const apiKey = process.env.AFUCLOUD_API_KEY;

  if (!projectId || !apiKey) {
    throw new Error("Set AFUCLOUD_PROJECT_ID and AFUCLOUD_API_KEY");
  }
  const supportedTypes = new Set([
    "image/png",
    "image/jpeg",
    "image/webp",
    "image/gif",
    "image/avif",
    "image/svg+xml",
    "image/heic",
  ]);
  if (!supportedTypes.has(file.type)) {
    throw new Error("Choose a supported image file");
  }

  const contentType = file.type;
  const authHeaders = {
    Authorization: "Bearer " + apiKey,
    "Content-Type": "application/json",
  };

  const uploadRequest = await fetch(
    API_BASE + "/projects/" + projectId + "/images/upload-url",
    {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({
        filename: file.name,
        contentType,
        name: file.name,
      }),
    },
  );
  if (!uploadRequest.ok) {
    throw new Error("Could not request an upload URL: " + uploadRequest.status);
  }

  const { uploadUrl, imageId, key } = (await uploadRequest.json()) as {
    uploadUrl: string;
    imageId: string;
    key: string;
  };

  const fileUpload = await fetch(uploadUrl, {
    method: "PUT",
    headers: { "Content-Type": contentType },
    body: file,
  });
  if (!fileUpload.ok) {
    throw new Error("Image upload failed: " + fileUpload.status);
  }

  const confirmation = await fetch(
    API_BASE + "/projects/" + projectId + "/images/confirm-upload",
    {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({ imageId, key, size: file.size }),
    },
  );
  if (!confirmation.ok) {
    throw new Error("Could not confirm the image upload: " + confirmation.status);
  }

  const image = (await confirmation.json()) as { url: string };
  return image.url;
}`;

const listImagesExample = `curl "https://api.afuchat.com/v1/projects/$AFUCLOUD_PROJECT_ID/images" \\
  -H "Authorization: Bearer $AFUCLOUD_API_KEY"`;

const displayImageExample = `<img
  src={imageUrl}
  alt="Uploaded image"
  loading="lazy"
/>`;

function CopyableCode({
  title,
  language,
  code,
}: {
  title: string;
  language: string;
  code: string;
}) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');

  async function copyCode() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand('copy');
        textarea.remove();
        if (!copied) throw new Error('Clipboard access is unavailable');
      }
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
  }

  return (
    <article className="py-6">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-3">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <span className="text-xs uppercase tracking-widest text-white/45">{language}</span>
        </div>
        <button
          type="button"
          onClick={copyCode}
          aria-label={`Copy ${title} example`}
          className="afucloud-copy-button inline-flex items-center gap-2 text-sm font-semibold"
        >
          {copyState === 'copied' ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
          {copyState === 'copied' ? 'Copied' : copyState === 'error' ? 'Copy unavailable' : 'Copy'}
        </button>
      </div>
      <pre className="m-0 overflow-x-auto whitespace-pre-wrap break-words text-sm leading-relaxed text-white">
        <code>{code}</code>
      </pre>
      {copyState === 'error' && (
        <p role="status" className="mt-2 text-xs text-white/45">
          Select the code and copy it manually.
        </p>
      )}
      {copyState === 'copied' && <span className="sr-only" role="status">Code copied.</span>}
    </article>
  );
}

export default function AfuCloudDetails() {
  return (
    <div className="max-container container-pad">
      <section aria-labelledby="afucloud-capabilities" className="py-14 sm:py-20">
        <div className="max-w-3xl mb-9">
          <p className="text-[#07965B] font-semibold text-xs uppercase tracking-widest mb-3">AfuCloud platform</p>
          <h2 id="afucloud-capabilities" className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Images, files, and domains in one developer platform
          </h2>
          <p className="text-white/55 leading-relaxed">
            AfuCloud brings image delivery, object storage, and domain management together. Manage assets in a dashboard or connect to the versioned API from your application.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-10">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <article key={title} className="py-2">
              <Icon className="w-6 h-6 text-[#07965B] mb-5" aria-hidden="true" />
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-white font-semibold mb-3">Supported image formats</h3>
          <p className="text-white/45 text-sm mb-4">Upload images in the formats supported by AfuCloud’s image API.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Supported image formats">
            {formats.map(format => (
              <li key={format} className="text-sm font-medium text-white/70">
                {format}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="afucloud-workflow" className="py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14 items-start">
          <div>
            <p className="text-[#07965B] font-semibold text-xs uppercase tracking-widest mb-3">Getting started</p>
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#07965B] hover:text-[#08764B] transition-colors"
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
              <li key={item.step} className="py-3">
                <span className="text-[#07965B] text-xs font-bold tracking-widest">{item.step}</span>
                <h3 className="text-white font-semibold mt-4 mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="afucloud-integration" aria-labelledby="afucloud-integration-title" className="py-14 sm:py-20">
        <div className="max-w-3xl mb-8">
          <p className="text-[#07965B] font-semibold text-xs uppercase tracking-widest mb-3">Developer integration</p>
          <h2 id="afucloud-integration-title" className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Upload from your server, deliver anywhere
          </h2>
          <p className="text-white/55 leading-relaxed mb-4">
            Request a temporary upload URL, send the image, and confirm it to receive a delivery URL.
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            Create a project key with <code>images:write</code> for uploads and <code>images:read</code> for the list example. Keep it in server-side environment variables; never expose it in browser code.
          </p>
        </div>
        <div className="space-y-4">
          <CopyableCode title="Upload and confirm an image" language="Node.js · TypeScript" code={uploadExample} />
          <CopyableCode title="List project images" language="cURL" code={listImagesExample} />
          <CopyableCode title="Render the returned URL" language="JSX" code={displayImageExample} />
        </div>
      </section>

      <section id="afucloud-pricing" aria-labelledby="afucloud-pricing-title" className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-[#07965B] font-semibold text-xs uppercase tracking-widest mb-3">Plans</p>
          <h2 id="afucloud-pricing-title" className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Start free, scale when you need to
          </h2>
          <p className="text-white/55 leading-relaxed">
            The current AfuCloud page lists a free tier plus monthly Pro and Business plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 items-start">
          {plans.map(plan => (
            <article key={plan.name} className="py-2">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-white font-semibold">{plan.name}</h3>
                {plan.popular && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#07965B]">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                <span className="text-sm text-white/45">{plan.period}</span>
              </p>
              {plan.trial ? (
                <p className="mt-2 text-sm font-medium text-[#07965B]">{plan.trial}</p>
              ) : (
                <p className="mt-2 text-sm text-white/45">No subscription required</p>
              )}
              <ul className="mt-6 space-y-3">
                {plan.limits.map(limit => (
                  <li key={limit} className="flex items-start gap-2.5 text-sm text-white/65">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#07965B]" aria-hidden="true" />
                    {limit}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
          <p className="text-white/45 text-sm leading-relaxed">
            Pro and Business are monthly subscriptions, cancellable through Whop. Eligible new customers can use <code className="text-white/75">afucloud25</code> for 25% off their first three paid monthly charges.
          </p>
          <a
            href={AFUCLOUD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#07965B] hover:text-[#08764B] transition-colors"
          >
            View current plans <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}