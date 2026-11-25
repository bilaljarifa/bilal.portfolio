import { useState } from 'react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { profileContact, profileCopy } from '../data/profile';

const fieldClass = 'block w-full rounded-xl border border-border bg-cardBg px-4 py-3 text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange';

export default function Contact({ language = 'en' }) {
  const copy = profileCopy[language].contact;
  const [draftOpened, setDraftOpened] = useState(false);
  const links = [
    { label: copy.email, text: profileContact.email, href: `mailto:${profileContact.email}`, Icon: Mail },
    { label: copy.phone, text: profileContact.phone, href: profileContact.phoneHref, Icon: Phone },
    { label: 'GitHub', text: 'bilaljarifa', href: profileContact.github, Icon: FaGithub, external: true },
    { label: 'LinkedIn', text: profileContact.name, href: profileContact.linkedin, Icon: FaLinkedin, external: true },
  ];

  function openDraft(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`${copy.subject} ${form.get('name')}`);
    const body = encodeURIComponent(`${form.get('message')}\n\n${form.get('name')}\n${form.get('email')}`);
    setDraftOpened(true);
    window.location.href = `mailto:${profileContact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-12 md:pt-40">
      <h1 className="font-space text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight tracking-tight">{copy.heading}</h1>
      <p className="mt-3 max-w-xl text-lg text-text/75">{copy.intro}</p>
      <div className="mt-8 grid max-w-5xl items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,.75fr)]">
        <form onSubmit={openDraft} className="grid gap-4 rounded-2xl border border-border bg-cardBg p-5 sm:p-6">
          <label className="grid gap-1.5 text-sm font-semibold">{copy.name}<input name="name" autoComplete="name" className={fieldClass} required /></label>
          <label className="grid gap-1.5 text-sm font-semibold">{copy.emailAddress}<input name="email" type="email" autoComplete="email" className={fieldClass} required /></label>
          <label className="grid gap-1.5 text-sm font-semibold">{copy.message}<textarea name="message" rows="5" className={fieldClass} required /></label>
          <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange/90">
            {copy.send}<ArrowUpRight size={16} aria-hidden="true" />
          </button>
          {draftOpened && <p role="status" className="text-sm text-text/75">{copy.draft}</p>}
        </form>
        <ul role="list" className="grid gap-3">
          {links.map(({ label, text, href, Icon, external }) => (
            <li key={href}>
              <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="flex items-center gap-3 rounded-xl border border-border bg-cardBg px-4 py-3 hover:border-orange">
                <Icon size={19} className="shrink-0 text-orange" aria-hidden="true" />
                <span className="min-w-0"><span className="block text-xs font-semibold text-text/70">{label}</span><span className="break-all text-sm font-medium">{text}</span></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
