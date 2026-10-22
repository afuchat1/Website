'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { Code2, Server, Smartphone, Search, Cloud, Palette, ShieldCheck, Network, ChartNoAxesCombined } from 'lucide-react';

const departments = [
  { title: 'Frontend Engineering', description: 'Build accessible, responsive web interfaces and reusable design systems.', Icon: Code2, focus: 'React · Next.js · TypeScript · Accessibility' },
  { title: 'Backend Engineering', description: 'Develop APIs, data models, authentication and reliable service integrations.', Icon: Server, focus: 'APIs · Databases · Identity · Integrations' },
  { title: 'Mobile Development', description: 'Deliver robust mobile applications and maintain quality across releases.', Icon: Smartphone, focus: 'Android · iOS · React Native · Flutter' },
  { title: 'AI & Intelligent Search', description: 'Improve discovery with search, retrieval, ranking and carefully evaluated AI features.', Icon: Search, focus: 'Search · Retrieval · Ranking · AI evaluation' },
  { title: 'Cloud & DevOps', description: 'Build dependable delivery pipelines and operate secure, observable infrastructure.', Icon: Cloud, focus: 'CI/CD · Cloud infrastructure · Monitoring · Reliability' },
  { title: 'Product Design (UI/UX)', description: 'Translate user needs into clear journeys, usable interfaces and tested prototypes.', Icon: Palette, focus: 'Research · Interaction design · Prototyping · Systems' },
  { title: 'Quality & Application Security', description: 'Improve release confidence through systematic testing and secure engineering.', Icon: ShieldCheck, focus: 'Automation · QA · Threat review · Accessibility' },
  { title: 'Technical Leadership & Architecture', description: 'Guide system design, engineering standards, technical planning and mentoring.', Icon: Network, focus: 'System design · Reviews · Standards · Mentoring' },
  { title: 'Product, Data & Growth', description: 'Use product strategy and evidence to prioritize work and improve adoption.', Icon: ChartNoAxesCombined, focus: 'Discovery · Analytics · Documentation · Adoption' },
] as const;

const skills = [
  ['JavaScript', 'javascript'], ['TypeScript', 'typescript'], ['React', 'react'], ['Next.js', 'nextdotjs'],
  ['Node.js', 'nodedotjs'], ['NestJS', 'nestjs'], ['Python', 'python'], ['Java', 'java'],
  ['Kotlin', 'kotlin'], ['Swift', 'swift'], ['Android OS', 'android'], ['iOS (Apple)', 'apple'], ['React Native', 'reactnative'], ['Flutter', 'flutter'],
  ['Dart', 'dart'], ['Go', 'go'], ['Rust', 'rust'], ['PHP', 'php'],
  ['HTML5', 'html5'], ['CSS3', 'css'], ['Tailwind CSS', 'tailwindcss'], ['PostgreSQL', 'postgresql'],
  ['Supabase', 'supabase'], ['MongoDB', 'mongodb'], ['Redis', 'redis'], ['GraphQL', 'graphql'],
  ['Cloudflare', 'cloudflare'], ['Vercel', 'vercel'], ['AWS', 'amazonaws'], ['Docker', 'docker'],
  ['Git', 'git'], ['GitHub', 'github'], ['Linux', 'linux'], ['Figma', 'figma'],
  ['Firebase', 'firebase'], ['OpenAI / AI', 'openai']
] as const;

const docs = [
  ['Developer & Co-Founder Opportunity Guide', 'Company overview, departments, expectations and the opportunity model.', '/docs/developer-cofounder-opportunity-guide.md'],
  ['Technical Collaboration Guide', 'GitHub workflow, code reviews, issues, security and releases.', '/docs/technical-collaboration-guide.md'],
  ['Co-Founder & Equity Discussion Framework', 'Topics to discuss and agree in writing before any equity arrangement.', '/docs/cofounder-equity-discussion-framework.md'],
] as const;

