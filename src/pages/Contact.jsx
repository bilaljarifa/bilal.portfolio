import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production you'd POST to a backend or use EmailJS
    setSent(true);
  };

  return (
    <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-xs font-bold tracking-[0.2em] uppercase text-orange mb-4">
        Get In Touch
      </div>
      <h1 className="font-space text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight tracking-tight mb-4">
        Let's Work Together
      </h1>
      <p className="text-muted text-lg max-w-xl mb-16">
        Have a project in mind? Whether it's a web app, freelance gig, or just a chat — I'm
        always open.
      </p>

      <div className="grid md:grid-cols-[1fr_400px] gap-16 items-start">
        {/* Contact form */}
        {!sent ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-semibold mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Bilal Jarifa"
                className="w-full px-5 py-3.5 rounded-xl border-[1.5px] border-border bg-cardBg focus:outline-none focus:border-orange text-text placeholder:text-muted transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                className="w-full px-5 py-3.5 rounded-xl border-[1.5px] border-border bg-cardBg focus:outline-none focus:border-orange text-text placeholder:text-muted transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-5 py-3.5 rounded-xl border-[1.5px] border-border bg-cardBg focus:outline-none focus:border-orange text-text placeholder:text-muted transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="self-start px-8 py-3.5 rounded-full bg-orange text-white font-semibold text-sm hover:bg-orange/90 transition-colors"
            >
              Send Message ↗
            </button>
          </form>
        ) : (
          <div className="p-10 rounded-2xl border-[1.5px] border-orange bg-orange/5 text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h2 className="font-space text-2xl font-bold text-orange mb-2">Message Sent!</h2>
            <p className="text-muted">Thanks for reaching out. I'll get back to you soon.</p>
          </div>
        )}

        {/* Contact info sidebar */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-muted mb-2">Email</p>
            <a
              href="mailto:bilal@email.com"
              className="text-xl font-semibold hover:text-orange transition-colors"
            >
              bilal@email.com
            </a>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-muted mb-2">
              Location
            </p>
            <p className="text-xl font-semibold">Kénitra, Morocco 🇲🇦</p>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-muted mb-4">
              Social
            </p>
            <div className="flex gap-5">
              <a
                href="https://github.com/bilaljarifa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-[1.5px] border-border hover:border-orange hover:text-orange transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full border-[1.5px] border-border hover:border-orange hover:text-orange transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full border-[1.5px] border-border hover:border-orange hover:text-orange transition-colors"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl border-[1.5px] border-border bg-cardBg">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold">Available for work</span>
            </div>
            <p className="text-sm text-muted">Open to freelance & full-time opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
