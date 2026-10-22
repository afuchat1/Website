'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';

const departments = [
  ['Frontend Engineering', 'Build fast, accessible, responsive product experiences and reusable interface systems.', '🖥️', ['Web apps', 'Design systems', 'Accessibility', 'Performance']],
  ['Backend Engineering', 'Design dependable APIs, business logic, data models and secure service integrations.', '⚙️', ['REST / GraphQL APIs', 'Databases', 'Auth & permissions', 'Integrations']],
  ['Mobile Development', 'Create polished mobile experiences and reliable releases across phone platforms.', '📱', ['Android & iOS', 'React Native', 'Flutter', 'Release workflows']],
  ['AI & Intelligent Search', 'Make product knowledge discoverable through useful AI features and high-quality search.', '✨', ['Search & ranking', 'Retrieval', 'AI integrations', 'Evaluation']],
  ['Cloud & DevOps', 'Keep applications deployable, observable, secure and resilient from preview to production.', '☁️', ['CI/CD', 'Cloud infrastructure', 'Monitoring', 'Reliability']],
  ['Product Design (UI/UX)', 'Turn user needs into clear journeys, thoughtful visual systems and testable prototypes.', '🎨', ['User research', 'Interaction design', 'Prototyping', 'Design systems']],
  ['Quality & Application Security', 'Prevent regressions and reduce risk through systematic testing and secure engineering.', '🛡️', ['Test automation', 'QA strategy', 'Threat review', 'Accessibility checks']],
  ['Technical Leadership & Architecture', 'Help teams make sound technical decisions, set standards and deliver maintainable systems.', '🧭', ['System design', 'Code review', 'Technical planning', 'Mentoring']],
  ['Product, Data & Growth', 'Connect product strategy, evidence and adoption so teams build the right things.', '📊', ['Product discovery', 'Analytics', 'Documentation', 'Developer experience']],
] as const;

const skills = [
  ['JavaScript', 'javascript'], ['TypeScript', 'typescript'], ['React', 'react'], ['Next.js', 'nextdotjs'],
  ['Node.js', 'nodedotjs'], ['NestJS', 'nestjs'], ['Python', 'python'], ['Java', 'java'],
  ['Kotlin', 'kotlin'], ['Swift', 'swift'], ['React Native', 'reactnative'], ['Flutter', 'flutter'],
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
          {departments.map(([title, description, icon, focusAreas], index) => <article key={title} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-950/10 sm:p-6">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-transform duration-200 group-hover:scale-x-100" />
            <div className="flex items-start justify-between gap-3">
              <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50 text-2xl">{icon}</span>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.14em] text-slate-500">Area {String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">{focusAreas.map((area) => <span key={area} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600">{area}</span>)}</div>
            <button type="button" onClick={() => { setDepartment(title); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); }} className="mt-6 inline-flex min-h-10 items-center justify-between gap-3 border-t border-slate-100 pt-4 text-left text-sm font-bold text-emerald-800 transition hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
              <span>Explore this department</span><span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
            </button>
          </article>)}
        </div>
        <p className="mt-5 text-xs leading-5 text-slate-500">Not sure where you fit? Choose the closest area in the application and describe your strengths. We can discuss cross-functional contributions.</p>
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
              <legend className="text-sm font-semibold">Skills & technologies <span className="font-normal text-slate-500">— optional, select any</span></legend>
              <p className="mt-1 text-xs leading-5 text-slate-500">Keep the form compact: open the picker to choose your skills.</p>
              <details className="group mt-3 rounded-xl border border-slate-200 bg-white">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm outline-none hover:bg-slate-50 focus:ring-2 focus:ring-emerald-500 [&::-webkit-details-marker]:hidden">
                  <span className="flex min-w-0 items-center gap-2">
                    <span className="text-emerald-700" aria-hidden="true">⌘</span>
                    <span className="truncate font-medium text-slate-700">{selectedSkills.length ? `${selectedSkills.length} skill${selectedSkills.length === 1 ? '' : 's'} selected` : 'Choose skills'}</span>
                  </span>
                  <span className="text-xs text-slate-500 group-open:hidden">Open +</span>
                  <span className="hidden text-xs text-slate-500 group-open:inline">Close −</span>
                </summary>
                <div className="border-t border-slate-100 p-3">
                  {selectedSkills.length > 0 && <div className="mb-3 flex flex-wrap items-center gap-1.5">
                    {selectedSkills.map((skill) => <button key={skill} type="button" onClick={() => setSelectedSkills((current) => current.filter((item) => item !== skill))} className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-900 ring-1 ring-inset ring-emerald-200" aria-label={`Remove ${skill}`}>{skill}<span aria-hidden="true">×</span></button>)}
                    <button type="button" onClick={() => setSelectedSkills([])} className="px-1.5 py-1 text-xs font-semibold text-slate-500 underline">Clear all</button>
                  </div>}
                  <div className="grid max-h-48 grid-cols-2 gap-1.5 overflow-y-auto sm:grid-cols-3">
                    {skills.map(([label, slug]) => {
                      const selected = selectedSkills.includes(label);
                      return <button key={label} type="button" aria-pressed={selected} onClick={() => setSelectedSkills((current) => selected ? current.filter((skill) => skill !== label) : [...current, label])} className={`flex min-h-9 items-center gap-2 rounded-lg border px-2 py-1.5 text-left text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-500 ${selected ? 'border-emerald-700 bg-emerald-50 text-emerald-900' : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-400'}`}>
                        <img src={`https://cdn.simpleicons.org/${slug}`} alt="" loading="lazy" className="h-4 w-4 shrink-0 object-contain" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
                        <span className="min-w-0 flex-1">{label}</span>
                        <span aria-hidden="true" className={selected ? 'text-emerald-700' : 'text-slate-300'}>{selected ? '✓' : '+'}</span>
                      </button>;
                    })}
                  </div>
                </div>
              </details>
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