export default function JoinTeam() {
  const [department, setDepartment] = useState('Backend Engineering');
  const [role, setRole] = useState('Developer');
  const [availability, setAvailability] = useState('Part-time');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState('');
  const [experience, setExperience] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [contribution, setContribution] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState('');

  function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) {
      setStatus('Please confirm that you agree to share these details for recruitment review.');
      return;
    }
    const subject = 'Developer / Co-Founder Programme Application — ' + name;
    const body = [
      'Hello AfuChat Technologies Limited,', '',
      'I would like to be considered for the Developer & Co-Founder Programme.', '',
      'Name: ' + name,
      'Contact email: ' + email,
      'Preferred department: ' + department,
      'Preferred contribution: ' + role,
      'Availability: ' + availability,
      'GitHub / portfolio: ' + (profile || 'Not provided'), '',
      'Selected skills: ' + (selectedSkills.length ? selectedSkills.join(', ') : 'Not selected'),
      'Additional skills and experience:', experience, '',
      'How I can contribute:', contribution, '',
      'I understand this is an early-stage venture opportunity, not a salaried job offer. Any equity or other terms would need to be discussed and agreed separately.',
    ].join('\n');
    window.location.href = 'mailto:hello@afuchat.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    setStatus('Your email app should open with a prepared application. Review it and send it to complete your application.');
  }

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: 'radial-gradient(ellipse at 80% 10%, rgba(7,150,91,.55), transparent 42%), radial-gradient(ellipse at 10% 90%, rgba(31,149,255,.22), transparent 40%)' }} />
        <div className="max-container container-pad py-20 sm:py-28 lg:py-32">
          <p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-emerald-300">Build with us · AfuChat Technologies Limited</p>
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">Build products. Shape the company. Grow together.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">We are opening a path for engineers, designers and product-minded builders to contribute to our growing digital product ecosystem — including the opportunity to explore co-founder and technical leadership roles.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#apply" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-500">Introduce yourself ↗</a>
              <a href="#departments" className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15">Explore departments</a>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400">This is an early-stage venture opportunity, not a conventional salaried job. Salary is not guaranteed. Equity is not automatic and would only be considered under separately discussed and documented terms.</p>
          </div>
        </div>
      </section>

      <section className="section-pad"><div className="max-container container-pad">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">Why join</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">A chance to help build from the ground up.</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">AfuChat Technologies Limited is developing a portfolio of digital products. We are looking for people who want to contribute meaningfully, collaborate openly and help make long-term technical and product decisions. Candidates may discuss developer, contributor, technical lead or potential co-founder paths based on fit and mutual agreement.</p>
      </div></section>

      <section id="departments" className="section-pad bg-slate-50"><div className="max-container container-pad">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">Areas of contribution</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Find your department.</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">Choose the area closest to your skills. These are contribution areas, not a promise that every role is currently staffed or formally open.</p>
        <div className="mt-9 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:gap-x-14">
          {departments.map(({ title, description, Icon, focus }) => <article key={title} className="flex min-w-0 flex-col py-2 sm:px-0">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold tracking-tight text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            </div>
            <p className="mt-4 pl-[3.75rem] text-xs leading-5 text-slate-500">{focus}</p>
            <button type="button" onClick={() => { setDepartment(title); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); }} className="mt-4 inline-flex min-h-10 items-center gap-2 self-start pl-[3.75rem] text-sm font-semibold text-emerald-800 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
              Select department <span aria-hidden="true">→</span>
            </button>
          </article>)}
        </div>
      </div></section>

      <section id="apply" className="section-pad bg-slate-950 text-white"><div className="max-container container-pad grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-300">Make an introduction</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Tell us what you can build.</h2><p className="mt-4 leading-7 text-slate-300">Share your skills, work samples and the contribution you are interested in. The form prepares an email to our published contact address so you can review and send it yourself.</p><div className="mt-7 rounded-xl bg-white/5 p-5"><p className="font-semibold">What happens next?</p><ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300"><li>We review your experience and preferred department.</li><li>We discuss fit, availability and expected contribution.</li><li>Any role, compensation or equity terms are discussed separately and documented before commitment.</li></ol></div><p className="mt-5 text-xs leading-5 text-slate-400">Do not include passwords, private keys, identity documents or other sensitive information.</p></div>
        <form onSubmit={submitApplication} className="bg-white p-6 text-slate-950 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold">Full name<input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className="mt-2 w-full rounded-lg bg-slate-100 px-4 py-3 font-normal outline-none  focus:ring-2 focus:ring-emerald-100" placeholder="Your name" /></label>
            <label className="block text-sm font-semibold">Email address<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" className="mt-2 w-full rounded-lg bg-slate-100 px-4 py-3 font-normal outline-none  focus:ring-2 focus:ring-emerald-100" placeholder="you@example.com" /></label>
            <label className="block text-sm font-semibold">Department<select value={department} onChange={(e) => setDepartment(e.target.value)} className="mt-2 w-full rounded-lg bg-slate-100 px-4 py-3 font-normal outline-none  focus:ring-2 focus:ring-emerald-100">{departments.map(({ title }) => <option key={title} value={title}>{title}</option>)}</select></label>
            <label className="block text-sm font-semibold">Preferred contribution<select value={role} onChange={(e) => setRole(e.target.value)} className="mt-2 w-full rounded-lg bg-slate-100 px-4 py-3 font-normal outline-none  focus:ring-2 focus:ring-emerald-100"><option>Developer</option><option>Technical Lead</option><option>Potential Co-Founder</option><option>Contributor / Mentor</option></select></label>
            <label className="block text-sm font-semibold">Availability<select value={availability} onChange={(e) => setAvailability(e.target.value)} className="mt-2 w-full rounded-lg bg-slate-100 px-4 py-3 font-normal outline-none  focus:ring-2 focus:ring-emerald-100"><option>Part-time</option><option>Full-time</option><option>Flexible / project-based</option><option>Mentoring / occasional</option></select></label>
            <label className="block text-sm font-semibold">GitHub or portfolio link<input type="url" value={profile} onChange={(e) => setProfile(e.target.value)} className="mt-2 w-full rounded-lg bg-slate-100 px-4 py-3 font-normal outline-none  focus:ring-2 focus:ring-emerald-100" placeholder="https://..." /></label>
            <fieldset className="sm:col-span-2">
              <legend className="text-sm font-semibold">Skills & technologies <span className="font-normal text-slate-500">— optional, select any</span></legend>
              <p className="mt-1 text-xs leading-5 text-slate-500">Keep the form compact: open the picker to choose your skills.</p>
              <details className="group mt-3 rounded-xl bg-slate-50">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm outline-none hover:bg-slate-50 focus:ring-2 focus:ring-emerald-500 [&::-webkit-details-marker]:hidden">
                  <span className="flex min-w-0 items-center gap-2">
                    <span className="text-emerald-700" aria-hidden="true">⌘</span>
                    <span className="truncate font-medium text-slate-700">{selectedSkills.length ? `${selectedSkills.length} skill${selectedSkills.length === 1 ? '' : 's'} selected` : 'Choose skills'}</span>
                  </span>
                  <span className="text-xs text-slate-500 group-open:hidden">Open +</span>
                  <span className="hidden text-xs text-slate-500 group-open:inline">Close −</span>
                </summary>
                <div className="p-3">
                  {selectedSkills.length > 0 && <div className="mb-3 flex flex-wrap items-center gap-1.5">
                    {selectedSkills.map((skill) => <button key={skill} type="button" onClick={() => setSelectedSkills((current) => current.filter((item) => item !== skill))} className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-900" aria-label={`Remove ${skill}`}>{skill}<span aria-hidden="true">×</span></button>)}
                    <button type="button" onClick={() => setSelectedSkills([])} className="px-1.5 py-1 text-xs font-semibold text-slate-500 underline">Clear all</button>
                  </div>}
                  <div className="grid max-h-48 grid-cols-2 gap-1.5 overflow-y-auto sm:grid-cols-3">
                    {skills.map(([label, slug]) => {
                      const selected = selectedSkills.includes(label);
                      return <button key={label} type="button" aria-pressed={selected} onClick={() => setSelectedSkills((current) => selected ? current.filter((skill) => skill !== label) : [...current, label])} className={`flex min-h-9 items-center gap-2 rounded-lg  px-2 py-1.5 text-left text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-500 ${selected ? ' bg-emerald-50 text-emerald-900' : ' bg-white text-slate-700 '}`}>
                        <img src={`https://cdn.simpleicons.org/${slug}`} alt="" loading="lazy" width={20} height={20} className="h-5 w-5 shrink-0 object-contain" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
                        <span className="min-w-0 flex-1">{label}</span>
                        <span aria-hidden="true" className={selected ? 'text-emerald-700' : 'text-slate-300'}>{selected ? '✓' : '+'}</span>
                      </button>;
                    })}
                  </div>
                </div>
              </details>
            </fieldset>
            <label className="block text-sm font-semibold sm:col-span-2">Additional skills, experience or projects<textarea required rows={3} value={experience} onChange={(e) => setExperience(e.target.value)} className="mt-2 w-full rounded-lg bg-slate-100 px-4 py-3 font-normal outline-none  focus:ring-2 focus:ring-emerald-100" placeholder="Tell us about your projects, strengths or any skills not listed above" /></label>
            <label className="block text-sm font-semibold sm:col-span-2">How would you contribute?<textarea required rows={3} value={contribution} onChange={(e) => setContribution(e.target.value)} className="mt-2 w-full rounded-lg bg-slate-100 px-4 py-3 font-normal outline-none  focus:ring-2 focus:ring-emerald-100" placeholder="What would you like to help us build?" /></label>
          </div>
          <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-600"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-emerald-700" />I agree to share these details with AfuChat Technologies Limited to review this expression of interest.</label>
          {status && <p role="status" className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm leading-6 text-emerald-900">{status}</p>}
          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-emerald-800">Prepare application email ↗</button>
          <p className="mt-3 text-xs leading-5 text-slate-500">This page does not submit your details to a server. Your email app opens so you can review and send the message.</p>
        </form>
      </div></section>
      <section className="py-8"><div className="max-container container-pad flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>AfuChat Technologies Limited · Build independently. Grow together.</p><Link href="/about" className="font-semibold text-emerald-700 hover:text-emerald-900">Learn about the company →</Link></div></section>
    </div>
  );
}
