'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';

const departments = [
  ['Frontend Engineering', 'React, Next.js, TypeScript, accessibility and design systems.'],
  ['Backend Engineering', 'APIs, Node.js/NestJS, databases, authentication and integrations.'],
  ['Mobile Development', 'Android, iOS, React Native, Flutter and mobile experiences.'],
  ['AI & Intelligent Search', 'Applied AI, search, retrieval, ranking and automation.'],
  ['Cloud & DevOps', 'Infrastructure, CI/CD, deployment, observability and reliability.'],
  ['Product Design (UI/UX)', 'Research, interaction design, prototypes and design systems.'],
  ['Quality & Application Security', 'Automated testing, QA, secure coding and application security.'],
  ['Technical Leadership & Architecture', 'Technical direction, architecture, standards and mentoring.'],
  ['Product, Data & Growth', 'Product planning, analytics, documentation and developer experience.'],
] as const;

const skills = [
  ['JavaScript', 'javascript'], ['TypeScript', 'typescript'], ['React', 'react'], ['Next.js', 'nextdotjs'],
  ['Node.js', 'nodedotjs'], ['NestJS', 'nestjs'], ['Python', 'python'], ['Java', 'openjdk'],
  ['Kotlin', 'kotlin'], ['Swift', 'swift'], ['React Native', 'react'], ['Flutter', 'flutter'],
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
              <a href="#departments" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Explore departments</a>
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
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map(([title, description]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-950/5"><span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl font-bold text-emerald-700">✳</span><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p><button type="button" onClick={() => { setDepartment(title); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); }} className="mt-5 text-sm font-bold text-emerald-700 hover:text-emerald-900">Choose department →</button></article>)}
        </div>
      </div></section>

      <section className="section-pad"><div className="max-container container-pad">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">Read before applying</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Download the team guides.</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">Understand the opportunity, collaboration expectations and equity discussion topics before getting in touch.</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {docs.map(([title, description, href]) => <article key={href} className="flex flex-col rounded-2xl border border-slate-200 p-6"><span aria-hidden="true" className="text-2xl text-emerald-700">▤</span><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p><a href={href} download className="mt-6 inline-flex items-center justify-center rounded-full border border-emerald-700 px-4 py-3 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50">Download guide ↓</a></article>)}
        </div>
      </div></section>

      <section id="apply" className="section-pad bg-slate-950 text-white"><div className="max-container container-pad grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-300">Make an introduction</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Tell us what you can build.</h2><p className="mt-4 leading-7 text-slate-300">Share your skills, work samples and the contribution you are interested in. The form prepares an email to our published contact address so you can review and send it yourself.</p><div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5"><p className="font-semibold">What happens next?</p><ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300"><li>We review your experience and preferred department.</li><li>We discuss fit, availability and expected contribution.</li><li>Any role, compensation or equity terms are discussed separately and documented before commitment.</li></ol></div><p className="mt-5 text-xs leading-5 text-slate-400">Do not include passwords, private keys, identity documents or other sensitive information.</p></div>
        <form onSubmit={submitApplication} className="rounded-3xl bg-white p-6 text-slate-950 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold">Full name<input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="Your name" /></label>
            <label className="block text-sm font-semibold">Email address<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="you@example.com" /></label>
            <label className="block text-sm font-semibold">Department<select value={department} onChange={(e) => setDepartment(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100">{departments.map(([title]) => <option key={title}>{title}</option>)}</select></label>
            <label className="block text-sm font-semibold">Preferred contribution<select value={role} onChange={(e) => setRole(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"><option>Developer</option><option>Technical Lead</option><option>Potential Co-Founder</option><option>Contributor / Mentor</option></select></label>
            <label className="block text-sm font-semibold">Availability<select value={availability} onChange={(e) => setAvailability(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"><option>Part-time</option><option>Full-time</option><option>Flexible / project-based</option><option>Mentoring / occasional</option></select></label>
            <label className="block text-sm font-semibold">GitHub or portfolio link<input type="url" value={profile} onChange={(e) => setProfile(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="https://..." /></label>
            <fieldset className="sm:col-span-2">
              <legend className="text-sm font-semibold">Tap your skills <span className="font-normal text-slate-500">— choose all that apply</span></legend>
              <p className="mt-1 text-xs leading-5 text-slate-500">Select the technologies you know. Your selections will be included in your application automatically.</p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {skills.map(([label, slug]) => {
                  const selected = selectedSkills.includes(label);
                  return <button key={label} type="button" aria-pressed={selected} onClick={() => setSelectedSkills((current) => selected ? current.filter((skill) => skill !== label) : [...current, label])} className={`flex min-h-12 items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-500 ${selected ? 'border-emerald-700 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600' : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-400'}`}>
                    <img src={`https://cdn.simpleicons.org/${slug}`} alt="" loading="lazy" className="h-5 w-5 shrink-0 object-contain" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
                    <span className="min-w-0 flex-1">{label}</span>
                    <span aria-hidden="true" className={selected ? 'text-emerald-700' : 'text-slate-300'}>{selected ? '✓' : '+'}</span>
                  </button>;
                })}
              </div>
              {selectedSkills.length > 0 && <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-600"><span>{selectedSkills.length} skill{selectedSkills.length === 1 ? '' : 's'} selected</span><button type="button" onClick={() => setSelectedSkills([])} className="font-semibold text-emerald-800 underline">Clear selection</button></div>}
            </fieldset>
            <label className="block text-sm font-semibold sm:col-span-2">Additional skills, experience or projects<textarea required rows={3} value={experience} onChange={(e) => setExperience(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="Tell us about your projects, strengths or any skills not listed above" /></label>
            <label className="block text-sm font-semibold sm:col-span-2">How would you contribute?<textarea required rows={3} value={contribution} onChange={(e) => setContribution(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="What would you like to help us build?" /></label>
          </div>
          <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-600"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-emerald-700" />I agree to share these details with AfuChat Technologies Limited to review this expression of interest.</label>
          {status && <p role="status" className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm leading-6 text-emerald-900">{status}</p>}
          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-emerald-800">Prepare application email ↗</button>
          <p className="mt-3 text-xs leading-5 text-slate-500">This page does not submit your details to a server. Your email app opens so you can review and send the message.</p>
        </form>
      </div></section>
      <section className="border-t border-slate-200 py-8"><div className="max-container container-pad flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>AfuChat Technologies Limited · Build independently. Grow together.</p><Link href="/about" className="font-semibold text-emerald-700 hover:text-emerald-900">Learn about the company →</Link></div></section>
    </div>
  );
}
