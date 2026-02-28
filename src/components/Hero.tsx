import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import './Hero.css';

export function Hero() {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-eyebrow">A new kind of social</span>

        <h1 className="hero-title">
          Your Friends Build Your&nbsp;Profile.
        </h1>

        <p className="hero-subtitle">
          CircleMade is a private wall where your friends (and family) pin the
          stuff that made them think of you — photos, videos, quotes, memes,
          and memories.
        </p>

        <p className="hero-micro-line">
          It's the version of you that lives in real relationships.
        </p>

        <ul className="hero-bullets">
          <li>Invite-only — only your chosen circle can pin</li>
          <li>No likes, followers, or algorithm</li>
          <li>Delete anything instantly (you're always in control)</li>
        </ul>

        <form className="hero-form" onSubmit={handleSubmit}>
          <motion.div
            className="hero-input-wrap"
            animate={{
              boxShadow: focused
                ? '0 0 0 3px rgba(217, 119, 86, 0.25)'
                : '0 0 0 0px rgba(217, 119, 86, 0)',
            }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="hero-email" className="sr-only">Email address</label>
            <input
              id="hero-email"
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="hero-email-input"
              required
              autoComplete="email"
            />
          </motion.div>
          <Button type="submit" size="lg">Request invite</Button>
        </form>

        <p className="hero-privacy-line">
          No spam. Just your invite when it's ready.
        </p>
      </div>
    </section>
  );
}
